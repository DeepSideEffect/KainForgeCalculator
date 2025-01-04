// Les types d'objets
const typesObjets = [
    { id: 1, nom: "Les casques", piecesEpiques: 15, nbRunes: 1, libelleRunes: "Verte Niveau 2", color: "#21b530" },
    { id: 2, nom: "Les armures", piecesEpiques: 15, nbRunes: 1, libelleRunes: "Verte Niveau 2", color: "#21b530" },
    { id: 3, nom: "Les pantalons", piecesEpiques: 15, nbRunes: 1, libelleRunes: "Verte Niveau 2", color: "#21b530" },
    { id: 4, nom: "Les amulettes", piecesEpiques: 40, nbRunes: 1, libelleRunes: "Bleue Niveau 2", color: "#2194b5" },
    { id: 5, nom: "Les anneaux", piecesEpiques: 20, nbRunes: 1, libelleRunes: "Bleue Niveau 2", color: "#2194b5" },
    { id: 6, nom: "Les armes à feu à 1 main", piecesEpiques: 50, nbRunes: 1, libelleRunes: "Jaune Niveau 4", color: "#b5b121" },
    { id: 7, nom: "Les armes à feu à 2 mains", piecesEpiques: 100, nbRunes: 2, libelleRunes: "Jaunes Niveau 4", color: "#b5b121" },
    { id: 8, nom: "Les Armes À Distance", piecesEpiques: 75, nbRunes: 2, libelleRunes: "Rouges Niveau 3", color: "#b53221" },
    { id: 9, nom: "Les armes de Corps À Corps à 1 Main", piecesEpiques: 20, nbRunes: 1, libelleRunes: "Rouge Niveau 2", color: "#b53221" },
    { id: 10, nom: "Les armes de Corps À Corps à 2 Mains", piecesEpiques: 40, nbRunes: 2, libelleRunes: "Rouges Niveau 2", color: "#b53221" }
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

//#region Les pantalons
const pantalonCaracteristiques = {
	support: [
		new Caracteristique("Short", 15),
		new Caracteristique("Pantalon", 15),
		new Caracteristique("Kilt", 60),
		new Caracteristique("Jupe", 60)
	],
	prefixe: [
		new Caracteristique("Piqué", 15),
		new Caracteristique("Renforcé", 15),
		new Caracteristique("Clouté", 15),
		new Caracteristique("Léger", 30),
		new Caracteristique("Court", 30),
		new Caracteristique("Satiné", 30),
		new Caracteristique("Épineux", 30),
		new Caracteristique("Pare-balles", 45),
		new Caracteristique("Flexible", 45),
		new Caracteristique("Blindé", 45),
		new Caracteristique("Composite", 45),
		new Caracteristique("Elfe", 60),
		new Caracteristique("Runique", 60),
		new Caracteristique("Chamaniste", 60),
		new Caracteristique("Tigre", 75),
		new Caracteristique("Sanglant", 75),
		new Caracteristique("Mortel", 75)
	],
	suffixe: [
		new Caracteristique("Du Toxicomane", 15),
		new Caracteristique("De L'Athlète", 15),
		new Caracteristique("Du Brigand", 15),
		new Caracteristique("Des Gestes Muets", 30),
		new Caracteristique("De La Réserve", 30),
		new Caracteristique("Du Contrebandier", 30),
		new Caracteristique("Du Soleil", 45),
		new Caracteristique("Du Chasseur D'Ombres", 45),
		new Caracteristique("Du Trafiquant D'Armes", 45),
		new Caracteristique("Des Incas", 60),
		new Caracteristique("Du Serpent", 60),
		new Caracteristique("Du Berger", 75),
		new Caracteristique("De L'Orienteur", 75),
		new Caracteristique("De La Nuit", 75)
	]
};
//#endregion Les pantalons

//#region Les amulettes
const amuletteCaracteristiques = {
	support: [
		new Caracteristique("Amulette", 0),
		new Caracteristique("Collier", 120),
		new Caracteristique("Cravate", 120),
		new Caracteristique("Foulard", 120),
		new Caracteristique("Chaîne", 120)
	],
	prefixe: [
		new Caracteristique("En Bronze", 40),
		new Caracteristique("En Argent", 40),
		new Caracteristique("Émeraude", 40),
		new Caracteristique("En Or", 80),
		new Caracteristique("En Platine", 80),
		new Caracteristique("Rubis", 80),
		new Caracteristique("Distingué", 120),
		new Caracteristique("Astucieux", 120),
		new Caracteristique("Ours", 120),
		new Caracteristique("Dur", 120),
		new Caracteristique("Astral", 120),
		new Caracteristique("Élastique", 120),
		new Caracteristique("Cardinal", 120),
		new Caracteristique("Nécromancien", 120),
		new Caracteristique("En Plastique", 160),
		new Caracteristique("En Titane", 160),
		new Caracteristique("Diamant", 160),
		new Caracteristique("Vindicatif", 160),
		new Caracteristique("Faussé", 160),
		new Caracteristique("Insidieux", 160),
		new Caracteristique("Archaïque", 160),
		new Caracteristique("Hypnotique", 160),
		new Caracteristique("Dansant", 160),
		new Caracteristique("Fauve", 160),
		new Caracteristique("Faucon", 200),
		new Caracteristique("Araignée", 200),
		new Caracteristique("Solaire", 200),
		new Caracteristique("Noir", 200)
	],
	suffixe: [
		new Caracteristique("De La Beauté", 40),
		new Caracteristique("Du Pouvoir", 40),
		new Caracteristique("Du Délit", 40),
		new Caracteristique("De La Jouvence", 80),
		new Caracteristique("De La Force", 80),
		new Caracteristique("Du Génie", 80),
		new Caracteristique("De La Sagesse", 80),
		new Caracteristique("De La Peau Dure", 80),
		new Caracteristique("Du Pèlerin", 120),
		new Caracteristique("De La Justesse", 120),
		new Caracteristique("De L'Astuce", 120),
		new Caracteristique("De L'Art", 120),
		new Caracteristique("Du Loup-garou", 120),
		new Caracteristique("Du Dément", 160),
		new Caracteristique("De La Concentration", 160),
		new Caracteristique("De La Lévitation", 160),
		new Caracteristique("Du Sang", 160),
		new Caracteristique("De L'Habilité", 160),
		new Caracteristique("De La Facilité", 160),
		new Caracteristique("De La Chance", 200)
	]
};
//#endregion Les amulettes

//#region Les anneaux
const anneauCaracteristiques = {
	support: [
		new Caracteristique("Anneau", 20),
		new Caracteristique("Bracelet", 80),
		new Caracteristique("Chevalière", 80)
	],
	prefixe: [
		new Caracteristique("En Bronze", 20),
		new Caracteristique("Émeraude", 20),
		new Caracteristique("En Argent", 20),
		new Caracteristique("Rubis", 40),
		new Caracteristique("En Or", 40),
		new Caracteristique("En Platine", 40),
		new Caracteristique("Distingué", 60),
		new Caracteristique("Astucieux", 60),
		new Caracteristique("Ours", 60),
		new Caracteristique("Dur", 60),
		new Caracteristique("Astral", 60),
		new Caracteristique("Élastique", 60),
		new Caracteristique("Cardinal", 60),
		new Caracteristique("Nécromancien", 60),
		new Caracteristique("En Plastique", 80),
		new Caracteristique("En Titane", 80),
		new Caracteristique("Diamant", 80),
		new Caracteristique("Vindicatif", 80),
		new Caracteristique("Faussé", 80),
		new Caracteristique("Insidieux", 80),
		new Caracteristique("Archaïque", 80),
		new Caracteristique("Hypnotique", 80),
		new Caracteristique("Dansant", 80),
		new Caracteristique("Fauve", 80),
		new Caracteristique("Araignée", 100),
		new Caracteristique("Solaire", 100),
		new Caracteristique("Faucon", 100),
		new Caracteristique("Noir", 100)
	],
	suffixe: [
		new Caracteristique("De La Beauté", 20),
		new Caracteristique("Du Pouvoir", 20),
		new Caracteristique("Du Délit", 20),
		new Caracteristique("De La Force", 40),
		new Caracteristique("Du Génie", 40),
		new Caracteristique("De La Sagesse", 40),
		new Caracteristique("Du Renard", 40),
		new Caracteristique("De La Peau Dure", 40),
		new Caracteristique("De L'Art", 60),
		new Caracteristique("De La Jouvence", 60),
		new Caracteristique("De La Justesse", 60),
		new Caracteristique("De L'Astuce", 60),
		new Caracteristique("Du Loup-garou", 60),
		new Caracteristique("De La Concentration", 80),
		new Caracteristique("De La Lévitation", 80),
		new Caracteristique("De La Chauve-Souris", 80),
		new Caracteristique("Du Sang", 80),
		new Caracteristique("Du Dément", 80),
		new Caracteristique("De La Facilité", 80),
		new Caracteristique("De La Chance", 100)
	]
};
//#endregion Les anneaux

//#region Les armes à feu à 1 main
const armeFeuUneMainCaracteristiques = {
	support: [
		new Caracteristique("Glock", 50),
		new Caracteristique("Magnum", 50),
		new Caracteristique("Desert Eagle", 100),
		new Caracteristique("Beretta", 100),
		new Caracteristique("Uzi", 150),
		new Caracteristique("Mp5k", 150),
		new Caracteristique("Scorpion", 200),
	],
	prefixe: [],
	suffixe: []
};
//#endregion Les armes à feu à 1 main

//#region Les armes à feu à 2 mains
const armeFeuDeuxMainsCaracteristiques = {
	support: [
		new Caracteristique("Carabine de Chasse", 100),
		new Caracteristique("Fusil", 200),
		new Caracteristique("AK-47", 300),
		new Caracteristique("Lance-flammes", 300),
		new Caracteristique("Fn-Fal", 400),
		new Caracteristique("Semi-automatique de Sniper", 400),
		new Caracteristique("Fusil de Sniper", 400),
	],
	prefixe: [],
	suffixe: []
};
//#endregion Les armes à feu à 2 mains

//#region Les Armes À Distance
const armeDistanceCaracteristiques = {
	support: [
		new Caracteristique("Arc Court", 75),
		new Caracteristique("Arc", 75),
		new Caracteristique("Arc Long", 150),
		new Caracteristique("Javelot", 150),
		new Caracteristique("Pilum", 225),
		new Caracteristique("Couteau de lancer", 225),
		new Caracteristique("Francisque", 225),
		new Caracteristique("Arbalète", 300),
		new Caracteristique("Shuriken", 300),
		new Caracteristique("Lourde Arbalète", 375),
		new Caracteristique("Arc Reflex", 375)
	],
	prefixe: [],
	suffixe: [
		new Caracteristique("De Longue Portée", 75),
		new Caracteristique("De La Précision", 150),
		new Caracteristique("Des Dryades", 225),
		new Caracteristique("De La Vengeance", 225),
		new Caracteristique("De Mitraillage", 300),
		new Caracteristique("Du Loups", 300),
		new Caracteristique("De La Perfection", 300),
		new Caracteristique("De La Réaction", 375),
	]
};
//#endregion Les Armes À Distance

//#region Les armes de Corps À Corps à 1 Main
const armeCaCUneMainCaracteristiques = {
	support: [
		new Caracteristique("Matraque", 20),
		new Caracteristique("Couteau", 20),
		new Caracteristique("Poignard", 40),
		new Caracteristique("Rapière", 40),
		new Caracteristique("Épée", 60),
		new Caracteristique("Hache", 60),
		new Caracteristique("Poing Américain", 80),
		new Caracteristique("Kama", 80),
		new Caracteristique("Poing des Cieux", 100),
		new Caracteristique("Wakizashi", 100)
	],
	prefixe: [
		new Caracteristique("Sévère", 20),
		new Caracteristique("Piquant", 20),
		new Caracteristique("Cruel", 20),
		new Caracteristique("Cristallin", 20),
		new Caracteristique("Amical", 40),
		new Caracteristique("Venimeux", 40),
		new Caracteristique("Léger", 40),
		new Caracteristique("Denté", 40),
		new Caracteristique("Tonifiant", 60),
		new Caracteristique("Protecteur", 60),
		new Caracteristique("Mystique", 60),
		new Caracteristique("Lumineux", 60),
		new Caracteristique("Osseux", 60),
		new Caracteristique("Empoisonné", 80),
		new Caracteristique("Antique", 80),
		new Caracteristique("Meurtrier", 80),
		new Caracteristique("Agile", 80),
		new Caracteristique("Damné", 100),
		new Caracteristique("Rapide", 100),
		new Caracteristique("Démoniaque", 100)
	],
	suffixe: [
		new Caracteristique("De La Secte", 20),
		new Caracteristique("Du Conquérant", 20),
		new Caracteristique("De La Puissance", 20),
		new Caracteristique("Du Commandant", 20),
		new Caracteristique("De L'Agilité", 40),
		new Caracteristique("De La Justesse", 40),
		new Caracteristique("De La Contusion", 40),
		new Caracteristique("Du Pouvoir", 40),
		new Caracteristique("De La Douleur", 40),
		new Caracteristique("Du Courage", 60),
		new Caracteristique("De La Précision", 60),
		new Caracteristique("Du Sang", 60),
		new Caracteristique("De la Peste", 60),
		new Caracteristique("De Dracula", 80),
		new Caracteristique("De La Vengeance", 80),
		new Caracteristique("De La Vertu", 80),
		new Caracteristique("Du Clan", 80),
		new Caracteristique("Du Fer À Cheval", 80),
		new Caracteristique("De La Vélocité", 100),
		new Caracteristique("Du Suicidé", 100),
		new Caracteristique("De L'Empereur", 100)
	]
};
//#endregion Les armes de Corps À Corps à 1 Main

//#region Les armes de Corps À Corps à 2 Mains
const armeCaCDeuxMainsCaracteristiques = {
	support: [
		new Caracteristique("Massue", 40),
		new Caracteristique("Pince-monseigneur", 40),
		new Caracteristique("Pique", 80),
		new Caracteristique("Hache Lourde", 80),
		new Caracteristique("Espadon", 120),
		new Caracteristique("Faux", 120),
		new Caracteristique("Morgenstern", 160),
		new Caracteristique("Hallebarde", 160),
		new Caracteristique("Katana", 200),
		new Caracteristique("Tronçonneuse", 200)
	],
	prefixe: [
		new Caracteristique("Sévère", 40),
		new Caracteristique("Piquant", 40),
		new Caracteristique("Dispendieux", 40),
		new Caracteristique("Tonifiant", 40),
		new Caracteristique("Léger", 80),
		new Caracteristique("Cruel", 80),
		new Caracteristique("Venimeux", 80),
		new Caracteristique("Lumineux", 80),
		new Caracteristique("Cristallin", 80),
		new Caracteristique("Lourd", 120),
		new Caracteristique("Large", 120),
		new Caracteristique("Protecteur", 120),
		new Caracteristique("Mystique", 120),
		new Caracteristique("Irradiée", 120),
		new Caracteristique("Antique", 160),
		new Caracteristique("Denté", 160),
		new Caracteristique("Empoisonné", 160),
		new Caracteristique("Meurtrier", 160),
		new Caracteristique("Damné", 200),
		new Caracteristique("Agile", 200),
		new Caracteristique("Démoniaque", 200)
	],
	suffixe: [
		new Caracteristique("De La Ruse", 40),
		new Caracteristique("Du Hasardeux", 40),
		new Caracteristique("De Plomb", 40),
		new Caracteristique("De La Puissance", 80),
		new Caracteristique("De La Trahison", 80),
		new Caracteristique("Du Pouvoir", 80),
		new Caracteristique("Du Conquérant", 80),
		new Caracteristique("De La Douleur", 120),
		new Caracteristique("Du Buveur De Sang", 120),
		new Caracteristique("De L'Inquisiteur", 120),
		new Caracteristique("Du Sang", 120),
		new Caracteristique("De Dracula", 160),
		new Caracteristique("De la Peste", 160),
		new Caracteristique("De La Vengeance", 160),
		new Caracteristique("Du Fer À Cheval", 160),
		new Caracteristique("Du Basilic", 200),
		new Caracteristique("De L'Autocrate", 200),
		new Caracteristique("Du Suicidé", 200)
	]
};
//#endregion Les armes de Corps À Corps à 2 Mains

// Forge de Kain
const caracteristiques = {
    1: casqueCaracteristiques,
	2: armureCaracteristiques,
	3: pantalonCaracteristiques,
	4: amuletteCaracteristiques,
	5: anneauCaracteristiques,
	6: armeFeuUneMainCaracteristiques,
	7: armeFeuDeuxMainsCaracteristiques,
	8: armeDistanceCaracteristiques,
	9: armeCaCUneMainCaracteristiques,
    10: armeCaCDeuxMainsCaracteristiques
};
