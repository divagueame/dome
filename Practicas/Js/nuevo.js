function highAndLow(numbersString) {
  console.log(numbersString);
  let numbers = numbersString.split(" ");
  console.log(numbers);
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let elemento = numbers[i];
    if (elemento > max) {
      max = elemento;
    }
    if (elemento < min) {
      min = elemento;
    }
  }
  let maxmin = max + " " + min;
  return maxmin;
}
const num = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

let resultado = highAndLow(num);
console.log(resultado);
