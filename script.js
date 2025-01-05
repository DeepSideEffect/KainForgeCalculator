//#region Model

class Caracteristique {
    constructor(nom, pe) {
        this.nom = nom;
        this.pe = pe;
    }
}

class Objet {
    constructor(type, support, prefixe, suffixe) {
        this.type = type;
        this.support = support;
        this.prefixe = prefixe;
        this.suffixe = suffixe;
    }
}

//#endregion Model

//#region Logique

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

function nomCompletObjet(objet) {
    return `Epique ${objet?.support?.nom ?? ''} ${objet?.prefixe?.nom ?? ''} ${objet?.suffixe?.nom ?? ''}`;
}

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

//#endregion Logique

//#region Evenements et DOM

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
    document.getElementById("notification-container").classList.remove("intro");
    document.getElementById("layout").classList.remove("intro");
    document.getElementById("data-sources").classList.remove("intro");
    document.getElementById("version").classList.remove("intro");
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

document.addEventListener("DOMContentLoaded", () => {
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

    // Déclencher l'événement change lors du chargement de la page
    typeSelect.dispatchEvent(new Event("change"));

    document.getElementById("calculer").addEventListener("click", () => {
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

        // Une seule ligne
		document.getElementById("resultatV1-text").style.color = typeObjetCourant.color;
        document.getElementById("resultatV1-text").textContent = `${coutTotal.coutTotalPE} points d'évolution, ${coutEnPiecesEpiques} pièces épiques et ${nbRunes} rune${nbRunes > 1 ? 's' : ''} ${libelleRunes}.`;
        document.getElementById("resultatV1-modif").innerHTML = "";
        document.getElementById("resultatV1-modif").appendChild(composantNomObjet(objetActuel));
        const text = document.createElement("text");
        text.textContent = " vers ";
        document.getElementById("resultatV1-modif").appendChild(text);
        document.getElementById("resultatV1-modif").appendChild(composantNomObjet(objetSouhaite));
        // Formaté
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

        setTimeout(() => document.getElementById("recapModification").classList.remove("init"), 75);

        document.getElementById("ref-audio-copy").play();
    });

	document.body.addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			event.preventDefault(); // Empêche le comportement par défaut de la touche "Entrée"
			document.getElementById("calculer").click();
		}
	});

    document.addEventListener("click", declancherSonAuChargement);
    setTimeout(() => intro(), 75);
});

//#endregion Evenements et DOM
