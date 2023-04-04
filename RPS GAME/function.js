
const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");

// Event listener should be on this element as soon as DOM loads so users can interact with it
// (I think at least... If there is reasoning given in the tutorial then feel free to follow that)
playBtn.addEventListener('click', () =>
    {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
    }
);

// We can treat the entire game object as a callback here such that clicking 'Let's Play' 
// Will trigger the entire game to start... You'll probably need a while loop or something
// to keep it going though
const game = () =>
{
    let pscore = 0;
    let cscore = 0;

    const startGame = () => 
    {
        console.log('starting the game', pscore, cscore);
    };

    //  call all the inner functions
    startGame();
};

// call the game function
game(); 