//  Start Night Mode
let container = document.querySelector(".container");
let boby = document.querySelector("body");
let theme = document.querySelector(".theme");
let h2 = document.querySelector("h2");
let bolid = document.querySelector(".bolid");
let childContaine = document.querySelector(".childContainer");

bolid.addEventListener("click", () => {
  bolid.classList.toggle("move");
  if (bolid.classList.contains("move")) {
    childContaine.style.backgroundColor = "#252d44";
    boby.style.backgroundColor = "#324372";
    theme.style.backgroundColor = "#1f2a48";
    outPut.style.backgroundColor = "#181f32";
    boby.style.color = "white";
  } else {
    outPut.style.backgroundColor = "#e6e6e6";
    boby.style.backgroundColor = "#e6e6e6";
    theme.style.backgroundColor = "#d3cdcd";
    boby.style.color = "black";
    childContaine.style.backgroundColor = "#d3cdcd";
  }
});
//  End Night Mode
// Start Add Logic Calculator
// Variables
const outPut = document.querySelector(".outPut");
const buttons = document.querySelectorAll(".parentButton button");
const reset = document.querySelector(".btnReset");
const del = document.querySelector(".btnDel");
const equal = document.querySelector(".btnEqual");

// Loop to add event listener to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;
    if (value !== "DEL" && value !== "RESET" && value !== "=") {
      outPut.innerText += value;
    }
  });
});

// Delete Button
del.addEventListener("click", () => {
  outPut.innerText = outPut.innerText.slice(0, -1);
});

// Reset Button
reset.addEventListener("click", () => {
  outPut.innerText = "";
});

// Equal Button
equal.addEventListener("click", () => {
  let expression = outPut.innerText;

// condetion to check if the expression contains any of the following
  if (/[+\-*/]/.test(expression)) {
    try {
      outPut.innerText = eval(expression); 
    } catch (error) {
      outPut.innerText = "Error"; 
    }
  }
});

