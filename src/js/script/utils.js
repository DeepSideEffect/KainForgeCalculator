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

		console.debug(`Les ${scriptsSrcList.length} scripts sont chargés.`);
	} catch (error) {
		console.error(error, 'Erreur lors du chargement des scripts :', scriptsSrcList);
	}
}

/** Internationalisation */
function loadTranslations(lang) {
	fetch(`src/json/i18n/${lang}.json`)
		.then(response => response.json())
		.then(translations => {
			document.querySelectorAll('[data-translate]').forEach(element => {
				const key = element.getAttribute('data-translate');
				element.textContent = translations[key];
				if (key === 'title') {
					element.setAttribute('title', translations['description']);
				}
			});

			document.querySelectorAll('option[data-translate]').forEach(option => {
				const key = option.getAttribute('data-translate');
				option.textContent = translations.options[key];
			});

			document.head.title = translations['title'];
		})
		.catch(error => console.error('Error loading translations:', error));
}
