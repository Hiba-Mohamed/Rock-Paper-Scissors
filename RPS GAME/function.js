const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");

const game = () =>
    {
         let pscore = 0;
         let cscore = 0;

         const startGame = () => 
             {
                playBtn.addEventListener
                ('click', 
                () => {
                        introScreen.classList.add("fadeOut");
                      }
                );
             };

            //  call all the inner functions
                startGame();
    };

    // call the game function
    game(); 