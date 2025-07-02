const $app = document.querySelector("#app");

const numArr = [];
const evenArr = [];
const oddArr = [];

const UpdateOutputs = () => {
  const $bank = $app.querySelector("#bank");
  const $odds = $app.querySelector("#odd");
  const $evens = $app.querySelector("#even");

  $bank.textContent = numArr;
  $odds.textContent = oddArr;
  $evens.textContent = evenArr;
};

const SortNumber = () => {
  if (numArr[0] % 2 === 0) {
    evenArr.push(numArr[0]);
  } else {
    oddArr.push(numArr[0]);
  }
  numArr.shift();
};

const SortAll = () => {
  const arrLength = numArr.length;

  for (let i = 0; i < arrLength; i++) {
    if (numArr[0] % 2 === 0) {
      evenArr.push(numArr[0]);
    } else {
      oddArr.push(numArr[0]);
    }
    numArr.shift();
  }
};

const CreateSort = () => {
  const $sort1 = $app.querySelector("#sort1");
  const $sortall = $app.querySelector("#sortall");

  $sort1.addEventListener("click", function (event) {
    event.preventDefault();
    SortNumber();
    UpdateOutputs();
  });

  $sortall.addEventListener("click", function (event) {
    event.preventDefault();
    SortAll();
    UpdateOutputs();
  });
};

const CreateForm = () => {
  const $form = $app.querySelector("form");

  $form.innerHTML = `
        <label>
        Add a number to the bank:
        <input/ type="number">
        </label>
        <button id=submit>Add Number</button>
    `;

  $form.addEventListener("submit", function (event) {
    event.preventDefault();
    const numInput = +event.target[0].value;

    numArr.push(numInput);
    UpdateOutputs();
  });
};

const Render = () => {
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <div id=input>      
        <form></form>
        <button id=sort1>Sort 1</button>
        <button id=sortall>Sort All</button>
    </div>
    <div id=output>
        <h2>Bank</h2>
        <p id=bank></p>
        <h2>Odds</h2>
        <p id=odd></p>
        <h2>Evens</h2>
        <p id=even></p>
    </div>
    `;
  CreateForm();
  CreateSort();
};

Render();
