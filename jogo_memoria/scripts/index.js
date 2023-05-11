const cards = document.querySelectorAll(".card");


// variaveis - booleanos e numeros
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let movements = 0;
let winContador = 0;



// funcoes 
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkForMatch();
}

//Conferindo se é igual
function checkForMatch() {
  // condicionais - if e else
  if (firstCard.dataset.nome !== secondCard.dataset.nome) {
    movements++;
  }
  document.getElementById("movimentos").innerHTML = `${movements}`;

  if (firstCard.dataset.nome === secondCard.dataset.nome) {
    winContador++;
    disableCards();
    //ALTERAÇÃO* Confere se o "winContador" é igual a "6", que é o número máximo de vitórias que pode haver no jogo!
    if (winContador == 6) {
      setTimeout(() => {
        document.querySelector("#vitoria").style.display = "block";
        document.querySelector("#movimentosvitoria").innerHTML = movements;
      }, 1000);
    }
    return;
  }
  unflipCards();
}

//Desabilitando o clique nas cartas viradas
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

//Virando as cartas erradas de volta
function unflipCards() {
  lockBoard = true;
  // arrow function 
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 900);
}

// resetando os cards 
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//Embaralhando cartas (IIFE) Vai ser executada assim que for lida
(function shuffle() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));



