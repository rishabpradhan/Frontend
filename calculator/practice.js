const display = document.getElementById("demo");

// function to show the operator and operands on display
function show(input) {
  display.value += input;
}
// when AC button is clicked all charactor will removed
function clearDisplay() {
  display.value = "";
}
// function to implent balckspace
function removeChar() {
  display.value = display.value.slice(0, -1);
}
// function to perform arthimetic operations
function calculate() {
  try {
    display.value = eval(display.value); //The eval() method evaluates or executes an argument.
  } catch (error) {
    display.value = "error";
  }
}
