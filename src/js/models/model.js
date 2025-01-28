class Caracteristique {
	constructor(nom, pe, baseTypeId = null) { // TODO: Make the parameter mandatory!
		this.nom = nom;
		this.pe = pe;
		this.baseTypeId = baseTypeId ?? 0; // TODO: Make the parameter mandatory not nullable
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
