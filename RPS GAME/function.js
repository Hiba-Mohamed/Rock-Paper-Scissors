
let pscore = 0;
let cscore = 0;
const game = () =>
{
  const playBtn     = document.querySelector(".start-button");
  const introScreen = document.querySelector(".intro");
  const match       = document.querySelector(".match"); 

    

    // start the game
    const startGame = () => 
    {
        playBtn.addEventListener ('click', () =>
        {
          introScreen.classList.add("fadeOut");
          match.classList.add("fadeIn");
        });
    };
    // playing a match
    startGame();
    const playMatch = () =>
     {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
      hands.forEach(hand => {
        hand.addEventListener("animationend", function () {
          this.style.animation = "";
        });
      });

      // computer options
      const computerOptions = ['rock', 'paper', 'scissors'];
      options.forEach(option=>
         {
          option.addEventListener("click", function ()  
          {
            const computerNumber =Math.floor( Math.random()*3);
            const computerChoice = computerOptions[computerNumber];
           
            setTimeout( ()=> 
            {
              compareHands(this.textContent,computerChoice);
              // update images after two seconds of player selecting a choice
              playerHand.src = `./assets/${this.textContent}.png`;
              computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000);

             // set images to rock before updating them
              playerHand.src = `./assets/rock.png`;
              computerHand.src = `./assets/rock.png`;
             
              // animating the rock image before revealing the player and computer choices.
              playerHand.style.animation = "shakePlayer 2s ease";
              computerHand.style.animation = "shakeComputer 2s ease";
  

           }
                                  )
         }           )

     }
     
     playMatch();
     
    
};

const updateScore = () =>
 {
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  // Linking the scores to the HTML inner text
  playerScore.textContent = pscore;
  computerScore.textContent = cscore; 
}

const compareHands = (playerChoice, computerChoice) => 
{ 

  const winner = document.querySelector(".winner");
  if (playerChoice === computerChoice)
    {
      winner.textContent = "it is a tie!"
    }

    // adding else fixed score and winner display issues
  else
    {
      if(playerChoice === 'rock')
    {
      if (computerChoice === 'scissors')
       {
        winner.textContent = 'Player Wins';
        pscore++;
        updateScore();
       }
       else 
       {
        winner.textContent = 'Computer Wins'
        cscore++;
        updateScore();
       }
    }
    if(playerChoice === 'paper')
     {
      if(computerChoice === 'scissors')
       {
        winner.textContent = 'Computer Wins';
        cscore++;
        updateScore();
       }
       else
        {
          winner.textContent ='Player Wins';
          pscore++;
          updateScore();
        }
     }
     if (playerChoice === 'scissors')
      {
        if (computerChoice === 'rock')
         {
          winner.textContent = 'computer Wins';
          cscore++;
          updateScore();
         }
         else
         {
          winner.textContent = 'Player Wins';
          pscore++;
          updateScore();
         }
      }

    }   
      
}

game();


