let outputScreen = document.getElementById("tampak-hasil");

function display(num) {
  outputScreen.value += num;
}

function kalkulator() {
  return (outputScreen.value = eval(outputScreen.value));
}

function bersihkan() {
  outputScreen.value = "";
}
