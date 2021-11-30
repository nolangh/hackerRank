// area = PI* radius
// perimeter = 2 * PI * r
// given r print area then on a new line print perimeter

const PI = Math.PI;

const r = readLine();

let area = PI * r * r;
console.log(parseFloat(area));

let per = 2 * PI * r;
console.log(parseFloat(per));
