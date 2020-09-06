let wordStore = [
  "ELEPHANT",
  "EAGLE",
  "MOUSE",
  "SCHOOL",
  "ROLLS ROYCE",
  "BUTTERFLY"
];
let word;
let chance = 5;
let output = [];

function startGame() {
  let index = Math.floor(Math.random() * 6);
  word = wordStore[index];

  for (let i = 0; i < word.length; i++) output[i] = "";

  console.log(output);
  let x = document.getElementById("line-blank");
  let p = document.getElementById("chance");
  let text = p.innerText;
  p.innerText = `${text} ${chance}`;

  for (let i = 0; i < word.length; i++) {
    let ele = document.createElement("div");
    ele.classList.add("line-exist");
    x.appendChild(ele);
    //  ele.innerText="";

    ele = document.createElement("div");
    ele.classList.add("line-not-exist");
    //  ele.innerText="";
    x.appendChild(ele);
  }
}
startGame();

window.addEventListener("keydown", function (event) {
  let x = String.fromCharCode(event.keyCode);
  //  console.log(x);
  let flag = false;
  //noww check match with word
  if (chance === 0) {
    alert("Game Over");
    reset();
  }
  for (let i = 0; i < word.length; i++) {
    if (x === word[i]) {
      showVal(x);
      flag = true;
      break;
    }
  }
  if (flag === false) {
    reduceChance();
  }

  //check win
  if (chance > 0) checkWin();
  else {
    document.querySelector("#result").innerHTML = "YOU LOSE";
    alert("Game Over");
    reset();
  }
});

const showVal = (x) => {
  let arr = document.querySelectorAll(".line-exist");
  for (let j = 0; j < word.length; j++) {
    if (word[j] === x) {
      arr[j].innerText = x;
      output[j] = x;
    }
  }
};

const reduceChance = () => {
  chance--;
  let p = document.getElementById("chance");
  let text = p.innerText;
  //console.log(text.length);
  text = text.slice(0, text.length - 2);
  p.innerText = `${text} ${chance}`;
};

function checkWin() {
  for (let i = 0; i < word.length; i++) {
    if (output[i] === "") return;
  }
  document.querySelector("#result").innerHTML = "YOU WON";
  alert("Game Over");
  chance = 0;
  reset();
}

function reset() {
  let arr = document.querySelectorAll(".line-exist");
  for (let j = 0; j < word.length; j++) {
    arr[j].innerText = "";
    output[j] = "";
  }
  document.querySelector("#result").innerHTML = "Result Here";
  chance = 5;
  let p = document.getElementById("chance");
  let text = p.innerText;
  text = text.slice(0, text.length - 2);
  p.innerText = `${text} ${chance}`;
  startGame();
}
