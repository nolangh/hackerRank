const vowels = ["a", "e", "i", "o", "u"];

function vowelsAndConsonants(s) {
  for (let v of s) {
    if (vowels.includes(v)) console.log(v);
  }
  for (let v of s) {
    if (!vowels.includes(v)) console.log(v);
  }
}
