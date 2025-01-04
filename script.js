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

//#endregion Logique

//#region Evenements et DOM

function changementCaracteristique() {
	document.getElementById("calculer").disabled = false;
	document.getElementById("resultat").style.visibility = "collapse";
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
	select.addEventListener("change", changementCaracteristique);
	return select;
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

		document.getElementById("resultat").style.visibility = "collapse";
		document.getElementById("calculer").disabled = true;
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

		document.getElementById("resultatV1-text").style.color = typeObjetCourant.color;
        document.getElementById("resultatV1-text").textContent = `${coutTotal.coutTotalPE} points d'évolution, ${coutEnPiecesEpiques} pièces épiques et ${nbRunes} rune${nbRunes > 1 ? 's' : ''} ${libelleRunes}.`;
		document.getElementById("coutTotalPE").textContent = coutTotal.coutTotalPE;
		document.getElementById("coutEnPiecesEpiques").textContent = coutEnPiecesEpiques;
		document.getElementById("nbRunes").textContent = nbRunes;
		document.getElementById("libelleRunes").textContent = "rune".concat(nbRunes > 1 ? 's' : '').concat(' ').concat(libelleRunes);
		document.getElementById("libelleRunes").style.color = typeObjetCourant.color;
		document.getElementById("resultat").style.visibility = "visible";
    });

	document.body.addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			event.preventDefault(); // Empêche le comportement par défaut de la touche "Entrée"
			document.getElementById("calculer").click(); // Déclenche le clic du bouton
		}
	});
});

//#endregion Evenements et DOM
