function factorial(n) {
  let result = n;

  if (n === 0 || n === 1) return 1;
  while (n > 1) {
    n--;
    result = result * n;
  }
  return result;
}

factorial(5);
