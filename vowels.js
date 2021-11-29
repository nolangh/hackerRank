const vowels = ["a", "e", "i", "o", "u"]; //put in cap vowels

function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if (i === vowels.includes(i)) {
      console.log("i");
    } else i === !vowels.includes(i);
    console.log(i);
  }
}

/* const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function vowelsAndConsonants(s) {
  let string = s;
  let stringArray = string.split("");
  console.log(stringArray);
} */

/* 
function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];

  for (let v of s) {
    if (vowels.includes(v)) console.log(v);
  }

  for (let v of s) {
    if (!vowels.includes(v)) console.log(v);
  }
}*/
