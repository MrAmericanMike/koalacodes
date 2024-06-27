import { it, expect } from "vitest";

import KoalaCodes from "../src/main";

it("Should return a 3 letters code", () => {
	const KC = new KoalaCodes();
	expect(KC.generateCode(3).length).toBe(3);
});

it("Should return a 8 letters code", () => {
	const KC = new KoalaCodes();
	expect(KC.generateCode(-8).length).toBe(8);
});

it("Should return a 4 letters code", () => {
	const KC = new KoalaCodes({ defaultLength: 4 });
	expect(KC.generateCode().length).toBe(4);
});

it("Should return a 8 letters code", () => {
	const KC = new KoalaCodes({ defaultLength: 8 });
	expect(KC.generateCode().length).toBe(8);
});

it("Should return a 8 letters code", () => {
	const KC = new KoalaCodes();
	expect(KC.generateCode().length).toBe(8);
});

it("Should return a 12 letters code", () => {
	const KC = new KoalaCodes({ defaultLength: 12 });
	expect(KC.generateCode().length).toBe(12);
});

it("Should start with a consonant", () => {
	const KC = new KoalaCodes({ defaultLength: 8, firstLetter: "consonant" });
	expect(isConsonant(KC.generateCode().charAt(0))).toBeTruthy();
});

it("Should start with a vowel", () => {
	const KC = new KoalaCodes({ defaultLength: 8, firstLetter: "vowel" });
	expect(isVowel(KC.generateCode().charAt(0))).toBeTruthy();
});

it("Should alternate consonants and vowels", () => {
	const KC = new KoalaCodes({ defaultLength: 16 });
	const code = KC.generateCode();
	code.split("").forEach((letter, index) => {
		if (index % 2 == 0) {
			expect(isConsonant(letter)).toBeTruthy();
		} else {
			expect(isVowel(letter)).toBeTruthy();
		}
	});
});

it("Should alternate vowels and consonants", () => {
	const KC = new KoalaCodes({ defaultLength: 16, firstLetter: "vowel" });
	const code = KC.generateCode();
	code.split("").forEach((letter, index) => {
		if (index % 2 == 0) {
			expect(isVowel(letter)).toBeTruthy();
		} else {
			expect(isConsonant(letter)).toBeTruthy();
		}
	});
});

function isConsonant(letter: string) {
	return ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"].includes(letter);
}

function isVowel(letter: string) {
	return ["A", "E", "I", "O", "U"].includes(letter);
}
