const game = () =>
{
    let pscore = 0;
    let cscore = 0;

    // start the game
    const startGame = () => 
    {
      const playBtn     = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match       = document.querySelector(".match"); 

        playBtn.addEventListener ('click', () =>
        {
          introScreen.classList.add("fadeOut");
          match.classList.add("fadeIn");
        });
    };
  
    const playMatch = () =>
     {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
      hands.addEventListener("animationed", function ()
      {
        this.style.animation = "";
      })
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
              // update images
              playerHand.src = `./assets/${this.textContent}.png`;
              computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000);

            compareHands(this.textContent,computerChoice);
            // update images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;

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
 }
const compareHands = (playerChoice, computerChoice) => 
{ 
  const winner = document.querySelector(".winner");
  if (playerChoice === computerChoice)
    {
      winner.textContent = "it is a tie!"
    }
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
          winner.textContent = 'Player Wins';
          pscore++;
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



// // declaring the constants from the HTML document
// const playBtn     = document.querySelector(".intro button");
// const introScreen = document.querySelector(".intro");
// const match       = document.querySelector(".match");

// // Event listener should be on this element as soon as DOM loads so users can interact with it
// // (I think at least... If there is reasoning given in the tutorial then feel free to follow that)

// playBtn.addEventListener('click', () =>
//     {
//         introScreen.classList.add("fadeOut");
//         match.classList.add("fadeIn");
//     }
// );

// // We can treat the entire game object as a callback here such that clicking 'Let's Play' 
// // Will trigger the entire game to start... You'll probably need a while loop or something
// // to keep it going though
// const game = () =>
// {
//     let pscore = 0;
//     let cscore = 0;

//     // const startGame = () => 
//     // {
//     //     console.log('starting the game', pscore, cscore);
//     // };

//     //  call all the inner functions
//     // startGame();
// };

// // call the game function
// game(); 