let user = ['O', 'X'];
let tiles = new Array(9).fill(200);
let tileID;
let temp;
let flag = 0;
let counter = 0;
let leftContainerInner = document.querySelector("#leftContainerInner");
let rightContainerInner = document.querySelector("#rightContainerInner");

function set(elem, index) {
  if (elem.innerHTML == '<div>O</div>' || elem.innerHTML == '<div>X</div>') {
    return;
  }
  elem.innerHTML = `<div>${user[0]}</div>`;
  if (user[0] == 'O') {
    tiles[index] = 0;
    leftContainerInner.classList.remove("userActive");
    rightContainerInner.classList.add("userActive");
  } else {
    tiles[index] = 1;
    leftContainerInner.classList.add("userActive");
    rightContainerInner.classList.remove("userActive");
  }
  switch (index) {
    case 0:
      checkC1(user[0]);
      checkR1(user[0]);
      checkX1(user[0]);
      break;
    case 1:
      checkC2(user[0]);
      checkR1(user[0]);
      break;
    case 2:
      checkC3(user[0]);
      checkR1(user[0]);
      checkX2(user[0]);
      break;
    case 3:
      checkC1(user[0]);
      checkR2(user[0]);
      break;
    case 4:
      checkC2(user[0]);
      checkR2(user[0]);
      checkX1(user[0]);
      checkX2(user[0]);
      break;
    case 5:
      checkC3(user[0]);
      checkR2(user[0]);
      break;
    case 6:
      checkC1(user[0]);
      checkR3(user[0]);
      checkX2(user[0]);
      break;
    case 7:
      checkC2(user[0]);
      checkR3(user[0]);
      break;
    case 8:
      checkC3(user[0]);
      checkR3(user[0]);
      checkX1(user[0]);
      break;
    default:
      console.log("Invalid index was passed.");
  }
  temp = user[0];
  user[0] = user[1];
  user[1] = temp;
  counter++;
  if (counter == 9) {
    draw();
  }

}

function checkC1(user) {
  if ([0, 3].includes((tiles[0] + tiles[3] + tiles[6]))) {
    won(user, 'c1');
  }
}

function checkC2(user) {
  if ([0, 3].includes((tiles[1] + tiles[4] + tiles[7]))) {
    won(user, 'c2');
  }
}

function checkC3(user) {
  if ([0, 3].includes((tiles[2] + tiles[5] + tiles[8]))) {
    won(user, 'c3');
  }
}

function checkR1(user) {
  if ([0, 3].includes((tiles[0] + tiles[1] + tiles[2]))) {
    won(user, 'r1');
  }
}

function checkR2(user) {
  if ([0, 3].includes((tiles[3] + tiles[4] + tiles[5]))) {
    won(user, 'r2');
  }
}

function checkR3(user) {
  if ([0, 3].includes((tiles[6] + tiles[7] + tiles[8]))) {
    won(user, 'r3');
  }
}

function checkX1(user) {
  if ([0, 3].includes((tiles[0] + tiles[4] + tiles[8]))) {
    won(user, 'x1');
  }
}

function checkX2(user) {
  if ([0, 3].includes((tiles[2] + tiles[4] + tiles[6]))) {
    won(user, 'x2');
  }
}

function won(user) {
  document.querySelector("#userNameHolder").innerHTML = user;
  togglePopup();
}

function draw() {
  document.querySelector("#wrapper").innerHTML = 'Draw.';
  togglePopup();
}

function togglePopup() {
  document.querySelector("#wonPopup").classList.toggle("popupActive");
}

function restartGame() {
  counter = 0;
  tiles.fill(200);
  user[0] = 'O';
  user[1] = 'X';
  let tileDivs = document.getElementsByClassName('tiles');
  let i;
  for (i = 0; i < tileDivs.length; i++) {
    tileDivs[i].innerHTML = '<div></div>';
  }
  togglePopup();
}