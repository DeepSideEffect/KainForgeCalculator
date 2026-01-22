//#region Les casques
const casqueCaracteristiques = {
	support: [
		new Caracteristique("Casquette", 15, 30),
		new Caracteristique("Casque", 15, 1),
		new Caracteristique("Cagoule", 30, 31),
		new Caracteristique("Chapeau", 30, 32),
		new Caracteristique("Casque Militaire", 45, 2),
		new Caracteristique("Diadème", 45, 4),
		new Caracteristique("Fronteau", 60, 34),
		new Caracteristique("Bandana", 60, 35),
		new Caracteristique("Masque", 60, 3),
		new Caracteristique("Couronne", 75, 33)
	],
	prefixe: [
		new Caracteristique("Chic", 15, 12),
		new Caracteristique("Endurci", 15, 9),
		new Caracteristique("Élégant", 15, 13),
		new Caracteristique("Serviable", 30, 10),
		new Caracteristique("Splendide", 30, 14),
		new Caracteristique("Renforcé", 30, 6),
		new Caracteristique("Magnétique", 30, 17),
		new Caracteristique("Cornu", 45, 1),
		new Caracteristique("Guerrier", 45, 7),
		new Caracteristique("Malicieux", 45, 3),
		new Caracteristique("Paresseux", 45, 19),
		new Caracteristique("Pare-balles", 60, 15),
		new Caracteristique("D'Assaut", 60, 11),
		new Caracteristique("Chamaniste", 60, 2),
		new Caracteristique("Runique", 60, 5),
		new Caracteristique("Sanglant", 75, 4),
		new Caracteristique("Tigre", 75, 18),
		new Caracteristique("Mortel", 75, 16),
		new Caracteristique("Rituel", 75, 8)
	],
	suffixe: [
		new Caracteristique("De La Miss", 15, 14),
		new Caracteristique("Du Mister", 15, 15),
		new Caracteristique("De L'Explorateur", 15, 12),
		new Caracteristique("De La Précaution", 15, 13),
		new Caracteristique("D'Endurance", 15, 1),
		new Caracteristique("De La Protection", 15, 2),
		new Caracteristique("Des Sens", 30, 9),
		new Caracteristique("Du Toxicomane", 30, 18),
		new Caracteristique("Du Gladiateur", 30, 3),
		new Caracteristique("Du Prophète", 45, 10),
		new Caracteristique("D'Écaille de dragon", 45, 4),
		new Caracteristique("De La Puissance", 45, 5),
		new Caracteristique("De La Punition", 45, 8),
		new Caracteristique("Du Berger", 60, 17),
		new Caracteristique("Du Sang", 60, 6),
		new Caracteristique("De La Magie", 60, 7),
		new Caracteristique("De l'Adrénaline", 75, 16),
		new Caracteristique("De La Précognition", 75, 11)
	]
};
//#endregion Les casques

//#region Les armures
const armureCaracteristiques = {
	support: [
		new Caracteristique("T-shirt", 15, 42),
		new Caracteristique("Veste", 15, 7),
		new Caracteristique("Veston", 30, 43),
		new Caracteristique("Gilet", 30, 8),
		new Caracteristique("Corset", 45, 46),
		new Caracteristique("Smoking", 45, 47),
		new Caracteristique("Haubert", 45, 9),
		new Caracteristique("Cape", 60, 45),
		new Caracteristique("Armure En Plate", 60, 10),
		new Caracteristique("Pleine Armure", 75, 44)
	],
	prefixe: [
		new Caracteristique("Renforcé", 15, 1),
		new Caracteristique("Dominateur", 15, 15),
		new Caracteristique("Clouté", 15, 2),
		new Caracteristique("Léger", 30, 9),
		new Caracteristique("Pare-balles", 30, 12),
		new Caracteristique("Écailleux", 30, 3),
		new Caracteristique("Flexible", 45, 10),
		new Caracteristique("En Plate", 45, 4),
		new Caracteristique("Chamaniste", 45, 6),
		new Caracteristique("Chasseur", 60, 16),
		new Caracteristique("Elfe", 60, 11),
		new Caracteristique("Guerrier", 60, 5),
		new Caracteristique("Tigre", 75, 14),
		new Caracteristique("Mortel", 75, 13),
		new Caracteristique("Sanglant", 75, 8),
		new Caracteristique("Runique", 75, 7)
	],
	suffixe: [
		new Caracteristique("Du Toxicomane", 15, 18),
		new Caracteristique("Du Voleur", 15, 9),
		new Caracteristique("Du Garde", 15, 12),
		new Caracteristique("De L'Athlète", 15, 17),
		new Caracteristique("Du Gardien", 30, 11),
		new Caracteristique("De L'Adepte", 30, 1),
		new Caracteristique("De L'Adrénaline", 30, 16),
		new Caracteristique("De Carapace De Tortue", 30, 19),
		new Caracteristique("Du Tueur", 45, 8),
		new Caracteristique("Du Cobra", 45, 13),
		new Caracteristique("D'Esquive", 45, 7),
		new Caracteristique("Du Centurion", 45, 10),
		new Caracteristique("Du Maître D'Épée", 45, 2),
		new Caracteristique("De Caligula", 60, 6),
		new Caracteristique("De La Résistance", 60, 5),
		new Caracteristique("Du Pillard", 60, 20),
		new Caracteristique("Du Maître", 60, 3),
		new Caracteristique("De L'Orchidée", 75, 15),
		new Caracteristique("Du Semeur De La Mort", 75, 14),
		new Caracteristique("De La Vitesse", 75, 4)
	]
};
//#endregion Les armures

//#region Les pantalons
const pantalonCaracteristiques = {
	support: [
		new Caracteristique("Short", 15, 48),
		new Caracteristique("Pantalon", 15, 11),
		new Caracteristique("Kilt", 60, 50),
		new Caracteristique("Jupe", 60, 49)
	],
	prefixe: [
		new Caracteristique("Piqué", 15, 12),
		new Caracteristique("Renforcé", 15, 5),
		new Caracteristique("Clouté", 15, 6),
		new Caracteristique("Léger", 30, 4),
		new Caracteristique("Court", 30, 17),
		new Caracteristique("Satiné", 30, 16),
		new Caracteristique("Épineux", 30, 7),
		new Caracteristique("Pare-balles", 45, 13),
		new Caracteristique("Flexible", 45, 10),
		new Caracteristique("Blindé", 45, 8),
		new Caracteristique("Composite", 45, 9),
		new Caracteristique("Elfe", 60, 11),
		new Caracteristique("Runique", 60, 1),
		new Caracteristique("Chamaniste", 60, 2),
		new Caracteristique("Tigre", 75, 15),
		new Caracteristique("Sanglant", 75, 3),
		new Caracteristique("Mortel", 75, 14)
	],
	suffixe: [
		new Caracteristique("Du Toxicomane", 15, 12),
		new Caracteristique("De L'Athlète", 15, 11),
		new Caracteristique("Du Brigand", 15, 8),
		new Caracteristique("Des Gestes Muets", 30, 5),
		new Caracteristique("De La Réserve", 30, 6),
		new Caracteristique("Du Contrebandier", 30, 9),
		new Caracteristique("Du Soleil", 45, 14),
		new Caracteristique("Du Chasseur D'Ombres", 45, 7),
		new Caracteristique("Du Trafiquant D'Armes", 45, 10),
		new Caracteristique("Des Incas", 60, 15),
		new Caracteristique("D'Esquive", 60, 1),
		new Caracteristique("Du Serpent", 60, 2),
		new Caracteristique("Du Berger", 75, 13),
		new Caracteristique("De L'Orienteur", 75, 3),
		new Caracteristique("De La Nuit", 75, 4)
	]
};
//#endregion Les pantalons

//#region Les amulettes
const amuletteCaracteristiques = {
	support: [
		new Caracteristique("Amulette", 40, 6),
		new Caracteristique("Collier", 120, 39),
		new Caracteristique("Cravate", 120, 41),
		new Caracteristique("Foulard", 120, 40),
		new Caracteristique("Chaîne", 120, 38)
	],
	prefixe: [
		new Caracteristique("En Bronze", 40, 8),
		new Caracteristique("En Argent", 40, 9),
		new Caracteristique("Émeraude", 40, 3),
		new Caracteristique("En Or", 80, 10),
		new Caracteristique("En Platine", 80, 11),
		new Caracteristique("Rubis", 80, 1),
		new Caracteristique("Distingué", 120, 16),
		new Caracteristique("Astucieux", 120, 17),
		new Caracteristique("Ours", 120, 18),
		new Caracteristique("Dur", 120, 19),
		new Caracteristique("Astral", 120, 20),
		new Caracteristique("Élastique", 120, 21),
		new Caracteristique("Cardinal", 120, 22),
		new Caracteristique("Nécromancien", 120, 23),
		new Caracteristique("En Plastique", 160, 25),
		new Caracteristique("En Titane", 160, 28),
		new Caracteristique("Diamant", 160, 2),
		new Caracteristique("Vindicatif", 160, 5),
		new Caracteristique("Faussé", 160, 4),
		new Caracteristique("Insidieux", 160, 6),
		new Caracteristique("Archaïque", 160, 12),
		new Caracteristique("Hypnotique", 160, 13),
		new Caracteristique("Dansant", 160, 14),
		new Caracteristique("Fauve", 160, 15),
		new Caracteristique("Faucon", 200, 27),
		new Caracteristique("Araignée", 200, 26),
		new Caracteristique("Solaire", 200, 24),
		new Caracteristique("Noir", 200, 7)
	],
	suffixe: [
		new Caracteristique("De La Beauté", 40, 2),
		new Caracteristique("Du Pouvoir", 40, 3),
		new Caracteristique("Du Délit", 40, 8),
		new Caracteristique("De La Jouvence", 80, 18),
		new Caracteristique("De La Force", 80, 4),
		new Caracteristique("Du Génie", 80, 5),
		new Caracteristique("De La Sagesse", 80, 6),
		new Caracteristique("De La Peau Dure", 80, 7),
		new Caracteristique("Du Pèlerin", 120, 16),
		new Caracteristique("De La Justesse", 120, 1),
		new Caracteristique("De L'Astuce", 120, 15),
		new Caracteristique("De L'Art", 120, 19),
		new Caracteristique("Du Loup-garou", 120, 11),
		new Caracteristique("Du Dément", 160, 20),
		new Caracteristique("De La Concentration", 160, 13),
		new Caracteristique("De La Lévitation", 160, 14),
		new Caracteristique("Du Sang", 160, 10),
		new Caracteristique("De L'Habilité", 160, 17),
		new Caracteristique("De La Facilité", 160, 12),
		new Caracteristique("De La Chance", 200, 9)
	]
};
//#endregion Les amulettes

//#region Les anneaux
const anneauCaracteristiques = {
	support: [
		new Caracteristique("Anneau", 20, 5),
		new Caracteristique("Bracelet", 80, 37),
		new Caracteristique("Chevalière", 80, 36)
	],
	prefixe: [
		new Caracteristique("En Bronze", 20, 8),
		new Caracteristique("Émeraude", 20, 3),
		new Caracteristique("En Argent", 20, 9),
		new Caracteristique("Rubis", 40, 1),
		new Caracteristique("En Or", 40, 10),
		new Caracteristique("En Platine", 40, 11),
		new Caracteristique("Distingué", 60, 16),
		new Caracteristique("Astucieux", 60, 17),
		new Caracteristique("Ours", 60, 18),
		new Caracteristique("Dur", 60, 19),
		new Caracteristique("Astral", 60, 20),
		new Caracteristique("Élastique", 60, 21),
		new Caracteristique("Cardinal", 60, 22),
		new Caracteristique("Nécromancien", 60, 23),
		new Caracteristique("En Plastique", 80, 25),
		new Caracteristique("En Titane", 80, 28),
		new Caracteristique("Diamant", 80, 2),
		new Caracteristique("Vindicatif", 80, 5),
		new Caracteristique("Faussé", 80, 4),
		new Caracteristique("Insidieux", 80, 6),
		new Caracteristique("Archaïque", 80, 12),
		new Caracteristique("Hypnotique", 80, 13),
		new Caracteristique("Dansant", 80, 14),
		new Caracteristique("Fauve", 80, 15),
		new Caracteristique("Araignée", 100, 26),
		new Caracteristique("Solaire", 100, 24),
		new Caracteristique("Faucon", 100, 27),
		new Caracteristique("Noir", 100, 7)
	],
	suffixe: [
		new Caracteristique("De La Beauté", 20, 2),
		new Caracteristique("Du Pouvoir", 20, 3),
		new Caracteristique("Du Délit", 20, 8),
		new Caracteristique("De La Force", 40, 4),
		new Caracteristique("Du Génie", 40, 5),
		new Caracteristique("De La Sagesse", 40, 6),
		new Caracteristique("Du Renard", 40, 20),
		new Caracteristique("De La Peau Dure", 40, 7),
		new Caracteristique("De L'Art", 60, 18),
		new Caracteristique("De La Jouvence", 60, 17),
		new Caracteristique("De La Justesse", 60, 1),
		new Caracteristique("De L'Astuce", 60, 15),
		new Caracteristique("Du Loup-garou", 60, 11),
		new Caracteristique("De La Concentration", 80, 13),
		new Caracteristique("De La Lévitation", 80, 14),
		new Caracteristique("De La Chauve-Souris", 80, 16),
		new Caracteristique("Du Sang", 80, 10),
		new Caracteristique("Du Dément", 80, 19),
		new Caracteristique("De La Facilité", 80, 12),
		new Caracteristique("De La Chance", 100, 9)
	]
};
//#endregion Les anneaux

//#region Les armes à feu à 1 main
const armeFeuUneMainCaracteristiques = {
	support: [
		new Caracteristique("Glock", 50, 24),
		new Caracteristique("Magnum", 50, 25),
		new Caracteristique("Desert Eagle", 100, 59),
		new Caracteristique("Beretta", 100, 60),
		new Caracteristique("Uzi", 150, 26),
		new Caracteristique("Mp5k", 150, 62),
		new Caracteristique("Scorpion", 200, 61),
	],
	prefixe: [],
	suffixe: []
};
//#endregion Les armes à feu à 1 main

//#region Les armes à feu à 2 mains
const armeFeuDeuxMainsCaracteristiques = {
	support: [
		new Caracteristique("Carabine de Chasse", 100, 65),
		new Caracteristique("Fusil", 200, 28),
		new Caracteristique("AK-47", 300, 27),
		new Caracteristique("Lance-flammes", 300, 29),
		new Caracteristique("Fn-Fal", 400, 63),
		new Caracteristique("Semi-automatique de Sniper", 400, 66),
		new Caracteristique("Fusil de Sniper", 400, 64),
	],
	prefixe: [],
	suffixe: []
};
//#endregion Les armes à feu à 2 mains

//#region Les Armes À Distance
const armeDistanceCaracteristiques = {
	support: [
		new Caracteristique("Arc Court", 75, 68),
		new Caracteristique("Arc", 75, 67),
		new Caracteristique("Arc Long", 150, 69),
		new Caracteristique("Javelot", 150, 73),
		new Caracteristique("Pilum", 225, 74),
		new Caracteristique("Couteau de lancer", 225, 75),
		new Caracteristique("Francisque", 225, 76),
		new Caracteristique("Arbalète", 300, 71),
		new Caracteristique("Shuriken", 300, 77),
		new Caracteristique("Lourde Arbalète", 375, 72),
		new Caracteristique("Arc Reflex", 375, 70)
	],
	prefixe: [],
	suffixe: [
		new Caracteristique("De Longue Portée", 75, 2),
		new Caracteristique("De La Précision", 150, 3),
		new Caracteristique("Des Dryades", 225, 5),
		new Caracteristique("De La Vengeance", 225, 8),
		new Caracteristique("De Mitraillage", 300, 1),
		new Caracteristique("Du Loups", 300, 7),
		new Caracteristique("De La Perfection", 300, 4),
		new Caracteristique("De La Réaction", 375, 6),
	]
};
//#endregion Les Armes À Distance

//#region Les armes de Corps À Corps à 1 Main
const armeCaCUneMainCaracteristiques = {
	support: [
		new Caracteristique("Matraque", 20, 14),
		new Caracteristique("Couteau", 20, 12),
		new Caracteristique("Poignard", 40, 13),
		new Caracteristique("Rapière", 40, 17),
		new Caracteristique("Épée", 60, 15),
		new Caracteristique("Hache", 60, 18),
		new Caracteristique("Poing Américain", 80, 51),
		new Caracteristique("Kama", 80, 52),
		new Caracteristique("Poing des Cieux", 100, 16),
		new Caracteristique("Wakizashi", 100, 53)
	],
	prefixe: [
		new Caracteristique("Sévère", 20, 7),
		new Caracteristique("Piquant", 20, 14),
		new Caracteristique("Cruel", 20, 3),
		new Caracteristique("Cristallin", 20, 20),
		new Caracteristique("Amical", 40, 19),
		new Caracteristique("Venimeux", 40, 13),
		new Caracteristique("Léger", 40, 1),
		new Caracteristique("Denté", 40, 8),
		new Caracteristique("Tonifiant", 60, 10),
		new Caracteristique("Protecteur", 60, 11),
		new Caracteristique("Mystique", 60, 18),
		new Caracteristique("Lumineux", 60, 16),
		new Caracteristique("Osseux", 60, 17),
		new Caracteristique("Empoisonné", 80, 12),
		new Caracteristique("Antique", 80, 6),
		new Caracteristique("Meurtrier", 80, 9),
		new Caracteristique("Agile", 80, 2),
		new Caracteristique("Damné", 100, 4),
		new Caracteristique("Rapide", 100, 15),
		new Caracteristique("Démoniaque", 100, 5)
	],
	suffixe: [
		new Caracteristique("De La Secte", 20, 19),
		new Caracteristique("Du Conquérant", 20, 20),
		new Caracteristique("De La Puissance", 20, 6),
		new Caracteristique("Du Commandant", 20, 15),
		new Caracteristique("De L'Agilité", 40, 8),
		new Caracteristique("De_La_Justesse", 40, 9),
		new Caracteristique("De La Contusion", 40, 18),
		new Caracteristique("Du Pouvoir", 40, 7),
		new Caracteristique("De La Douleur", 40, 1),
		new Caracteristique("Du Courage", 60, 12),
		new Caracteristique("De La Précision", 60, 10),
		new Caracteristique("Du Sang", 60, 3),
		new Caracteristique("Des Ancêtres", 60, 16),
		new Caracteristique("De la Peste", 60, 5),
		new Caracteristique("De Dracula", 80, 4),
		new Caracteristique("De La Vengeance", 80, 2),
		new Caracteristique("De La Vertu", 80, 13),
		new Caracteristique("Du Clan", 80, 17),
		new Caracteristique("Du Fer À Cheval", 80, 21),
		new Caracteristique("De La Vélocité", 100, 11),
		new Caracteristique("Du Suicidé", 100, 22),
		new Caracteristique("De L'Empereur", 100, 14)
	]
};
//#endregion Les armes de Corps À Corps à 1 Main

//#region Les armes de Corps À Corps à 2 Mains
const armeCaCDeuxMainsCaracteristiques = {
	support: [
		new Caracteristique("Massue", 40, 22),
		new Caracteristique("Pince-monseigneur", 40, 54),
		new Caracteristique("Pique", 80, 20),
		new Caracteristique("Hache Lourde", 80, 19),
		new Caracteristique("Espadon", 120, 23),
		new Caracteristique("Faux", 120, 21),
		new Caracteristique("Morgenstern", 160, 55),
		new Caracteristique("Hallebarde", 160, 58),
		new Caracteristique("Katana", 200, 56),
		new Caracteristique("Tronçonneuse", 200, 57)
	],
	prefixe: [
		new Caracteristique("Sévère", 40, 9),
		new Caracteristique("Piquant", 40, 16),
		new Caracteristique("Dispendieux", 40, 21),
		new Caracteristique("Tonifiant", 40, 12),
		new Caracteristique("Léger", 80, 1),
		new Caracteristique("Cruel", 80, 3),
		new Caracteristique("Venimeux", 80, 15),
		new Caracteristique("Lumineux", 80, 17),
		new Caracteristique("Cristallin", 80, 19),
		new Caracteristique("Lourd", 120, 7),
		new Caracteristique("Large", 120, 8),
		new Caracteristique("Protecteur", 120, 13),
		new Caracteristique("Mystique", 120, 18),
		new Caracteristique("Irradiée", 120, 20),
		new Caracteristique("Antique", 160, 6),
		new Caracteristique("Denté", 160, 10),
		new Caracteristique("Empoisonné", 160, 14),
		new Caracteristique("Meurtrier", 160, 11),
		new Caracteristique("Damné", 200, 4),
		new Caracteristique("Agile", 200, 2),
		new Caracteristique("Démoniaque", 200, 5)
	],
	suffixe: [
		new Caracteristique("De La Ruse", 40, 8),
		new Caracteristique("Du Hasardeux", 40, 9),
		new Caracteristique("De Plomb", 40, 18),
		new Caracteristique("De La Puissance", 80, 6),
		new Caracteristique("De La Trahison", 80, 11),
		new Caracteristique("Du Pouvoir", 80, 7),
		new Caracteristique("Du Conquérant", 80, 14),
		new Caracteristique("De La Douleur", 120, 1),
		new Caracteristique("Du Buveur De Sang", 120, 17),
		new Caracteristique("De L'Inquisiteur", 120, 10),
		new Caracteristique("Du Sang", 120, 3),
		new Caracteristique("De Dracula", 160, 4),
		new Caracteristique("De la Peste", 160, 5),
		new Caracteristique("De La Vengeance", 160, 2),
		new Caracteristique("Du Fer À Cheval", 160, 15),
		new Caracteristique("Du Basilic", 200, 12),
		new Caracteristique("De L'Autocrate", 200, 13),
		new Caracteristique("Du Suicidé", 200, 16)
	]
};
//#endregion Les armes de Corps À Corps à 2 Mains
