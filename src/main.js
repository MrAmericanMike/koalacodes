class KoalaCodes {
	#VOWELS = ["A", "E", "I", "O", "U"];
	#CONSONANTS = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
	#DEFAULT_LENGTH;
	constructor({ defaultLength } = {}) {
		this.#DEFAULT_LENGTH = defaultLength > 0 ? defaultLength : 8;
	}

	generateCode(length) {
		const LENGTH = length > 0 ? length : this.#DEFAULT_LENGTH;
		let code = "";
		for (let index = 0; index < LENGTH; index++) {
			if (index % 2 == 0) {
				code += this.#CONSONANTS[Math.floor(Math.random() * this.#CONSONANTS.length)];
			}
			else {
				code += this.#VOWELS[Math.floor(Math.random() * this.#VOWELS.length)];
			}
		}
		return code;
	}

};

module.exports = KoalaCodes;

