let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {

    let value = e.target.innerHTML;

    if (value == "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }

    } else if (value == "AC") {
      string = "";
      input.value = "";

    } else if (value == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;

    } else if (value == "sin") {
      let val = eval(string || "0");
      string = Math.sin(val * Math.PI / 180);
      input.value = string.toFixed(4);

    } else if (value == "cos") {
      let val = eval(string || "0");
      string = Math.cos(val * Math.PI / 180);
      input.value = string.toFixed(4);

    } else if (value == "tan") {
      let val = eval(string || "0");

      if (val % 180 === 90) {
        input.value = "Infinity";
        string = "";
      } else {
        string = Math.tan(val * Math.PI / 180);
        input.value = string.toFixed(4);
      }

    } else if (value == "log") {
      let val = eval(string || "0");

      if (val <= 0) {
        input.value = "Error";
        string = "";
      } else {
        string = Math.log10(val);
        input.value = string.toFixed(4);
      }

    } else if (value == "√") {
      let val = eval(string || "0");

      if (val < 0) {
        input.value = "Error";
        string = "";
      } else {
        string = Math.sqrt(val);
        input.value = string.toFixed(4);
      }

    } else if (value == "x²") {
      let val = eval(string || "0");
      string = Math.pow(val, 2);
      input.value = string;

    } else if (value == "xʸ") {
      string += "**";
      input.value = string;

    } else if (value == "π") {
      string += "3.1416";
      input.value = string;

    } else {
      string = string + value;
      input.value = string;
    }

  });
});

