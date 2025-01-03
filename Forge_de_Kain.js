// Classe pour les caractéristiques
class Caracteristique {
    constructor(nom, pe) {
        this.nom = nom;
        this.pe = pe;
    }
}

// Classe pour les objets
class Objet {
    constructor(type, support, prefixe, suffixe) {
        this.type = type;
        this.support = support;
        this.prefixe = prefixe;
        this.suffixe = suffixe;
    }
}

// Fonction récursive pour calculer le coût total en PE pour une caractéristique
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

// Fonction pour calculer le coût total en PE pour passer d'un objet à un autre
function calculerCoutTotal(objetActuel, objetSouhaite, caracteristiquesSupport, caracteristiquesPrefixe, caracteristiquesSuffixe) {
    let coutTotal = 0;

    coutTotal += calculerCoutCaracteristique(objetActuel.support, objetSouhaite.support, caracteristiquesSupport);
    coutTotal += calculerCoutCaracteristique(objetActuel.prefixe, objetSouhaite.prefixe, caracteristiquesPrefixe);
    coutTotal += calculerCoutCaracteristique(objetActuel.suffixe, objetSouhaite.suffixe, caracteristiquesSuffixe);

    return coutTotal;
}

// Exemple de création de caractéristiques
const caracteristiquesSupport = [
    new Caracteristique("Support1", 10),
    new Caracteristique("Support2", 15),
    new Caracteristique("Support3", 20)
];

const caracteristiquesPrefixe = [
    new Caracteristique("Prefixe1", 5),
    new Caracteristique("Prefixe2", 8),
    new Caracteristique("Prefixe3", 12)
];

const caracteristiquesSuffixe = [
    new Caracteristique("Suffixe1", 7),
    new Caracteristique("Suffixe2", 12),
    new Caracteristique("Suffixe3", 18)
];

// Exemple de création d'objets
const objetActuel = new Objet("Casque", caracteristiquesSupport[0], caracteristiquesPrefixe[0], caracteristiquesSuffixe[0]);
const objetSouhaite = new Objet("Casque", caracteristiquesSupport[2], caracteristiquesPrefixe[2], caracteristiquesSuffixe[2]);

// Calcul du coût total en PE pour passer de l'objet actuel à l'objet souhaité
const coutTotal = calculerCoutTotal(objetActuel, objetSouhaite, caracteristiquesSupport, caracteristiquesPrefixe, caracteristiquesSuffixe);
console.log(`Le coût total en points d'évolution (PE) pour modifier l'objet est de : ${coutTotal}`);
