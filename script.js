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
        return 0;
    }

    let cout = 0;
    let indexActuel = caracteristiques.findIndex(c => c.nom === actuel.nom);
    let indexSouhaite = caracteristiques.findIndex(c => c.nom === souhaite.nom);

    for (let i = indexActuel + 1; i <= indexSouhaite; i++) {
        cout += caracteristiques[i].pe;
    }

    return cout;
}

function calculerCoutTotal(objetActuel, objetSouhaite, caracteristiquesSupport, caracteristiquesPrefixe, caracteristiquesSuffixe) {
    let coutTotal = 0;

    coutTotal += calculerCoutCaracteristique(objetActuel.support, objetSouhaite.support, caracteristiquesSupport);
    coutTotal += calculerCoutCaracteristique(objetActuel.prefixe, objetSouhaite.prefixe, caracteristiquesPrefixe);
    coutTotal += calculerCoutCaracteristique(objetActuel.suffixe, objetSouhaite.suffixe, caracteristiquesSuffixe);

    return coutTotal;
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
        document.getElementById("resultat").textContent = `Le coût total en points d'évolution (PE) pour modifier l'objet est de : ${coutTotal}`;
    });
});

//#endregion Evenements et DOM
