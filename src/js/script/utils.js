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

//#region Internationalisation

const supportedLanguages = ['fr', 'en'];
const cultureLanguages = {
	[supportedLanguages[0]]: {
		code: 'fr-FR',
		message: 'Langue choisie : Français'
	},
	[supportedLanguages[1]]: {
		code: 'en-GB',
		message: 'Language chosen: English'
	}
};

let cachedTranslations = null;

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

function loadTranslations(lang) {
	fetch(`src/json/i18n/${lang}.json`)
		.then(response => response.json())
		.then(translations => {
			cachedTranslations = translations;
			document.head.querySelector('title').textContent = translations['title'];

			document.querySelectorAll('[data-translate]:not(option)').forEach(element => {
				const key = element.getAttribute('data-translate');
				element.textContent = translations[key];
				if (key === 'title') {
					element.setAttribute('title', translations['description']);
				}
			});

			translateOptions(translations);
		})
		.catch(error => console.error('Error loading translations:', error));
}

function translateOptions(translations) {
	document.querySelectorAll('option[data-translate]').forEach(option => {
		const key = option.getAttribute('data-translate');

		if (!translations?.options) {
			option.textContent = key;
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

//#endregion Internationalisation
