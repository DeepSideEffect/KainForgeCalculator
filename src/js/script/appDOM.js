//#region Scrolling

function scrollToElement(element) {
	if (!element) {
		console.error('element is not defined, not possible to scroll to it.');
		return;
	}

	element.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest'
	});
}

/** Faire défiler jusqu'en bas de la page */
function scrollToBottom() {
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: 'smooth'
	});

	envoyerUsage('scroll_bottom_click', 'Clic scroller tout en bas');
}

/** Faire défiler jusqu'en haut de la page */
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});

	envoyerUsage('scroll_top_click', 'Clic scroller tout en haut');
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

function envoyerUsageCarac(select, desactiverBtn) {
	const selected = select.options[select.selectedIndex].text;
	if (selected) {
		const selectionEvtName = desactiverBtn ? 'selectionner_type' : 'selectionner_carac';
		envoyerUsage(selectionEvtName, selected);
	}
}

function changementCaracteristique(select, desactiverBtn) {
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
	envoyerUsageCarac(select, desactiverBtn);
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
	select.addEventListener('change', () => changementCaracteristique(select, false));
	return select;
}

const hasClass = (element, className) =>
	element.classList.contains(className);

const isDescriptionDisplayed = () =>
	!hasClass(document.getElementById('itemDataInfo'), 'hide');

//#endregion Caracteristique

//#region Actions

function copyToClipboard(htmlId) {
	const textToCopy = gererLesCRLF(document.getElementById(htmlId).innerText);
	navigator.clipboard.writeText(textToCopy).then(() => {
		const msg = getTranslationWithDefaultValue('text-copied-message', 'Texte copié dans le presse-papiers !');
		showNotification(msg);
		envoyerUsage('copy_click', 'Copier');
	}).catch(err => {
		const errMsgPrefix = 'Erreur lors de la copie : ';
		console.error(errMsgPrefix, err);
		const errMsg = errMsgPrefix.concat(err?.message);
		showNotification(errMsg);
		envoyerUsage('copy_click_fail', `Copie erreur : ${err?.message}`);
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

function removeLastNChildren(element, n) {
	for (let i = 0; i < n; i++) {
		if (element.lastChild) element.removeChild(element.lastChild);
	}
}

function correctPictureSources(pitureTable) {
	const images = pitureTable.getElementsByTagName('img');
	[...images].forEach(image => {
		const newSrc = image.src.replace(getCurrentDomain(), '');
		image.src = cultureLanguages[currentLanguage].infoDataUrl.concat(newSrc);
	});

	const div = pitureTable.getElementsByClassName('itemMainImageContainer')[0];
	let img = div.style.backgroundImage;
	const imgUrl = extractSourceFromUrlFunction(img);
	div.style.backgroundImage = `url("${cultureLanguages[currentLanguage].infoDataUrl.concat(imgUrl)}")`;
}

function speakMessage(message) {
	const soundSettings = getActualSoundSettings();
	voiceSpeak(currentLanguage, message, soundSettings.soundOn, soundSettings.volumeKFC);
}

function closeInfo() {
	document.getElementById('itemDataInfo').classList.add('hide');
	document.getElementById('ref-audio-close')?.play();
}

function changeDisplayFrom(itemDataFromDiv) {
	itemDataFromDiv.innerHTML = itemDataFromDiv.innerHTML.replace(' ; ', '<br>');
	const firstTextNode = itemDataFromDiv.firstChild;
	const firstElement = itemDataFromDiv.firstElementChild;

	if (firstTextNode && firstElement) {
		const italicElement = document.createElement('i');
		italicElement.appendChild(document.createTextNode(firstTextNode.nodeValue));
		italicElement.appendChild(firstElement.cloneNode(true));

		itemDataFromDiv.replaceChild(italicElement, firstTextNode);
		itemDataFromDiv.removeChild(firstElement);
	}
}

function getInactiveItemSetEffect(element) {
	return element.querySelector('span.inactiveItemSetEffect');
}

function containsInactiveItemSetEffect(element) {
	return getInactiveItemSetEffect(element) !== null;
}

function getLastInactiveItemSetEffect(element) {
	let current = getInactiveItemSetEffect(element);
	while (current && containsInactiveItemSetEffect(current)) {
		current = getInactiveItemSetEffect(current);
	}

	return current;
}

function formatItemDataFrom(itemDataFromDiv) {
	itemDataFromDiv.style = '';
	itemDataFromDiv.classList.add('item-info');
	const nbNodesToRemove = 26;

	if (containsInactiveItemSetEffect(itemDataFromDiv)) {
		const span = getLastInactiveItemSetEffect(itemDataFromDiv);
		removeLastNChildren(span, nbNodesToRemove);
	}
	else if (itemDataFromDiv.childNodes.length > nbNodesToRemove)
		removeLastNChildren(itemDataFromDiv, nbNodesToRemove);

	changeDisplayFrom(itemDataFromDiv);
}

function genererHyperLien(link, textContent, title) {
	const itemLink = document.createElement('a');
	itemLink.setAttribute('rel', 'noopener');
	itemLink.target = '_blank';
	itemLink.href = link;
	itemLink.textContent = textContent;
	itemLink.title = title;

	itemLink.addEventListener('click', function (_event) {
		envoyerUsage('details_link_click', `Lien pour ${textContent}`);
	});

	return itemLink;
}

function afficherInfoItem(itemData, link) {
	const doc = parseToHtmlDoc(itemData);
	const pitureTable = doc.getElementsByClassName('itemImagesContainer')[0];
	const itemDataFromDiv = pitureTable.parentElement.nextSibling;
	const itemDataInfoDiv = document.getElementById('itemDataInfo-details');

	correctPictureSources(pitureTable);
	itemDataInfoDiv.innerHTML = '';
	itemDataInfoDiv.appendChild(pitureTable);

	formatItemDataFrom(itemDataFromDiv);
	itemDataInfoDiv.appendChild(itemDataFromDiv);

	const itemLinkLabel = getTranslationWithDefaultValue('item-link-label', 'Details');
	const itemLinkTitle = getTranslationWithDefaultValue('item-link-title', 'Voir détails');
	const itemLink = genererHyperLien(link, itemLinkLabel, itemLinkTitle);
	itemDataInfoDiv.appendChild(itemLink);

	const itemDataContainerDiv = document.getElementById('itemDataInfo');
	itemDataContainerDiv.classList.remove('hide');
	scrollToElement(itemDataContainerDiv);
}

function fermerInfoSiAffiche() {
	if (isDescriptionDisplayed()) closeInfo();
}

function updatePlayerLevel(paramName, numLvl) {
	globalConfig.playerLvl = numLvl;
	localStorage.setItem(paramName, numLvl);
	envoyerUsage('playerLvl_update', `Level ${numLvl}`);
}

function setSavedPlayerLevel(paramName) {
	const playerLvlRecorded = localStorage.getItem(paramName);

	if (playerLvlRecorded) {
		const numLvl = Number(playerLvlRecorded);
		if (!isNaN(numLvl) && numLvl > 0 && numLvl <= 1000) {
			globalConfig.playerLvl = numLvl;
		}
	}
}

//#endregion Actions

//#region Results

function composantNomObjet(objet) {
	const span = document.createElement('span');
	span.classList.add('nom-objet-bw');
	span.textContent = nomCompletObjet(objet);
	span.title = getTranslationWithDefaultValue('item-click-title', 'Cliquer pour la description');
	addItemNameClick(span, objet);
	return span;
}

/** Résultat affiché sur une seule (ou deux) ligne(s) */
function inLineResultDisplay(typeObjetCourant, coutTotal, coutEnPiecesEpiques, nbRunes, libelleRunes, objetActuel, objetSouhaite) {
	const evoPointsLabel = getTranslationWithDefaultValue('cout-total-PE-label', "points d'évolution");
	const piecesLabel = getTranslationWithDefaultValue('cout-total-pieces-label', 'pièces épiques');
	const etAnd = getTranslationWithDefaultValue('et-and', 'et');
	document.getElementById('resultatV1-text').style.color = typeObjetCourant.color;
	document.getElementById('resultatV1-text').textContent = `${coutTotal.coutTotalPE} ${evoPointsLabel}, ${coutEnPiecesEpiques} ${piecesLabel} ${etAnd} ${nbRunes} ${libelleRunes}.`;
	document.getElementById('resultatV1-modif').innerHTML = '';
	document.getElementById('resultatV1-modif').appendChild(composantNomObjet(objetActuel));
	const inBetweenText = getTranslationWithDefaultValue('entre-items-label', 'vers');
	const text = document.createElement('text');
	text.textContent = ` ${inBetweenText} `;
	document.getElementById('resultatV1-modif').appendChild(text);
	document.getElementById('resultatV1-modif').appendChild(composantNomObjet(objetSouhaite));
}

/** Résultat formaté à l'affichage */
function formattedResultDisplay(typeObjetCourant, coutTotal, coutEnPiecesEpiques, nbRunes, libelleRunes, objetActuel, objetSouhaite) {
	document.getElementById('recapModification').innerHTML = '';
	document.getElementById('recapModification').appendChild(composantNomObjet(objetActuel));
	const text2 = document.createElement('text');
	text2.textContent = '==>';
	const p = document.createElement('p');
	p.appendChild(text2);
	document.getElementById('recapModification').appendChild(p);
	document.getElementById('recapModification').appendChild(composantNomObjet(objetSouhaite));
	document.getElementById('coutTotalPE').textContent = coutTotal.coutTotalPE;
	document.getElementById('coutEnPiecesEpiques').textContent = coutEnPiecesEpiques;
	document.getElementById('nbRunes').textContent = nbRunes;
	document.getElementById('libelleRunes').textContent = libelleRunes;
	document.getElementById('libelleRunes').style.color = typeObjetCourant.color;
}

/** Calculer et afficher le résultat */
function calculerPourAfficher() {
	const type = document.getElementById('type').value;
	const supportActuel = document.getElementById('supportActuel').value;
	const prefixeActuel = document.getElementById('prefixeActuel').value;
	const suffixeActuel = document.getElementById('suffixeActuel').value;
	const supportSouhaite = document.getElementById('supportSouhaite').value;
	const prefixeSouhaite = document.getElementById('prefixeSouhaite').value;
	const suffixeSouhaite = document.getElementById('suffixeSouhaite').value;

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
	envoyerUsage('calculer_click', 'Calculer');
}

//#endregion Results

//#region Sounds

/** Réglage du volume de tous les audios */
function volumeControl() {
	const volumeBar = document.getElementById('volumeControl');
	changerVolumeTous(volumeBar.value);
	localStorage.setItem('volumeKFC', volumeBar.value);
	envoyerUsage('volume_click', `Volume is ${volumeBar.value}`);
}

/** Réglage de l'état muet de tous les audios */
function muteOrUnmuteAll() {
	const soundToggle = document.getElementById('soundToggle');
	setMuteStateAll(!soundToggle.checked);
	localStorage.setItem('soundOn', JSON.stringify(soundToggle.checked));
	envoyerUsage('mute_click', `Mute is ${soundToggle.checked ? 'off' : 'on'}`);
}

/** Initialise les préférences utilisateur 'son' stockées */
function initialiserParamStockes() {
	const volume = localStorage.getItem('volumeKFC');
	const soundOn = JSON.parse(localStorage.getItem('soundOn'));

	if (volume != null) {
		document.getElementById('volumeControl').value = volume;
		volumeControl();
	} else {
		const volumeBar = document.getElementById('volumeControl');
		changerVolumeTous(volumeBar.value);
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

	return { soundOn: soundToggle.checked, volumeKFC: volumeBar.value };
}

/** Enrobe l'action des boutons de scroll avec un son */
function scrollBoutonsAction(action) {
	action();
	document.getElementById('ref-audio-slide')?.play();
}

//#endregion Sounds

//#region Listeners

function listenToEnterKey() {
	document.body.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			event.preventDefault(); // Empêche le comportement par défaut de la touche "Entrée"
			document.getElementById('calculer').click();
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
			voiceSpeakLanguageSelect(chosenLang, soundSettings.soundOn, soundSettings.volumeKFC);
			fermerInfoSiAffiche();
			envoyerUsage('langue_click', chosenLang);
		});
	});
}

function addItemNameClick(element, objet) {
	element.addEventListener('click', (event) => {
		speechSynthesis?.cancel();
		document.getElementById('itemDataInfo-header-name').textContent = event.currentTarget.textContent;
		getItemInfoData(objet, afficherInfoItem);
		speakMessage(event.currentTarget.textContent);
		envoyerUsage('consulter_click', `Consulter ${event.currentTarget.textContent}`);
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
	setTimeout(() => removeCssClassForAll('intro-form'), 3350);
}

function getAndSetPlayerLvlParam() {
	const playerLvlParamName = 'playerLvl';
	const playerLvlParam = querystringParamValue(playerLvlParamName);
	setSavedPlayerLevel(playerLvlParamName);

	if (!playerLvlParam) return;

	const numPlayerLvl = Number(playerLvlParam);
	if (isNaN(numPlayerLvl))
		removeQueryStringParameter(playerLvlParamName);
	else if (numPlayerLvl > 0 && numPlayerLvl <= 1000)
		updatePlayerLevel(playerLvlParamName, numPlayerLvl);
	else
		updateQueryStringParameter(playerLvlParamName, globalConfig.playerLvl);
}

function init() {
	i18n();
	displayVersionNumber();
	getAndSetPlayerLvlParam();

	const typeSelect = document.getElementById('type');
	typesObjets.forEach(type => {
		const option = document.createElement('option');
		option.value = type.id;
		option.setAttribute('data-translate', type.nom);
		typeSelect.appendChild(option);
	});

	const updateCaracteristiques = () => {
		const typeId = typeSelect.value;
		const supportActuelSelect = caracteristiqueInit('supportActuel');
		const prefixeActuelSelect = caracteristiqueInit('prefixeActuel');
		const suffixeActuelSelect = caracteristiqueInit('suffixeActuel');
		const supportSouhaiteSelect = caracteristiqueInit('supportSouhaite');
		const prefixeSouhaiteSelect = caracteristiqueInit('prefixeSouhaite');
		const suffixeSouhaiteSelect = caracteristiqueInit('suffixeSouhaite');

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
		changementCaracteristique(typeSelect, true);
		translateOptions(cachedTranslations);

		if (!isVerticalScrollbarVisible())
			document.getElementById('scroll-bottom-btn').disabled = true;
	};

	typeSelect.addEventListener('change', updateCaracteristiques);
	typeSelect.dispatchEvent(new Event('change')); // Déclencher l'événement change lors du chargement de la page

	document.getElementById('calculer').addEventListener('click', calculerClick);
	listenToEnterKey();
	document.addEventListener('click', declancherSonAuChargement);
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
