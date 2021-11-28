const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function vowelsAndConsonants(s) {
  let stringVowels = [];
  for (let i = 0; i < vowels.length; i++) {
    if (vowels.includes(s[i])) {
      stringVowels += s[i];
    }
  }
  console.log(stringVowels);
}
