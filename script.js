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
    if (actuel.nom === souhaite.nom) {
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
    let conbMvtsTotal = 0;

	const resultatSupport = calculerCoutCaracteristique(objetActuel.support, objetSouhaite.support, caracteristiquesSupport);
	const resultatPrefixe = calculerCoutCaracteristique(objetActuel.prefixe, objetSouhaite.prefixe, caracteristiquesPrefixe);
	const resultatSuffixe = calculerCoutCaracteristique(objetActuel.suffixe, objetSouhaite.suffixe, caracteristiquesSuffixe);

    coutTotalPE += resultatSupport.coutPE;
    coutTotalPE += resultatPrefixe.coutPE;
    coutTotalPE += resultatSuffixe.coutPE;

	conbMvtsTotal += resultatSupport.nbMvts;
	conbMvtsTotal += resultatPrefixe.nbMvts;
	conbMvtsTotal += resultatSuffixe.nbMvts;

    return { coutTotalPE, conbMvtsTotal };
}

//#endregion Logique

//#region Evenements et DOM

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
        const supportActuelSelect = document.getElementById("supportActuel");
        const prefixeActuelSelect = document.getElementById("prefixeActuel");
        const suffixeActuelSelect = document.getElementById("suffixeActuel");
        const supportSouhaiteSelect = document.getElementById("supportSouhaite");
        const prefixeSouhaiteSelect = document.getElementById("prefixeSouhaite");
        const suffixeSouhaiteSelect = document.getElementById("suffixeSouhaite");

        supportActuelSelect.innerHTML = "";
        prefixeActuelSelect.innerHTML = "";
        suffixeActuelSelect.innerHTML = "";
        supportSouhaiteSelect.innerHTML = "";
        prefixeSouhaiteSelect.innerHTML = "";
        suffixeSouhaiteSelect.innerHTML = "";

        caracteristiques[typeId].support.forEach((caracteristique, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = caracteristique.nom;
            supportActuelSelect.appendChild(option);
            supportSouhaiteSelect.appendChild(option.cloneNode(true));
        });

        caracteristiques[typeId].prefixe.forEach((caracteristique, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = caracteristique.nom;
            prefixeActuelSelect.appendChild(option);
            prefixeSouhaiteSelect.appendChild(option.cloneNode(true));
        });

        caracteristiques[typeId].suffixe.forEach((caracteristique, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = caracteristique.nom;
            suffixeActuelSelect.appendChild(option);
            suffixeSouhaiteSelect.appendChild(option.cloneNode(true));
        });
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
        document.getElementById("resultat").textContent = `Pour modifier l'objet, le coût total en points d'évolution est de ${coutTotal.coutTotalPE} (PE) et ${coutTotal.conbMvtsTotal} runes.`;
    });
});

//#endregion Evenements et DOM
