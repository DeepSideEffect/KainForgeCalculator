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

//#region Les casques
const casqueCaracteristiques = {
	support: [
		new Caracteristique("Casquette", 15),
		new Caracteristique("Casque", 15),
		new Caracteristique("Cagoule", 30),
		new Caracteristique("Chapeau", 30),
		new Caracteristique("Casque Militaire", 45),
		new Caracteristique("Diadème", 45),
		new Caracteristique("Fronteau", 60),
		new Caracteristique("Bandana", 60),
		new Caracteristique("Masque", 60),
		new Caracteristique("Couronne", 75)
	],
	prefixe: [
		new Caracteristique("Chic", 15),
		new Caracteristique("Endurci", 15),
		new Caracteristique("Élégant", 15),
		new Caracteristique("Serviable", 30),
		new Caracteristique("Splendide", 30),
		new Caracteristique("Renforcé", 30),
		new Caracteristique("Magnétique", 30),
		new Caracteristique("Cornu", 45),
		new Caracteristique("Guerrier", 45),
		new Caracteristique("Malicieux", 45),
		new Caracteristique("Paresseux", 45),
		new Caracteristique("Pare-balles", 45),
		new Caracteristique("D'Assaut", 45),
		new Caracteristique("Chamaniste", 60),
		new Caracteristique("Runique", 60),
		new Caracteristique("Sanglant", 75),
		new Caracteristique("Tigre", 75),
		new Caracteristique("Mortel", 75),
		new Caracteristique("Rituel", 75)
	],
	suffixe: [
		new Caracteristique("De La Miss", 15),
		new Caracteristique("Du Mister", 15),
		new Caracteristique("De L'Explorateur", 15),
		new Caracteristique("De La Précaution", 15),
		new Caracteristique("D'Endurance", 15),
		new Caracteristique("De La Protection", 15),
		new Caracteristique("Des Sens", 30),
		new Caracteristique("Du Toxicomane", 30),
		new Caracteristique("Du Gladiateur", 30),
		new Caracteristique("Du Prophète", 45),
		new Caracteristique("D'Écaille de dragon", 45),
		new Caracteristique("De La Puissance", 45),
		new Caracteristique("De La Punition", 45),
		new Caracteristique("Du Berger", 60),
		new Caracteristique("Du Sang", 60),
		new Caracteristique("De La Magie", 60),
		new Caracteristique("De l'Adrénaline", 75),
		new Caracteristique("De La Précognition", 75)
	]
};
//#endregion Les casques

//#region Les armures
const armureCaracteristiques = {
	support: [
		new Caracteristique("T-shirt", 15),
		new Caracteristique("Veste", 15),
		new Caracteristique("Veston", 30),
		new Caracteristique("Gilet", 30),
		new Caracteristique("Corset", 45),
		new Caracteristique("Smoking", 45),
		new Caracteristique("Haubert", 45),
		new Caracteristique("Cape", 60),
		new Caracteristique("Armure En Plate", 60),
		new Caracteristique("Pleine Armure", 75)
	],
	prefixe: [
		new Caracteristique("Renforcé", 15),
		new Caracteristique("Dominateur", 15),
		new Caracteristique("Clouté", 15),
		new Caracteristique("Léger", 30),
		new Caracteristique("Pare-balles", 30),
		new Caracteristique("Écailleux", 30),
		new Caracteristique("Flexible", 45),
		new Caracteristique("En Plate", 45),
		new Caracteristique("Chamaniste", 45),
		new Caracteristique("Chasseur", 60),
		new Caracteristique("Elfe", 60),
		new Caracteristique("Guerrier", 60),
		new Caracteristique("Tigre", 75),
		new Caracteristique("Mortel", 75),
		new Caracteristique("Sanglant", 75),
		new Caracteristique("Runique", 75)
	],
	suffixe: [
		new Caracteristique("Du Toxicomane", 15),
		new Caracteristique("Du Voleur", 15),
		new Caracteristique("Du Garde", 15),
		new Caracteristique("De L'Athlète", 15),
		new Caracteristique("Du Gardien", 30),
		new Caracteristique("De L'Adepte", 30),
		new Caracteristique("De L'Adrénaline", 30),
		new Caracteristique("De Carapace De Tortue", 30),
		new Caracteristique("Du Tueur", 45),
		new Caracteristique("Du Cobra", 45),
		new Caracteristique("D'Esquive", 45),
		new Caracteristique("Du Centurion", 45),
		new Caracteristique("Du Maître D'Épée", 45),
		new Caracteristique("De Caligula", 60),
		new Caracteristique("De La Résistance", 60),
		new Caracteristique("Du Pillard", 60),
		new Caracteristique("Du Maître", 60),
		new Caracteristique("De L'Orchidée", 75),
		new Caracteristique("Du Semeur De La Mort", 75),
		new Caracteristique("De La Vitesse", 75)
	]
};
//#endregion Les armures

// Les pantalons
// Les pantalons

// Les amulettes
// Les amulettes

// Les anneaux
// Les anneaux

// Les armes à feu à 1 main
// Les armes à feu à 1 main

// Les armes à feu à 2 mains
// Les armes à feu à 2 mains

// Les Armes À Distance
// Les Armes À Distance

// Les armes de Corps À Corps à 1 Main
// Les armes de Corps À Corps à 1 Main

// Les armes de Corps À Corps à 2 Mains
// Les armes de Corps À Corps à 2 Mains

// Forge de Kain
const caracteristiques = {
    1: casqueCaracteristiques,
	2: armureCaracteristiques,
    // TODO: Ajoute les caractéristiques pour les autres types d'objets ici
};
