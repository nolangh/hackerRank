function factorial(n) {
  let result = n; //assigns the input "n" to result

  if (n === 0 || n === 1) return 1; //returns 1 if n is equal to 0 or 1
  while (n > 1) {
    n--; //decrements n by 1 with each iteration
    result = result * n; //re-assigns the variable result to equal result * n
  }
  return result;
}

factorial(5);
