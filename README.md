# Koala Codes

Random Codes Generator

**THIS LIBRARY IS IN EARLY STAGES - EXPECT BEAKING CHANGES**

***

## Description:

This library generates random codes alternating consonants and vowels.

***

### Installation:

```sh
npm install koalacodes
```

***

### Usage:

```js
const KoalaCodes = require("koalacodes");

const KC = new KoalaCodes();

console.log(KC.generateCode(-1)); // Defaults to 8 - YIFEJUMA
console.log(KC.generateCode(0));  // Defaults to 8 - HOVUDETO
console.log(KC.generateCode());   // Defaults to 8 - MUWAXIDE
console.log(KC.generateCode(1));  // H
console.log(KC.generateCode(4));  // SANA
console.log(KC.generateCode(7));  // HOKUDET
console.log(KC.generateCode(12)); // NOWUKUZEDEWI
```

Set a default length by passing an object with `defaultLength` on it. (More options to come in future versions)

```js
const KC = new KoalaCodes({ defaultLength: 6 });
```

Using import syntax:

```js
import KoalaCodes from "koalacodes";
```

User defined arrays of vowels and consonants
```js
const KC = new KoalaCodes({
	defaultLength: 7,
	vowels: ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"],
	consonants: ["б", "в", "г", "д", "ж", "з", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ"]
});

console.log(KC.generateCode(4));  // хажя
console.log(KC.generateCode());   // рулакыч
```

***

### Notes

At this stage the library will always generate a code that alternates consonants with vowels starting always with a consonant. This is just a way to make the codes somewhat readables.

***

### **TODO** and **Future Features**

* User defined starting letter (vowel/consonant)
* Hability to control UpperCase and LowerCase letters

***

### Feedback

All feedback is welcome just write an [issue](https://github.com/MrAmericanMike/koalacodes/issues).

***

![License MIT](https://img.shields.io/badge/license-MIT-blue)
