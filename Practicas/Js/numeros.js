const numbers = [1, 2, 3, 4, 5];
function highAndLow(numbers) {
  console.log(Math.max(...numbers));
  console.log(Math.min(...numbers));
}
let resultado = highAndLow(numbers);
console.log(resultado);
