//#region Calculs

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

//#endregion Calculs

//#region Formattage

/**
 * Compose le nom d'un objet depuis ses propriétés
 * @param {*} objet objet complet
 * @returns le nom complet au format texte
 */
function nomCompletObjet(objet) {
	const itemQuality = getTranslationWithDefaultValue('item-quality', 'Epique');
	const itemSupport = getOptionTranslationWithKeyAsDefault(objet?.support?.nom);
	const itemPrefix = getOptionTranslationWithKeyAsDefault(objet?.prefixe?.nom);
	const itemSuffix = replaceUnderscores(getOptionTranslationWithKeyAsDefault(objet?.suffixe?.nom));
	const format = cultureLanguages[currentLanguage].itemNameDisplayFormat;

	return formatString(format, itemQuality, itemSupport ?? '', itemPrefix ?? '', itemSuffix ?? '');
}

/** Nettoyage des doubles sauts de ligne */
function replaceDoubleCRLF(text) {
	return text.replace(/\n\n/g, '\n');
}

function ajouteSecifiquesDoubleCRLF(text) {
	const searchText = getTranslationWithDefaultValue('cout-total-label', 'Coût total :');
	return text.replace(searchText, `\n\n${searchText}`);
}

function gererLesCRLF(text) {
	text = replaceDoubleCRLF(text);
	text = ajouteSecifiquesDoubleCRLF(text);
	return text;
}

//#endregion Formattage

//#region Traductions

function getValueOrDefault(getValueAction, getValueParams, defaultValue) {
	const value = getValueAction(getValueParams);
	return !!value ? value : defaultValue;
}

function getTranslation(translationKey) {
	return !!cachedTranslations && !!cachedTranslations[translationKey]
		? cachedTranslations[translationKey]
		: null;
}

getTranslationWithDefaultValue = (translationKey, defaultValue) =>
	getValueOrDefault(getTranslation, translationKey, defaultValue);

getTranslationWithKeyAsDefault = (translationKey) =>
	getTranslationWithDefaultValue(translationKey, translationKey);

function getOptionTranslation(translationKey) {
	return !!cachedTranslations?.options && !!cachedTranslations.options[translationKey]
		? cachedTranslations.options[translationKey]
		: null;
}

getOptionTranslationWithDefaultValue = (translationKey, defaultValue) =>
	getValueOrDefault(getOptionTranslation, translationKey, defaultValue);

getOptionTranslationWithKeyAsDefault = (translationKey) =>
	getOptionTranslationWithDefaultValue(translationKey, translationKey);

//#endregion Traductions

//#region Voix

function voiceSpeak(lang, soundOn, volume) {
	const textMessage = cachedTranslations != null ? cultureLanguages[lang].message : cultureLanguages[lang].errorMessage;
	const voiceVolume = soundOn ? volume : 0.0;
	speechSynthesizer(lang, textMessage, voiceVolume, 1);
}

//#endregion Voix
