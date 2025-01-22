//#region Scrolling

/** Faire défiler jusqu'en bas de la page */
function scrollToBottom() {
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: 'smooth'
	});
}

/** Faire défiler jusqu'en haut de la page */
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

/**
 * Scroll to bottom afer a delay
 * @param delay Time in ms when the scroll is delayed
 */
function scrollBottomAfterDelay(delay) {
	window.setTimeout(scrollToBottom, delay);
}

/**
 * Scroll to top afer a delay
 * @param delay Time in ms when the scroll is delayed
 */
function scrollTopAfterDelay(delay) {
	window.setTimeout(scrollToTop, delay);
}

function isVerticalScrollbarVisible() {
	return document.documentElement.scrollHeight > window.innerHeight;
}

function scrollBoutonTop() {
	scrollBoutonsAction(scrollToTop);
}

function scrollBoutonBottom() {
	scrollBoutonsAction(scrollToBottom);
}

//#endregion Scrolling

//#region Colors

function changeCurrentColor(newColor) {
	document.documentElement.style.setProperty('--current-color', newColor);
}

function couleurThemeEnFonctionDesRunes() {
	const type = document.getElementById('type').value;
	const typeObjetCourant = typesObjets[type - 1];
	changeCurrentColor(typeObjetCourant.color);
}

//#endregion Colors

//#region Caracteristique

function changementCaracteristique(desactiverBtn) {
	document.getElementById('calculer').disabled = desactiverBtn;
	document.getElementById('cube-container').classList.remove('no-perspective');
	document.getElementById('recapModification').classList.add('init');
	document.getElementById('resultat').classList.add('init');
	if (document.readyState === 'complete') {
		document.getElementById('poster').classList.remove('hidden');
		document.getElementById('ref-audio-applause')?.pause();
		document.getElementById('ref-audio-kick')?.play();
	}
	scrollTopAfterDelay(1250);
	setTimeout(() => document.getElementById('cube-container').classList.add('no-perspective'), 1750);
}

function createOption(index, nom, actuelSelect, souhaiteSelect) {
	const option = document.createElement('option');
	option.value = index;
	option.setAttribute('data-translate', nom);
	actuelSelect.appendChild(option);
	souhaiteSelect.appendChild(option.cloneNode(true));
}

function caracteristiqueInit(selectHtmlId) {
	const select = document.getElementById(selectHtmlId);
	select.innerHTML = '';
	select.addEventListener('change', () => changementCaracteristique(false));
	return select;
}

//#endregion Caracteristique

//#region Actions

function copyToClipboard(htmlId) {
	const textToCopy = gererLesCRLF(document.getElementById(htmlId).innerText);
	navigator.clipboard.writeText(textToCopy).then(() => {
		const msg = getTranslationWithDefaultValue('text-copied-message', 'Texte copié dans le presse-papiers !');
		showNotification(msg);
	}).catch(err => {
		const errMsgPrefix = 'Erreur lors de la copie : ';
		console.error(errMsgPrefix, err);
		const errMsg = errMsgPrefix.concat(err?.message);
		showNotification(errMsg);
	});
}

function showNotification(message) {
	document.getElementById('ref-audio-copy2')?.play();
	document.getElementById('notification-container').classList.add('show');
	document.getElementById('notification').textContent = message;
	document.getElementById('notification').classList.add('show');

	setTimeout(() => {
		document.getElementById('notification').classList.remove('show');
		setTimeout(() => document.getElementById('notification-container').classList.remove('show'), 800);
	}, 2000);
}

function declancherSonAuChargement() {
	const audio = document.getElementById('ref-audio-applause');
	audio?.play().catch(error => {
		console.error("Erreur lors de la lecture de l'audio : ", error);
	});

	document.removeEventListener('click', declancherSonAuChargement);
}

function removeCssClassForAll(cssClass) {
	const elements = document.getElementsByClassName(cssClass);
	[...elements].forEach(element => {
		element.classList.remove(cssClass);
	});
}

//#endregion Actions

//#region Results

function composantNomObjet(objet) {
	const span = document.createElement('span');
	span.classList.add('nom-objet-bw');
	span.textContent = nomCompletObjet(objet);
	return span;
}

/** Résultat affiché sur une seule (ou deux) ligne(s) */
function inLineResultDisplay(typeObjetCourant, coutTotal, coutEnPiecesEpiques, nbRunes, libelleRunes, objetActuel, objetSouhaite) {
	const evoPointsLabel = getTranslationWithDefaultValue('cout-total-PE-label', "points d'évolution");
	const piecesLabel = getTranslationWithDefaultValue('cout-total-pieces-label', 'pièces épiques');
	const etAnd = getTranslationWithDefaultValue('et-and', 'et');
	document.getElementById("resultatV1-text").style.color = typeObjetCourant.color;
	document.getElementById("resultatV1-text").textContent = `${coutTotal.coutTotalPE} ${evoPointsLabel}, ${coutEnPiecesEpiques} ${piecesLabel} ${etAnd} ${nbRunes} ${libelleRunes}.`;
	document.getElementById("resultatV1-modif").innerHTML = "";
	document.getElementById("resultatV1-modif").appendChild(composantNomObjet(objetActuel));
	const inBetweenText = getTranslationWithDefaultValue('entre-items-label', 'vers');
	const text = document.createElement("text");
	text.textContent = ` ${inBetweenText} `;
	document.getElementById("resultatV1-modif").appendChild(text);
	document.getElementById("resultatV1-modif").appendChild(composantNomObjet(objetSouhaite));
}

/** Résultat formaté à l'affichage */
function formattedResultDisplay(typeObjetCourant, coutTotal, coutEnPiecesEpiques, nbRunes, libelleRunes, objetActuel, objetSouhaite) {
	document.getElementById("recapModification").innerHTML = "";
	document.getElementById("recapModification").appendChild(composantNomObjet(objetActuel));
	const text2 = document.createElement("text");
	text2.textContent = "==>";
	const p = document.createElement("p");
	p.appendChild(text2);
	document.getElementById("recapModification").appendChild(p);
	document.getElementById("recapModification").appendChild(composantNomObjet(objetSouhaite));
	document.getElementById("coutTotalPE").textContent = coutTotal.coutTotalPE;
	document.getElementById("coutEnPiecesEpiques").textContent = coutEnPiecesEpiques;
	document.getElementById("nbRunes").textContent = nbRunes;
	document.getElementById("libelleRunes").textContent = libelleRunes;
	document.getElementById("libelleRunes").style.color = typeObjetCourant.color;
}

/** Calculer et afficher le résultat */
function calculerPourAfficher() {
	const type = document.getElementById("type").value;
	const supportActuel = document.getElementById("supportActuel").value;
	const prefixeActuel = document.getElementById("prefixeActuel").value;
	const suffixeActuel = document.getElementById("suffixeActuel").value;
	const supportSouhaite = document.getElementById("supportSouhaite").value;
	const prefixeSouhaite = document.getElementById("prefixeSouhaite").value;
	const suffixeSouhaite = document.getElementById("suffixeSouhaite").value;

	const objetActuel = new Objet(type, caracteristiques[type].support[supportActuel], caracteristiques[type].prefixe[prefixeActuel], caracteristiques[type].suffixe[suffixeActuel]);
	const objetSouhaite = new Objet(type, caracteristiques[type].support[supportSouhaite], caracteristiques[type].prefixe[prefixeSouhaite], caracteristiques[type].suffixe[suffixeSouhaite]);

	const coutTotal = calculerCoutTotal(objetActuel, objetSouhaite, caracteristiques[type].support, caracteristiques[type].prefixe, caracteristiques[type].suffixe);
	const typeObjetCourant = typesObjets[type - 1];
	const coutEnPiecesEpiques = coutTotal.nbMvtsTotal * typeObjetCourant.piecesEpiques;
	const nbRunes = coutTotal.nbMvtsTotal * typeObjetCourant.nbRunes;
	const runesLabel = getTranslationWithKeyAsDefault(typeObjetCourant.libelleRunes);
	const libelleRunesFormat = cultureLanguages[currentLanguage].nameAdjectivePattern;
	const runesUnitText = 'rune'.concat(nbRunes > 1 ? 's' : '');
	const libelleRunes = formatString(libelleRunesFormat, runesUnitText, runesLabel);

	inLineResultDisplay(typeObjetCourant, coutTotal, coutEnPiecesEpiques, nbRunes, libelleRunes, objetActuel, objetSouhaite);
	formattedResultDisplay(typeObjetCourant, coutTotal, coutEnPiecesEpiques, nbRunes, libelleRunes, objetActuel, objetSouhaite);
}

/** Méthode déclenchée au click sur le bouton Calculer */
function calculerClick() {
	document.getElementById('cube-container').classList.remove('no-perspective');
	calculerPourAfficher();
	document.getElementById('resultat').classList.remove('init');
	document.getElementById('poster').classList.add('hidden');
	setTimeout(() => document.getElementById('recapModification').classList.remove('init'), 75);
	setTimeout(() => document.getElementById('cube-container').classList.add('no-perspective'), 1750);
	scrollBottomAfterDelay(1250);
	document.getElementById('ref-audio-copy')?.play();
	document.getElementById('scroll-bottom-btn').disabled = false;
	document.getElementById('scroll-top-btn').style.display = isVerticalScrollbarVisible() ? 'inline-block' : 'none';
}

//#endregion Results

//#region Sounds

/** Réglage du volume de tous les audios */
function volumeControl() {
	const volumeBar = document.getElementById('volumeControl');
	changerVolumeTous(volumeBar.value);
	localStorage.setItem('volumeKFC', volumeBar.value);
}

/** Réglage de l'état muet de tous les audios */
function muteOrUnmuteAll() {
	const soundToggle = document.getElementById('soundToggle');
	setMuteStateAll(!soundToggle.checked);
	localStorage.setItem('soundOn', JSON.stringify(soundToggle.checked));
}

/** Initialise les préférences utilisateur 'son' stockées */
function initialiserParamStockes() {
	const volume = localStorage.getItem('volumeKFC');
	const soundOn = JSON.parse(localStorage.getItem('soundOn'));

	if (volume != null) {
		document.getElementById('volumeControl').value = volume;
		volumeControl();
	}

	if (soundOn != null) {
		document.getElementById('soundToggle').checked = soundOn;
		setMuteStateAll(!soundOn);
	}
	else
		document.getElementById('soundToggle').checked = true;
}

function getActualSoundSettings() {
	const soundToggle = document.getElementById('soundToggle');
	const volumeBar = document.getElementById('volumeControl');

	return { soundOn: soundToggle.checked,	volumeKFC: volumeBar.value };
}

/** Enrobe l'action des boutons de scroll avec un son */
function scrollBoutonsAction(action) {
	action();
	document.getElementById("ref-audio-slide")?.play();
}

//#endregion Sounds

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
	window.history.replaceState({}, document.title, url.toString());
}

//#endregion Querystring

//#region Listeners

function listenToEnterKey() {
	document.body.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			event.preventDefault(); // Empêche le comportement par défaut de la touche "Entrée"
			document.getElementById("calculer").click();
		}
	});
}

function listenToLangButtonsClick() {
	document.querySelectorAll('span.lang-btn').forEach(element => {
		element.addEventListener('click', (event) => {
			speechSynthesis?.cancel();
			const clickedElement = event.currentTarget;
			const chosenLang = clickedElement.getAttribute('data-lang');
			loadTranslations(chosenLang, calculerPourAfficher);
			localStorage.setItem('lang', chosenLang);
			removeQueryStringParameter('lang');
			const soundSettings = getActualSoundSettings();
			voiceSpeak(chosenLang, soundSettings.soundOn, soundSettings.volumeKFC);
		});
	});
}

//#endregion Listeners

//#region Initialisation

function displayVersionNumber() {
	document.getElementById('version-numero').textContent = pageVersion;
}

function intro() {
	setTimeout(() => removeCssClassForAll('intro'), 75);
	setTimeout(() => removeCssClassForAll('intro-cube'), 2000);
}

function init() {
	i18n();
	displayVersionNumber();

	const typeSelect = document.getElementById('type');
	typesObjets.forEach(type => {
		const option = document.createElement('option');
		option.value = type.id;
		option.setAttribute('data-translate', type.nom);
		typeSelect.appendChild(option);
	});

	const updateCaracteristiques = () => {
		const typeId = typeSelect.value;
		const supportActuelSelect = caracteristiqueInit("supportActuel");
		const prefixeActuelSelect = caracteristiqueInit("prefixeActuel");
		const suffixeActuelSelect = caracteristiqueInit("suffixeActuel");
		const supportSouhaiteSelect = caracteristiqueInit("supportSouhaite");
		const prefixeSouhaiteSelect = caracteristiqueInit("prefixeSouhaite");
		const suffixeSouhaiteSelect = caracteristiqueInit("suffixeSouhaite");

		caracteristiques[typeId].support.forEach((caracteristique, index) => {
			createOption(index, caracteristique.nom, supportActuelSelect, supportSouhaiteSelect);
		});

		caracteristiques[typeId].prefixe.forEach((caracteristique, index) => {
			createOption(index, caracteristique.nom, prefixeActuelSelect, prefixeSouhaiteSelect);
		});

		caracteristiques[typeId].suffixe.forEach((caracteristique, index) => {
			createOption(index, caracteristique.nom, suffixeActuelSelect, suffixeSouhaiteSelect);
		});

		couleurThemeEnFonctionDesRunes();
		changementCaracteristique(true);
		translateOptions(cachedTranslations);

		if (!isVerticalScrollbarVisible())
			document.getElementById("scroll-bottom-btn").disabled = true;
	};

	typeSelect.addEventListener("change", updateCaracteristiques);
	typeSelect.dispatchEvent(new Event("change")); // Déclencher l'événement change lors du chargement de la page

	document.getElementById("calculer").addEventListener("click", calculerClick);
	listenToEnterKey();
	document.addEventListener("click", declancherSonAuChargement);
	document.getElementById('volumeControl').addEventListener('input', volumeControl);
	document.getElementById('soundToggle').addEventListener('change', muteOrUnmuteAll);
	initialiserParamStockes();
	listenToLangButtonsClick()

	intro();
}

function startup() {
	if (document.readyState === 'loading')
		document.addEventListener('DOMContentLoaded', init);
	else
		init();
}

//#endregion Initialisation
