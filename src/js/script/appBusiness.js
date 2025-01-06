/**
 * Calculer le coût de la modification pour une seule caractéristique
 * @param {*} actuel la caractéristique dans son état actuel
 * @param {*} souhaite la caractéristique voulue
 * @param {*} caracteristiques les informations nécessaires
 * @returns Le coût de la modification pour la caractéristique donnée
 */
function calculerCoutCaracteristique(actuel, souhaite, caracteristiques) {
	if (actuel?.nom === souhaite?.nom) {
		return { coutPE: 0, nbMvts: 0 };
	}

	const indexActuel = caracteristiques.findIndex(c => c.nom === actuel.nom);
	const indexSouhaite = caracteristiques.findIndex(c => c.nom === souhaite.nom);

	let nbMvts = 0;
	let coutPE = 0;

	if (indexActuel < indexSouhaite) {
		for (let i = indexActuel + 1; i <= indexSouhaite; i++) {
			coutPE += caracteristiques[i].pe;
			nbMvts++;
		}
	} else {
		for (let i = indexActuel - 1; i >= indexSouhaite; i--) {
			coutPE += caracteristiques[i].pe;
			nbMvts++;
		}
	}

	return { coutPE, nbMvts };
}

/**
 * Calculer le coût total de la modification d'un objet
 * @param {*} objetActuel l'objet dans on état initial
 * @param {*} objetSouhaite l'objet désiré
 * @param {*} caracteristiquesSupport les données nécessaires sur le support
 * @param {*} caracteristiquesPrefixe les données nécessaires sur le préfixe
 * @param {*} caracteristiquesSuffixe les données nécessaires sur le suffixe
 * @returns Le coût total de la modification d'un objet donné
 */
function calculerCoutTotal(objetActuel, objetSouhaite, caracteristiquesSupport, caracteristiquesPrefixe, caracteristiquesSuffixe) {
	let coutTotalPE = 0;
	let nbMvtsTotal = 0;

	const resultatSupport = calculerCoutCaracteristique(objetActuel.support, objetSouhaite.support, caracteristiquesSupport);
	const resultatPrefixe = calculerCoutCaracteristique(objetActuel.prefixe, objetSouhaite.prefixe, caracteristiquesPrefixe);
	const resultatSuffixe = calculerCoutCaracteristique(objetActuel.suffixe, objetSouhaite.suffixe, caracteristiquesSuffixe);

	coutTotalPE += resultatSupport.coutPE;
	coutTotalPE += resultatPrefixe.coutPE;
	coutTotalPE += resultatSuffixe.coutPE;

	nbMvtsTotal += resultatSupport.nbMvts;
	nbMvtsTotal += resultatPrefixe.nbMvts;
	nbMvtsTotal += resultatSuffixe.nbMvts;

	return { coutTotalPE, nbMvtsTotal };
}

/**
 * Compose le nom d'un objet depuis ses propriétés
 * @param {*} objet objet complet
 * @returns le nom complet au format texte
 */
function nomCompletObjet(objet) {
	return `Epique ${objet?.support?.nom ?? ''} ${objet?.prefixe?.nom ?? ''} ${objet?.suffixe?.nom ?? ''}`;
}

/** Nettoyage des doubles sauts de ligne */
function replaceDoubleCRLF(text) {
	return text.replace(/\n\n/g, '\n');
}

function ajouteSecifiquesDoubleCRLF(text) {
	return text.replace("Coût total :", "\n\nCoût total :");
}

function gererLesCRLF(text) {
	text = replaceDoubleCRLF(text);
	text = ajouteSecifiquesDoubleCRLF(text);
	return text;
}
