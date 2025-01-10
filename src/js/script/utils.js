function loadCSS(url) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = url;
	document.head.appendChild(link);
}

function loadScript(url) {
	var script = document.createElement('script');
	script.src = url;
	document.head.appendChild(script);
}

async function loadScriptAsync(url) {
	return new Promise((resolve, reject) => {
		var script = document.createElement('script');
		script.src = url;
		script.onload = () => resolve(url);
		script.onerror = () => reject(new Error(`Failed to load script ${url}`));
		document.head.appendChild(script);
	});
}

async function loadScriptsInOrder(scriptsSrcList) {
	try {
		for (const src of scriptsSrcList) {
			await loadScriptAsync(src);
		}

		console.debug(`Les ${scriptsSrcList.length} scripts sont chargés dans l'ordre.`);
	} catch (error) {
		console.error(error, 'Erreur lors du chargement en ordre des scripts :', scriptsSrcList);
	}
}

async function loadScriptsInParallel(scriptsSrcList) {
	try {
			const promises = scriptsSrcList.map(src => loadScriptAsync(src));
			await Promise.all(promises);
			console.debug(`Les ${scriptsSrcList.length} scripts sont chargés en parallèle.`);
	} catch (error) {
			console.error(error, 'Erreur lors du chargement en parallèle des scripts :', scriptsSrcList);
	}
}

/**
 * Remplace les espaces réservés dans une chaîne de format par les valeurs correspondantes fournies en paramètres.
 * @param {string} format Chaîne de format composite contenant des espaces réservés.
 * @param  {...any} args Un nombre variable d'arguments qui seront utilisés pour remplacer les espaces réservés dans la chaîne `format`.
 * @returns {string} Une nouvelle chaîne de caractères avec les espaces réservés dans `format` remplacés par les valeurs correspondantes des arguments `args`.
 */
function formatString(format, ...args) {
	return format.replace(/{(\d+)}/g, (match, number) =>
		typeof args[number] !== 'undefined' ? args[number] : match
	);
}

//#region Internationalisation

const supportedLanguages = ['fr', 'en'];
const cultureLanguages = {
	[supportedLanguages[0]]: {
		code: 'fr-FR',
		message: 'Langue choisie : Français.',
		errorMessage: "Le fichier des traductions n'est pas chargé, cette option est donc indisponible.",
		itemNameDisplayFormat: '{0} {1} {2} {3}',
		nameAdjectivePattern: '{0} {1}'
	},
	[supportedLanguages[1]]: {
		code: 'en-GB',
		message: 'Language chosen: English.',
		errorMessage: 'The translation file is not loaded, this option cannot be used.',
		itemNameDisplayFormat: '{0} {2} {1} {3}',
		nameAdjectivePattern: '{1} {0}'
	}
};

let cachedTranslations = null;
let currentLanguage = supportedLanguages[0];

function i18n() {
	var lang = supportedLanguages[0];
	var langQuerystring = querystringParamValue('lang');
	if (!langQuerystring) {
		var langstored = localStorage.getItem('lang');
		if (langstored != null)
			lang = langstored;
	}
	else
		lang = supportedLanguages.includes(langQuerystring) ? langQuerystring : 'en';

	loadTranslations(lang);
	initDomTradListener();
}

function loadTranslations(lang, successCallback, errorCallback) {
	fetch(`src/json/i18n/${lang}.json`)
		.then(response => response.json())
		.then(translations => {
			currentLanguage = lang;
			cachedTranslations = translations;
			document.head.querySelector('title').textContent = translations['title'];
			document.body.querySelector('.about').href = translations['readMeURL'];

			document.querySelectorAll('[data-translate]:not(option)').forEach(element => {
				const key = element.getAttribute('data-translate');
				element.textContent = translations[key];
				if (element.hasAttribute('data-translate-title')) {
					const description = translations[`${key}-description`];
					if (description)
						element.setAttribute('title', description);
				}
			});

			translateOptions(translations);
			translateTitleOfButtonsWithoutLabel(translations);

			if (successCallback) successCallback();
		})
		.catch(error => {
			console.error('Error loading translations:', error);
			if (errorCallback) errorCallback(error);
		});
}

function translateOptions(translations) {
	document.querySelectorAll('option[data-translate]').forEach(option => {
		const key = option.getAttribute('data-translate');

		if (!translations?.options) {
			option.textContent = !key.includes('_') ? key : key.replace(/_/g, ' ');
			return;
		}

		const translation = translations.options[key];
		option.textContent = translation ?? key;
	});
}

function initDomTradListener() {
	// Observer les changements dans le DOM
	const observer = new MutationObserver(mutations => {
		mutations.forEach(mutation => {
			if (mutation.type === 'childList')
				translateOptions(cachedTranslations);
		});
	});

	// Configurer l'observateur pour surveiller les ajouts d'éléments
	observer.observe(document.body, { childList: true, subtree: true });
}

function translateTitleOfButtonsWithoutLabel(translations) {
	const buttonsIds = [
		'scroll-bottom-btn',
		'scroll-top-btn',
		'volumeControl',
		'soundToggle-container',
		'data-sources',
		'resultatV1',
		'resultatV2'
	]

	buttonsIds.forEach(id => {
		const button = document.getElementById(id);
		button.setAttribute('title', translations[`${id}-description`]);
	});
}

/**
 * Wrapper pour attendre la fin de loadTranslations de manière synchrone
 * @param {*} lang langue choisie (du tableau supportedLanguages)
 * @returns
 */
async function loadTranslationsAsync(lang) {
	return new Promise((resolve, reject) => {
		loadTranslations(lang);
		resolve();
	});
}

//#endregion Internationalisation
