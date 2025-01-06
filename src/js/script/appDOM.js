function listenToEnterKey() {
	document.body.addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			event.preventDefault(); // Empêche le comportement par défaut de la touche "Entrée"
			document.getElementById("calculer").click();
		}
	});
}

function couleurThemeEnFonctionDesRunes() {
    const type = document.getElementById("type").value;
    const typeObjetCourant = typesObjets[type - 1];
    changeCurrentColor(typeObjetCourant.color);
}

function changementCaracteristique(desactiverBtn) {
	document.getElementById("calculer").disabled = desactiverBtn;
    document.getElementById("recapModification").classList.add("init");
	document.getElementById("resultat").style.transform = "scaleY(0)";
    document.getElementById("ref-audio-applause").pause();
    document.getElementById("ref-audio-kick").play();
    couleurThemeEnFonctionDesRunes();
}

function createOption(index, nom, actuelSelect, souhaiteSelect) {
	const option = document.createElement("option");
	option.value = index;
	option.textContent = nom;
	actuelSelect.appendChild(option);
	souhaiteSelect.appendChild(option.cloneNode(true));
}

function caracteristiqueInit(selectHtmlId) {
	const select = document.getElementById(selectHtmlId);
	select.innerHTML = "";
	select.addEventListener("change", () => changementCaracteristique(false));
	return select;
}

function copyToClipboard(htmlId) {
    const textToCopy = gererLesCRLF(document.getElementById(htmlId).innerText);
    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification("Texte copié dans le presse-papiers !");
    }).catch(err => { 
        console.error("Erreur lors de la copie : ", err);
        const errMsg = "Erreur lors de la copie : ".concat(err?.message);
        showNotification(errMsg);
    });
}

function showNotification(message) {
    document.getElementById("ref-audio-copy2").play();
    document.getElementById("notification-container").classList.add("show");
    document.getElementById("notification").textContent = message;
    document.getElementById("notification").classList.add("show");

    setTimeout(() => {
        document.getElementById("notification").classList.remove("show");
        setTimeout(() => document.getElementById("notification-container").classList.remove("show"), 800);
    }, 2000);
}

function intro() {
	var elements = document.getElementsByClassName("intro");
	[...elements].forEach(element => {
		element.classList.remove("intro");
	});
}

function declancherSonAuChargement() {
    const audio = document.getElementById("ref-audio-applause");
    audio.play().catch(error => {
        console.error("Erreur lors de la lecture de l'audio : ", error);
    });

    document.removeEventListener("click", declancherSonAuChargement);
}

function composantNomObjet(objet) {
    const span = document.createElement("span");
	span.classList.add("nom-objet-bw");
	span.textContent = nomCompletObjet(objet);
    return span;
}

function changeCurrentColor(newColor) {
    document.documentElement.style.setProperty('--current-color', newColor);
}

/** Résultat affiché sur une seule (ou deux) ligne(s) */
function inLineResultDisplay(typeObjetCourant, coutTotal, coutEnPiecesEpiques, nbRunes, libelleRunes, objetActuel, objetSouhaite) {
	document.getElementById("resultatV1-text").style.color = typeObjetCourant.color;
	document.getElementById("resultatV1-text").textContent = `${coutTotal.coutTotalPE} points d'évolution, ${coutEnPiecesEpiques} pièces épiques et ${nbRunes} rune${nbRunes > 1 ? 's' : ''} ${libelleRunes}.`;
	document.getElementById("resultatV1-modif").innerHTML = "";
	document.getElementById("resultatV1-modif").appendChild(composantNomObjet(objetActuel));
	const text = document.createElement("text");
	text.textContent = " vers ";
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
	document.getElementById("libelleRunes").textContent = "rune".concat(nbRunes > 1 ? 's' : '').concat(' ').concat(libelleRunes);
	document.getElementById("libelleRunes").style.color = typeObjetCourant.color;
	document.getElementById("resultat").style.transform = "scaleY(1)";
}

/** Méthode déclanchée au click sur le bouton Calculer */
function calculerClick() {
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
	const libelleRunes = typeObjetCourant.libelleRunes;

	inLineResultDisplay(typeObjetCourant, coutTotal, coutEnPiecesEpiques, nbRunes, libelleRunes, objetActuel, objetSouhaite);
	formattedResultDisplay(typeObjetCourant, coutTotal, coutEnPiecesEpiques, nbRunes, libelleRunes, objetActuel, objetSouhaite);

	setTimeout(() => document.getElementById("recapModification").classList.remove("init"), 75);

	document.getElementById("ref-audio-copy").play();
}

/** Réglage du volume de tous les audios */
function volumeControl() {
	var volumeBar = document.getElementById('volumeControl');
	changerVolumeTous(volumeBar.value);
	localStorage.setItem('volumeKFC', volumeBar.value);
}

/** Réglage de l'état muet de tous les audios */
function muteOrUnmuteAll() {
	var soundToggle = document.getElementById('soundToggle');
	setMuteStateAll(!soundToggle.checked);
	localStorage.setItem('soundOn', JSON.stringify(soundToggle.checked));
}

/** Initialise les préférences utilisateur 'son' stockées */
function initialiserParamStockes() {
	var volume = localStorage.getItem('volumeKFC');
	var soundOn = JSON.parse(localStorage.getItem('soundOn'));

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

function init() {
	const typeSelect = document.getElementById("type");
	typesObjets.forEach(type => {
		const option = document.createElement("option");
		option.value = type.id;
		option.textContent = type.nom;
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

		changementCaracteristique(true)
	};

	typeSelect.addEventListener("change", updateCaracteristiques);
	typeSelect.dispatchEvent(new Event("change")); // Déclencher l'événement change lors du chargement de la page

	document.getElementById("calculer").addEventListener("click", calculerClick);
	listenToEnterKey();
	document.addEventListener("click", declancherSonAuChargement);
	document.getElementById('volumeControl').addEventListener('input', volumeControl);
	document.getElementById('soundToggle').addEventListener('change', muteOrUnmuteAll);
	initialiserParamStockes();

	setTimeout(() => intro(), 75);
}

function startup() {
	if (document.readyState === 'loading')
		document.addEventListener('DOMContentLoaded', init);
	else
		init();
}