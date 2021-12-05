//Try to reverse string  using the split, reverse, and join methods.
// if an exception is thrown, catch it and print the contents of the exceptions "message" on a new line.
//print s on a new line. if no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

function getElement(arr, pos) {
  return arr[pos];
}

//let arr = [1, 2, 3, 4, 5];

try {
  console.log(getElement(arr, 4));
} catch (e) {
  console.log(e.message);
}
console.log("The program continued executing!");
