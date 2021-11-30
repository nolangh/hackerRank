const letterA = ["a", "e", "i", "o", "u"];
const letterB = ["b", "c", "d", "e", "f", "g"];
const letterC = ["h", "i", "j", "k", "l", "m"];
const letterD = [
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function getLetter(s) {
  let L = s[0];
  if (letterA.includes(L)) {
    return "A";
  } else if (letterB.includes(L)) {
    return "B";
  } else if (letterC.includes(L)) {
    return "C";
  } else return "D";
}

console.log(getLetter("abtcd"));
