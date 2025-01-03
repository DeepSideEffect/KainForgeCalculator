// Les types d'objets
const typesObjets = [
    { id: 1, nom: "Les casques" },
    { id: 2, nom: "Les armures" },
    { id: 3, nom: "Les pantalons" },
    { id: 4, nom: "Les amulettes" },
    { id: 5, nom: "Les anneaux" },
    { id: 6, nom: "Les armes à feu à 1 main" },
    { id: 7, nom: "Les armes à feu à 2 mains" },
    { id: 8, nom: "Les Armes À Distance" },
    { id: 9, nom: "Les armes de Corps À Corps à 1 Main" },
    { id: 10, nom: "Les armes de Corps À Corps à 2 Mains" }
];

// Les casques
const casqueCaracteristiques = {
	support: [
		new Caracteristique("Support1", 10),
		new Caracteristique("Support2", 15),
		new Caracteristique("Support3", 20)
	],
	prefixe: [
		new Caracteristique("Prefixe1", 5),
		new Caracteristique("Prefixe2", 8),
		new Caracteristique("Prefixe3", 12)
	],
	suffixe: [
		new Caracteristique("Suffixe1", 7),
		new Caracteristique("Suffixe2", 12),
		new Caracteristique("Suffixe3", 18)
	]
};

// Les armures

// Les pantalons

// Les amulettes

// Les anneaux

// Les armes à feu à 1 main

// Les armes à feu à 2 mains

// Les Armes À Distance

// Les armes de Corps À Corps à 1 Main

// Les armes de Corps À Corps à 2 Mains

// Forge de Kain
const caracteristiques = {
    1: casqueCaracteristiques,
    // TODO: Ajoute les caractéristiques pour les autres types d'objets ici
};
