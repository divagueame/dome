const display = document.querySelector("#display");
const buttonOne = document.querySelector("#one");

buttonOne.addEventListener("click", function() {
    display.value += buttonOne.value;
});
