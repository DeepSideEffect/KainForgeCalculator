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

document.addEventListener("DOMContentLoaded", () => {
    const typeSelect = document.getElementById("type");
    typesObjets.forEach(type => {
        const option = document.createElement("option");
        option.value = type.id;
        option.textContent = type.nom;
        typeSelect.appendChild(option);
    });

    document.getElementById("calculer").addEventListener("click", () => {
        const type = document.getElementById("type").value;
        const supportActuel = document.getElementById("supportActuel").value;
        const prefixeActuel = document.getElementById("prefixeActuel").value;
        const suffixeActuel = document.getElementById("suffixeActuel").value;
        const supportSouhaite = document.getElementById("supportSouhaite").value;
        const prefixeSouhaite = document.getElementById("prefixeSouhaite").value;
        const suffixeSouhaite = document.getElementById("suffixeSouhaite").value;

        const objetActuel = new Objet(type, caracteristiquesSupport[supportActuel], caracteristiquesPrefixe[prefixeActuel], caracteristiquesSuffixe[suffixeActuel]);
        const objetSouhaite = new Objet(type, caracteristiquesSupport[supportSouhaite], caracteristiquesPrefixe[prefixeSouhaite], caracteristiquesSuffixe[suffixeSouhaite]);

        const coutTotal = calculerCoutTotal(objetActuel, objetSouhaite, caracteristiquesSupport, caracteristiquesPrefixe, caracteristiquesSuffixe);
        document.getElementById("resultat").textContent = `Le coût total en points d'évolution (PE) pour modifier l'objet est de : ${coutTotal}`;
    });
});
