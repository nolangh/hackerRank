//Try to reverse string  using the split, reverse, and join methods.
// if an exception is thrown, catch it and print the contents of the exceptions "message" on a new line.
//print s on a new line. if no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

function reverseString(s) {
  let string = s.split("");

  try {
    console.log(string.reverse);
  } finally {
    console.log(s);
  }
}
