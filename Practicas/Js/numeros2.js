const numbers = [1, 2, 3, 4, 5];
const numbers2 = [-1, 23];
let max = numbers[0];
let min = numbers[0];
function highAndLow(arr) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
}
highAndLow(arr);
highAndLow();
// console.log("max=" + max);
// console.log("min=" + min);
