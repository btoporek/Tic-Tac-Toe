/*
Using any of the tools you’ve worked with so far, create a game of Tic-Tac-Toe.
Create a Tic-Tac-Toe game grid using your HTML element of choice. 
When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
A heading should say whether it is X’s or O’s turn and change with each move made.
A button should be available to clear the grid and restart the game.
When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.
*/

/* TO-DO:
1. on click X or O appears AND heading changes to stating next player's turn
3. button to clear board and restart (refresh?)
4. When three in a row, declare winner OR if board is full declare draw with bootstrap alert or similar component
*/

// assigned variables to each box in game grid
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

// assigned variables to access other elements within functions
let declaration = document.getElementById("declare-turn");
let boxes = document.querySelectorAll("#boxes div");
let turnOrder = 0;
let winnerAlert = document.createElement("p");
let drawAlert = document.createElement("p");

// use jquery to add event listener to restart button to reset the game/reload the page
$("#restart").on("click", () => {
  location.reload();
});

// for loop to run through each click entered to advance turns and enter "X" or "O" depending on turn; includes calling determineWinner function
for (let i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    if (this.innerHTML !== "X" && this.innerHTML !== "O") {
      if (turnOrder % 2 === 0) {
        console.log(turnOrder);
        this.innerHTML = "X";
        declaration.innerHTML = "O Turn";
        turnOrder += 1;
        //console.log(this.innerHTML);
      } else {
        console.log(turnOrder);
        this.innerHTML = "O";
        declaration.innerHTML = "X Turn";
        turnOrder += 1;
      }
    }
    determineWinner();
  };
}

// function that checkes for three in a row, with nested function to check for all spaces filled/draw game (if first function does not declare winner)
let determineWinner = () => {
  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  ) {
    // if winning boxes are 1, 2, 3 then bootstrap alert declaring winner pops up with confetti
    declaration.style.display = "none";
    winnerAlert.innerHTML = `<center> <p class="alert alert-primary" style="color: black; font-weight: bold; font-size: 40px">PLAYER ${box1.innerHTML} WINS! </p></center>`;
    document.getElementById("myDiv").appendChild(winnerAlert);
    // confetti celebration from https://www.kirilv.com/canvas-confetti/
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  } else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  ) {
    // if winning boxes are 1, 4, 7 then bootstrap alert declaring winner pops up with confetti
    declaration.style.display = "none";
    winnerAlert.innerHTML = `<center> <p class="alert alert-primary" style="color: black; font-weight: bold; font-size: 40px">PLAYER ${box1.innerHTML} WINS! </p></center>`;
    document.getElementById("myDiv").appendChild(winnerAlert);
    // confetti celebration from https://www.kirilv.com/canvas-confetti/
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  } else if (
    box2.innerHTML !== "" &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  ) {
    // if winning boxes are 2, 5, 8 then bootstrap alert declaring winner pops up with confetti
    declaration.style.display = "none";
    winnerAlert.innerHTML = `<center> <p class="alert alert-primary" style="color: black; font-weight: bold; font-size: 40px">PLAYER ${box2.innerHTML} WINS! </p></center> `;
    document.getElementById("myDiv").appendChild(winnerAlert);
    // confetti celebration from https://www.kirilv.com/canvas-confetti/
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  } else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  ) {
    // if winning boxes are 3, 6, 9 then bootstrap alert declaring winner pops up with confetti
    declaration.style.display = "none";
    winnerAlert.innerHTML = `<center> <p class="alert alert-primary" style="color: black; font-weight: bold; font-size: 40px">PLAYER ${box3.innerHTML} WINS! </p></center> `;
    document.getElementById("myDiv").appendChild(winnerAlert);
    // confetti celebration from https://www.kirilv.com/canvas-confetti/
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  } else if (
    box4.innerHTML !== "" &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  ) {
    // if winning boxes are 4, 5, 6 then bootstrap alert declaring winner pops up with confetti
    declaration.style.display = "none";
    winnerAlert.innerHTML = `<center> <p class="alert alert-primary" style="color: black; font-weight: bold; font-size: 40px">PLAYER ${box4.innerHTML} WINS! </p></center> `;
    document.getElementById("myDiv").appendChild(winnerAlert);
    // confetti celebration from https://www.kirilv.com/canvas-confetti/
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  } else if (
    box7.innerHTML !== "" &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  ) {
    // if winning boxes are 7, 8, 9 then bootstrap alert declaring winner pops up with confetti
    declaration.style.display = "none";
    winnerAlert.innerHTML = `<center> <p class="alert alert-primary" style="color: black; font-weight: bold; font-size: 40px">PLAYER ${box7.innerHTML} WINS! </p></center> `;
    document.getElementById("myDiv").appendChild(winnerAlert);
    // confetti celebration from https://www.kirilv.com/canvas-confetti/
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  } else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  ) {
    // if winning boxes are 1, 5, 9 then bootstrap alert declaring winner pops up with confetti
    declaration.style.display = "none";
    winnerAlert.innerHTML = `<center> <p class="alert alert-primary" style="color: black; font-weight: bold; font-size: 40px">PLAYER ${box1.innerHTML} WINS! </p></center> `;
    document.getElementById("myDiv").appendChild(winnerAlert);
    // confetti celebration from https://www.kirilv.com/canvas-confetti/
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  } else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  ) {
    // if winning boxes are 3, 5, 7 then bootstrap alert declaring winner pops up with confetti
    declaration.style.display = "none";
    winnerAlert.innerHTML = `<center> <p class="alert alert-primary" style="color: black; font-weight: bold; font-size: 40px">PLAYER ${box3.innerHTML} WINS! </p></center> `;
    document.getElementById("myDiv").appendChild(winnerAlert);
    // confetti celebration from https://www.kirilv.com/canvas-confetti/
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  } else {
    function drawGame() {
      if (
        box1.innerHTML !== "" &&
        box2.innerHTML !== "" &&
        box3.innerHTML !== "" &&
        box4.innerHTML !== "" &&
        box5.innerHTML !== "" &&
        box6.innerHTML !== "" &&
        box7.innerHTML !== "" &&
        box8.innerHTML !== "" &&
        box9.innerHTML !== ""
      ) {
        declaration.style.display = "none";
        drawAlert.innerHTML = `<center> <p class="alert alert-danger" style="color: black; font-weight: bold; font-size: 40px">DRAW. No Winner! </p></center> `;
        document.getElementById("myDiv").appendChild(drawAlert);
      }
    }
    drawGame();
  }
};
