class Objets {
	//#region Caractéristiques privées de base
	#NOM = "Rien";
	#QUANTITY = 1;
	#STACKABLE = false;
	#REMAIN = 0;
	#UNITY = "None";
	#QUALITY = "None";
	#WEIGHT = 0;
	#DESCRIPTION = "Aucune";
	//#endregion
	//#region Constructeur
	constructor(
		{
			Nom = this.#NOM,
			Quantity = this.#QUANTITY,
			Stackable = this.#STACKABLE,
			Remain = this.#REMAIN,
			Unity = this.#UNITY,
			Quality = this.#QUALITY,
			Weight = this.#WEIGHT,
			Description = this.#DESCRIPTION
		} = {}
		//#endregion
		//#region Variables appliquées au constructeur
	) {
		//Nom
		this.#NOM = Nom;

		//Quantité
		this.#QUANTITY = Quantity;

		//Stackable
		this.#STACKABLE = Stackable;

		//Utilisations restantes
		if (Remain != 0) {
			this.#REMAIN = Remain;
			this.#UNITY = Unity;
		}

		//Qualité
		if (Quality != "None") {
			this.#QUALITY = Quality;
		}
		//Poids
		this.#WEIGHT = Weight;

		//Description
		if (Description != "Aucune") {
			this.#DESCRIPTION = Description;
		}
	}
	//#endregion
	//#region Fonctions utilisables sur l'objet
	//Obtenir le Nom
	get Nom() {
		return this.#NOM;
	}
	//Changer le Nom
	set Nom(name) {
		try {
			if (typeof name != "string") throw "Bad type";
			else if (name == "") throw "Bad length";
			else this.#NOM = name;
		} catch (err) {
			if (err == "Bad type") {
				console.log("Erreur : Mauvais type de variable d'entrée indiqué.");
				console.log("Demandé : String || Donné :", typeof name);
			} else if (err == "Bad length")
				console.log("Erreur : La longueur du nom donné est insuffisante.");
		}
	}

	//Obtenir la Quantité
	get Quantity() {
		return this.#QUANTITY;
	}
	//Changer la Quantite
	set Quantity(qtt) {
		try {
			if (typeof qtt !== "number") throw "Bad type";
			else if (qtt < 0 || !Number.isInteger(qtt)) throw "Not a positive integer";
			else {
				this.#QUANTITY = qtt;
				if (this.#QUANTITY == 0) {
					delete this;
				}
			}
		} catch (err) {
			if (err == "Bad type") {
				console.log("Erreur : Mauvais type de variable d'entrée indiqué.");
				console.log("Demandé : Nombre || Donné :", typeof qtt);
			} else if (err == "Not a positive integer")
				console.log("La valeur ne peut pas être négative ou à virgule.");
		}
	}

	//Obtenir stackable
	get Stackable(){
		return this.#STACKABLE;
	}
	//Obtenir le Poids
	get Weight() {
		return this.#WEIGHT;
	}
	set Weight(value) {
		try {
			if (typeof value !== "number") throw "Bad type";
			else if (value < 0 || !Number.isInteger(value)) throw "Not a positive integer";
			else {
				this.#QUANTITY = value;
				if (this.#QUANTITY == 0) {
					delete this;
				}
			}
		} catch (err) {
			if (err == "Bad type") {
				console.log("Erreur : Mauvais type de variable d'entrée indiqué.");
				console.log("Demandé : Nombre || Donné :", typeof value);
			} else if (err == "Not a positive integer")
				console.log("La valeur ne peut pas être négative ou à virgule.");
		}
	}

	//Obtenir le Nombre d'utilisations restantes
	get Remain() {
		try {
			if (typeof this.#REMAIN !== "undefined") {
				return this.#REMAIN;
			} else {
				throw "Undefined variable"
			}
		} catch (err) {
			if (err == "Undefined variable") {
				console.log("\"Remain\" n'existe pas.");
			}
		}
	}

	//Obtenir l'unité
	get Unity() {
		try {
			if (typeof this.#UNITY !== "undefined") {
				return this.#UNITY
			} else {
				throw "Undefined variable"
			}
		} catch (err) {
			if (err == "Undefined variable") {
				console.log("\"Unity\" n'existe pas.");
			}
		}
	}
	//Changer l'unité
	set Unity(name) {
		try {
			if (typeof name !== "string") throw "Bad type";
			else if (name == "") throw "Bad length";
			else this.#UNITY = name;
		} catch (err) {
			if (err == "Bad type") {
				console.log("Erreur : Mauvais type de variable d'entrée indiqué.");
				console.log("Demandé : String || Donné :", typeof name);
			} else if (err == "Bad length")
				console.log("Erreur : La longueur du nom donné est insuffisante.");
		}
	}

	//Changer le Nombre d'utilisations restantes
	set Remain(qtt) {
		try {
			if (typeof qtt !== "number") throw "Bad type";
			else if (qtt < 0) throw "Not a positive number"
			else {
				this.#REMAIN = qtt;
				if (this.#REMAIN == 0) {
					this.Quantity -= 1;
				}
			}
		}
		catch (err) {
			if (err == "Bad type") {
				console.log("Erreur : Mauvais type de variable d'entrée indiqué.");
				console.log("Demandé : Nombre || Donné :", typeof qtt);
			} else if (err == "Not a positive number") {
				console.log("La valeur ne peut pas être négative.");
			}
		}
	}

	//Obtenir la Qualité
	get Quality() {
		try {
			if (typeof this.#QUALITY !== "undefined") {
				return this.#QUALITY;
			} else {
				throw "Undefined variable"
			}
		} catch (err) {
			if (err == "Undefined variable") {
				console.log("\"Quality\" n'existe pas.");
			}
		}
	}
	//Obtenir la Description
	get Description() {
		try {
			if (typeof this.#DESCRIPTION !== "undefined") {
				return this.#DESCRIPTION;
			} else {
				throw "Undefined variable"
			}
		} catch (err) {
			if (err == "Undefined variable") {
				console.log("\"description\" n'existe pas.");
			}
		}
	}
	//Obtenir les infos
	getInfo() {
		var info = {
			Nom: this.#NOM,
			Quantity: this.Quantity,
			Weight: this.Weight
		}
		if (this.#REMAIN) {
			info["Remain"] = this.#REMAIN;
			info["Unity"] = this.#UNITY;
		}
		if (this.#QUALITY != "None") {
			info["Quality"] = this.#QUALITY;
		}
		if (this.#DESCRIPTION != "Aucune") {
			info["Description"] = this.#DESCRIPTION;
		}
		return info;
	}

	//#endregion
}

exports.Objets = Objets;