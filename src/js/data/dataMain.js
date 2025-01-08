const dataScriptsToLoadInOrder = [
	'src/js/data/stuffTypes.js', // Les types d'objet
	'src/js/data/stuffDetails.js', // Les détails d'objet
	'src/js/data/kainForge.js' // Forge de Kain
];

async function loadDataScripts() {
	await loadScriptsInOrder(dataScriptsToLoadInOrder);
}
