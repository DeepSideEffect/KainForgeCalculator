const scriptsToLoadInParallel = [
	'src/js/script/multimedia.js', // Outils multimedia
	'src/js/models/model.js', // Les models
	'src/js/script/appBusiness.js', // Logique
];

const scriptsToLoadInOrder = [
	'src/js/script/appDOM.js', // DOM & events
	'src/js/data/dataMain.js' // Les data (en dernier)
];

const globalConfig = {
	proxyUrl: 'https://smart-proxy.onrender.com/proxy?url=',
	playerLvl: 100
};

async function main() {
	await loadScriptsInParallel(scriptsToLoadInParallel);
	await loadScriptsInOrder(scriptsToLoadInOrder);
	await loadDataScripts()
	startup();
}

main();
