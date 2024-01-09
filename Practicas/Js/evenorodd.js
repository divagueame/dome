function evenOrOdd(number) {
  let even = [0];
  let odd = [0];
  for (let i = 0; i < number.length; i + 1) {
    let elemento = number[i];
    if (elemento > odd) {
      odd = elemento;
      console.log("Odd");
    }
  }
}
