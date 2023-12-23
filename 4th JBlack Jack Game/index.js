// let firstCard = getRandomFunction()
// let secondCard = getRandomFunction()
// let cards=[firstCard ,secondCard]// array
let cards=[]
// let sum = firstCard + secondCard
let sum=0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
//class object creation 
let player={
    Name:"CHETAN",
    Chips:234
}
let playerEl=document.getElementById("player1")
playerEl.textContent = player.Name + " : $"+player.Chips
// 1. Create a function, getRandomCard(), that always returns the number 5
  function getRandomFunction()
  {
       // if 1     -> return 11
    // if 11-13 -> return 10
   // HERE WE USE THE RANDOM FUNCTION  
   let randomNumber=  Math.floor(Math.random()*13)
   if (randomNumber>10)
   {
    return 10
   }else if (randomNumber===1)//to check equality
   {
    return 11
   }

   else{
    return randomNumber 
   }

  }
// Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive=true
    let firstCard = getRandomFunction()
     let secondCard = getRandomFunction()
      cards=[firstCard ,secondCard]
     sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    //render out first carda and second card 
    cardsEl.textContent = "Cards: " 
    
    for (let i=0;i<cards.length;i++)//array
    {
       cardsEl.textContent +=cards[i]+" "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive==true && hasBlackJack==false)
    {
    let card = getRandomFunction()
    sum += card
    cards.push(card)
    renderGame()
    }
}



// arrays are the order list 