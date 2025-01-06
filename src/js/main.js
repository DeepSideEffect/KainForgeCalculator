const scriptsToLoadInOrder = [
	'src/js/script/multimedia.js', // Outils multimedia
	'src/js/models/model.js', // Les models
	'src/js/script/appBusiness.js', // Logique
	'src/js/script/appDOM.js', // DOM & events
	'src/js/data/dataMain.js' // Les data (en dernier)
];
loadScriptsInOrder(scriptsToLoadInOrder);