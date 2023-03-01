const createInputBoxes = (numInputs) => {
  const inputBoxes = document.getElementById("input-boxes");
  inputBoxes.innerHTML = "";

  for (let i = 0; i < numInputs; i++) {
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("name", `input-${i}`);
    input.setAttribute("placeholder", `Enter value ${i + 1}`);
    inputBoxes.appendChild(input);
  }
};

const calculateTotal = () => {
  const inputValues = [];
  const inputs = document.getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value) {
      inputValues.push(parseFloat(inputs[i].value));
    }
  }

  const total = inputValues.reduce((acc, curr) => acc + curr, 0);
  const result = document.getElementById("result");
  result.innerHTML = `The sum of the input values is: ${total}`;
};

const createInputsBtn = document.getElementById("create-inputs-btn");
createInputsBtn.addEventListener("click", () => {
  const numInputs = parseInt(document.getElementById("num-inputs").value);
  if (!numInputs) return;

  createInputBoxes(numInputs);
});

const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculateTotal);