//canvas-props
let canvas = document.getElementById('Me-Canvas');
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.border = "solid black"

let twod = canvas.getContext("2d");
    twod.fillStyle = "darkgreen"
    twod.strokeRect(0, 0, canvas.width, canvas.height)
    twod.fillRect(0, 0, canvas.width, canvas.height)

let speed = 160 // speed of the snake

//score
let score = 0
let highscore = 0

//snake
let snake = [{ x: 150, y: 150 }, { x: 140, y: 150 },
            { x: 130, y: 150 }, { x: 120, y: 150 },
            { x: 110, y: 150 },];
let dx = 10
let dy = 0

//draw snake
function drawSnake() {
    snake.forEach(changeColor);   
}


//clearCanvas
function clearCanvas() { 
    twod.fillStyle = bg.value;
    twod.strokeStyle = "black";
    twod.fillRect(0, 0, canvas.width, canvas.height); 
    twod.strokeRect(0, 0, canvas.width, canvas.height);
}
const musicBut = document.getElementById('music');

let musics = document.getElementById('musicbtn')

musics.addEventListener('click', music);
let musicOF = false
function music() {
    if (musicOF == false) {
        musics.innerText = "Music On"
        musicBut.volume = 0.5;
        musicBut.play();
        musicOF = true;
    }
    else {
        musics.innerText = "Music Off"
        musicBut.pause();
        musicOF = false;
    }
}


//main
let play = document.getElementById('play');
play.addEventListener('click', main);

function main() {
    setTimeout(function onTick() {
        play.removeEventListener('click', main)
        changingDirection = false;
        clearCanvas(); 
        drawFood();
        advanceSnake(); 
        drawSnake(); 
        if (didGameEnd())
        return 
        main();
    }, speed)
}
createFood();



//change-direction
document.addEventListener("keydown", changeDirection)
function changeDirection(event) {
    
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    

    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
    if (changingDirection) return;
    changingDirection = true;
    
}


function randomTen() { 
    return Math.round((Math.random() * (290 - 0) + 0) / 10) * 10;
}
// create the food
function createFood() {
    foodX = randomTen(0, twod.width - 10); 
    foodY = randomTen(0, twod.height - 10);
    snake.forEach(function isFoodOnSnake(part) {
    const foodIsOnSnake = part.x == foodX && part.y == foodY;
    if (foodIsOnSnake){
     createFood();
     drawFood();
    }
    });
};
//food on field
function drawFood() { 
    twod.fillStyle = 'red'; 
    twod.strokestyle = 'darkred'; 
    twod.fillRect(foodX, foodY, 10, 10); 
    twod.strokeRect(foodX, foodY, 10, 10); 
}
//difficulty
let difficulty = document.getElementById('difficulty');


// movement of the snake
function advanceSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    const didEatFood = snake[0].x === foodX && snake[0].y === foodY; 
    if (didEatFood) {
        if (difficulty.value =="easy"){ 
            speed -= 1
        }
        if (difficulty.value == "normal"){
            speed -= 5
        }
        if (difficulty.value =="pro") {
            speed -= 10
        }
        score += 10; 
        document.getElementById('score').innerHTML = score + ' '+ "score";
        createFood()
        drawFood();
    } 
    else { 
            snake.forEach(idk => {
                if (idk.x < 0) {
                    idk.x = 290;
                }
            }); 
            snake.forEach(idk => {
                if (idk.x > 290) {
                    idk.x = 0;
                }
            }); 
            snake.forEach(idk => {
                if (idk.y < 0) {
                    idk.y = 290;
                }
            }); 
            snake.forEach(idk => {
                if (idk.y > 290) {
                    idk.y = 0;
                }
            });
            snake.pop();
            
        }
    }

function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y
        if (didCollide){
            if (score > highscore) {
                document.getElementById('high-score').innerHTML = score + ' ' + 'highscore'
                highscore = score
                let winner = prompt('You got the highscore! Enter your username');
                let playagain = alert('Insert coin to play again')
                playagain;
                let ol = document.getElementById('list-hs');
                let li = document.createElement('li');
                ol.append(li)
                li.append(winner," ",highscore, " ", "score");
            }
        return didCollide
        }
        
        // const hitLeftWall = snake[0].x < 0; 
        // const hitRightWall = snake[0].x > canvas.width - 10; 
        // const hitToptWall = snake[0].y < 0; 
        // const hitBottomWall = snake[0].y > canvas.height - 10;
        // return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
    }
    
}
   

let select = document.getElementById('head');
    select.addEventListener('change',drawSnake);
    select.value = '#00ff00'


function changeColor(snakePart) {
    let grd = twod.createLinearGradient(snake[0].x, snake[0].y, snake[snake.length - 1].x, snake[snake.length - 1].y);
        grd.addColorStop(0, select.value);
        grd.addColorStop(1, 'transparent');
    twod.fillStyle = grd;
    twod.strokeStyle = 'black';
    twod.fillRect(snakePart.x, snakePart.y, 10, 10); 
    twod.strokeRect(snakePart.x, snakePart.y, 10, 10);
    
    // if (select.value) {
    //     twod.fillStyle = select.value;
    //     twod.strokeStyle = 'black';
    //     twod.fillRect(snakePart.x, snakePart.y, 10, 10); 
    //     twod.strokeRect(snakePart.x, snakePart.y, 10, 10);
    // }

    
};
//background-color canvas
let bg = document.getElementById('body');
    bg.addEventListener('change', backgroundcolor);
    bg.value = '#006400'

function backgroundcolor() {
    twod.fillStyle = bg.value;
    twod.fillRect(0, 0, canvas.width, canvas.height)
    drawSnake();
}
//reset-button
let reset = document.getElementById('reset');
reset.addEventListener('click', resetGame)

function resetGame() { 
    snake = [{ x: 150, y: 150 }, { x: 140, y: 150 },
    { x: 130, y: 150 }, { x: 120, y: 150 },
    { x: 110, y: 150 },];
    clearCanvas();
    drawSnake();
    play.addEventListener('click', main);
    score = 0
    document.getElementById('score').innerHTML = score + ' ' + "score";

}

drawSnake();


