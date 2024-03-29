const game = () => {
    let pScore = 0;
    let cScore = 0;


    //start the Game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn")
        });
    };

    //playMatch
    let play;
    play.addEventListener("click", playGame);

    function playGame (event) {
        play = document.getElementsByClassName(this);
        console.log(play);
    }

    playGame();
    
    const computerOptions = ["rock", "paper", "scissors"];
    const computerNumber = Math.floor(Math.random() * 3);
    console.log(computerNumber);
    const computerChoice = computerOptions[computerNumber];
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //computer-options
        

        options.forEach(option => {
            option.addEventListener("click", function () {
                //computer choice
                
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);
            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands (playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            //update Text
            const winner = document.querySelector('.winner');
            //check for a tie
                winner.textContent = 'it is a tie';         
        }
        //check for rock
        if (playerChoice === 'rock') {

            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                console.log("text"+winner);
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }

    }

    //is call the inner function
    startGame();
    playMatch();
};

//start the game function
game();