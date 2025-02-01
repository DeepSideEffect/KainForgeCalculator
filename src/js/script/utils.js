//#region Loading Scripts or CSS

function loadCSS(url) {
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = url;
	document.head.appendChild(link);
}

function loadScript(url) {
	const script = document.createElement('script');
	script.src = url;
	document.head.appendChild(script);
}

async function loadScriptAsync(url) {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
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

function fetchDataFromUrl(url, action, link) {
	fetch(url)
		.then(response => {
			if (!response.ok)
				throw new Error("La réponse réseau n'est pas 'ok'.");

			return response.text();
		})
		.then(data => {
			action(data, link);
		})
		.catch(error => {
			console.error(`Erreur inattendue durant le fetch sur ${url} :`, error);
		});
}

//#endregion Loading Scripts or CSS

//#region Text helpers

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

/**
 * Remplace tous les underscores d'un texte par des espaces (de manière optimisée).
 * @param {string} text Le texte sur lequel on souhaite effectuer le remplacement.
 * @returns {string} Une nouvelle chaîne de caractères copiée à partir de `text` mais en y remplaçant tous les '_' contenus par des espaces.
 */
function replaceUnderscores(text) {
	return !text?.includes('_') ? text : text.replace(/_/g, ' ');
}

//#endregion Text helpers

//#region Querystring

/** Vérifier si un paramètre spécifique existe dans le querystring et récupére sa valeur le cas échéant, null sinon */
function querystringParamValue(parametreName) {
	const urlParams = new URLSearchParams(window.location.search);
	let parametre = null;

	if (urlParams.has(parametreName)) {
		parametre = urlParams.get(parametreName);
		console.debug(`La valeur du paramètre '${parametreName}' est : ${parametre}`);
	} else
		console.debug(`Le paramètre '${parametreName}' n'existe pas dans la query string.`);

	return parametre;
}

function removeQueryStringParameter(param) {
	const url = new URL(window.location);
	url.searchParams.delete(param);
	window.history.replaceState(window.history.state, document.title, url.toString());
}

function updateQueryStringParameter(param, value) {
  const url = new URL(window.location);
  url.searchParams.set(param, value);
  window.history.replaceState(window.history.state, document.title, url.toString());
}

//#endregion Querystring

//#region Internationalisation

const supportedLanguages = ['fr', 'en'];
const cultureLanguages = {
	[supportedLanguages[0]]: {
		code: 'fr-FR',
		message: 'Langue choisie : Français.',
		errorMessage: "Le fichier des traductions n'est pas chargé, cette option est donc indisponible.",
		itemNameDisplayFormat: '{0} {1} {2} {3}',
		nameAdjectivePattern: '{0} {1}',
		infoDataUrl: 'https://r1.fr.bloodwars.net/'
	},
	[supportedLanguages[1]]: {
		code: 'en-GB',
		message: 'Language chosen: English.',
		errorMessage: 'The translation file is not loaded, this option cannot be used.',
		itemNameDisplayFormat: '{0} {2} {1} {3}',
		nameAdjectivePattern: '{1} {0}',
		infoDataUrl: 'https://r2.bloodwars.net/'
	}
};

let cachedTranslations = null;
let currentLanguage = supportedLanguages[0];

function i18n() {
	let lang = supportedLanguages[0];
	const langQuerystring = querystringParamValue('lang');
	if (!langQuerystring) {
		const langstored = localStorage.getItem('lang');
		if (langstored != null)
			lang = langstored;
	}
	else
		lang = supportedLanguages.includes(langQuerystring) ? langQuerystring : 'en';

	loadTranslations(lang);
	// initDomTradListener(); /!\ Ne plus utiliser pour éviter le plantage de l'application sous Firefox, mais fonctionne très bien sous Chrome, Edge et Opera.
}

function loadTranslations(lang, successCallback, errorCallback) {
	fetch(`src/json/i18n/${lang}.json`)
		.then(response => response.json())
		.then(translations => {
			currentLanguage = lang;
			cachedTranslations = translations;
			setDocumentLangAllVersions(lang);
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
			option.textContent = replaceUnderscores(key);
			return;
		}

		const translation = translations.options[key];
		option.textContent = translation ?? key;
	});
}

function initDomTradListener() {
	// Observer les changements dans le DOM --> /!\ Gros soucis avec Firefox, bug rapporté chez eux /!\
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
 * Définir la langue du document HTML quelque soit le navigateur utilisé
 * @param {*} lang Langue du document
 */
function setDocumentLangAllVersions(lang) {
	if (document.documentElement)
		document.documentElement.lang = lang;
	else {
		// Pour les anciens navigateurs qui ne supportent pas document.documentElement (comme Edge < v12)
		const htmlTag = document.getElementsByTagName('html')[0];
		if (htmlTag)
			htmlTag.setAttribute('lang', lang);
	}
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
