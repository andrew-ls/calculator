const btns = document.querySelectorAll("[data-value]");
let screen = document.querySelector("[data-screen]");
const operators = document.querySelectorAll("[data-operator]");

let x = "";
let data = [];

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let buttonValue = e.target.dataset.value;

    if (buttonValue === "AC") {
      screen.innerText = "";
      data = [];
      screen.innerText = 0;
    } if (Number(buttonValue) === 0 && screen.innerText.startsWith("0.") ) {
        screen.innerText += buttonValue;
      
    } if (!isNaN(Number(buttonValue))) {
      screen.innerText = buttonValue;
      data.push(screen.innerText);
      screen.innerText = data.join("");
    } if (/[\/x\-+]/.test(buttonValue)) {
      data.push(buttonValue)
      screen.innerText = data.join("");

    }
    if (buttonValue === "minus") {
      let currentValue = data[data.length - 1];
      if(currentValue === undefined) return
      let toggledValue = -currentValue;
      screen.innerText = toggledValue; // Update the screen
      // Update the value in the data array
      data[data.length - 1] = toggledValue;
      console.log(data)
      // debuggera
  }

   if (buttonValue === ".") {
      if (!screen.innerText.includes(".")) {
        screen.innerText += ".";
      }
   }
    if (buttonValue === "=") {
      // screen.innerText = new Function("return " + data.slice(-1).join(" "))();
      let result =  eval(data.join(""))
      screen.innerText = result;
      console.log(data);
      data = [];
      data.push(result)
    } 

    if (buttonValue === "%") {
      screen.innerText = screen.innerText / 100;
      console.log("josué");
    }
  });
});
