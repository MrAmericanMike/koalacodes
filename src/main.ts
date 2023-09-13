interface Defaults {
	vowels: Array<string>;
	consonants: Array<string>;
	defaultLength: number;
}

interface Options {
	vowels?: Array<string>;
	consonants?: Array<string>;
	defaultLength?: number;
}

const DEFAULTS: Defaults = {
	vowels: ["A", "E", "I", "O", "U"],
	consonants: ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"],
	defaultLength: 8
};

class KoalaCodes {
	#VOWELS: Array<string>;
	#CONSONANTS: Array<string>;
	#DEFAULT_LENGTH: number;

	/**
	 *
	 * @param {Options} options Different options for constructing the code generator
	 */
	constructor(options?: Options) {
		this.#VOWELS = options?.vowels ?? DEFAULTS.vowels;
		this.#CONSONANTS = options?.consonants ?? DEFAULTS.consonants;
		this.#DEFAULT_LENGTH = options?.defaultLength ?? DEFAULTS.defaultLength;
	}

	generateCode(length: number = this.#DEFAULT_LENGTH): string {
		const LENGTH = length > 0 ? length : this.#DEFAULT_LENGTH;
		let code = "";
		for (let index = 0; index < LENGTH; index++) {
			if (index % 2 == 0) {
				code += this.#CONSONANTS[Math.floor(Math.random() * this.#CONSONANTS.length)];
			} else {
				code += this.#VOWELS[Math.floor(Math.random() * this.#VOWELS.length)];
			}
		}
		return code;
	}
}

export = KoalaCodes;

