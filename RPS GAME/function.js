const game = ()=> {
    let pScore = 0
    let cScore = 0

    // start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeout");
            match.classList.add("fadeIn");
        });
    };

// play match
const playMatch = () => {
    const options = documeny.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector("computer-hand");

    // computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(Option=>{
options.addEventListener("click", function(){
    // computer choice
    const computerNumber = Math.floor(Math.random()*3);
    const computerChoise = computerNumber[computerNumber]
    console.log(computerChoise);
});
    });

    

    console.log(computerNumber);
}

    // call all the inner functions
    startGame();
};
// start the game function
game();