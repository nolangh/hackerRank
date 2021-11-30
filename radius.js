// area = PI* radius
// perimeter = 2 * PI * r
// given r print area then on a new line print perimeter

const PI = Math.PI;
const r = readLine();

let area = PI * r ** 2;
let per = 2 * PI * r;

console.log(parseFloat(area));
console.log(parseFloat(per));
