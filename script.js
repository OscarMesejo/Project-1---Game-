// This is to move the player around the screen
document.addEventListener("keydown", (event) => {
    event.preventDefault();
    console.log(event);
    playerMove(event.key)
})

const startButtonElement = document.getElementById("start-button")

//This is to start and reload the game

startButtonElement.addEventListener('click',()=>{
    console.log("startbuttonpress");
    newGame.gameStarted = true
    document.getElementById("game-intro").style.display = 'none';
})

const restartButtonElement = document.getElementById("restart-button")

restartButtonElement.addEventListener('click',()=>{
    console.log("restartbuttonpress");
    location.reload()
})
//This creates a new game
const newGame = new Game;

const playerElement = document.getElementById("player")
const player = new Player(350, 350);
// console.log(player);

// This function is going to get the key pressed as an argument and move the player accordingly
function playerMove(keyPressed) {
    switch (keyPressed) {
        case "ArrowUp":
            player.y -= 10;
            break;
        case "ArrowDown":
            player.y += 10;
            break;
        case "ArrowRight":
            player.x += 10;
            break;
        case "ArrowLeft":
            player.x -= 10;
            break;
    }
    player.checkBoundaries()

    playerElement.style.left = `${player.x}px`
    playerElement.style.top = `${player.y}px`
}
playerMove()

const obstacleElement = document.getElementById("obstacle")
// const obstacle = new Obstacle;
// console.log(obstacle);

function createNewObstacle() {
    console.log("create new obstacle");
    const seaBackground = document.getElementById("seaBackground");
    const obstacle = document.createElement("div");
    seaBackground.appendChild(obstacle);
    obstacle.className = "obstacle";

    // Random to add different images
    obstacle.style.top = 0;
    obstacle.style.left = Math.random() * (seaBackground.offsetWidth - obstacle.offsetWidth) + "px"

    const imgArray = ['url("images/yellowfish.png")']
    const randomNumber = Math.floor(Math.random() * ((imgArray.length - 1)))

    obstacle.style.backgroundImage = imgArray[randomNumber]
    newGame.obstacles.push(obstacle);


}

// Creat function createNewReward for rewards
function createNewReward() {
    console.log("create new reward");
    const seaBackground = document.getElementById("seaBackground");
    const reward = document.createElement("div");
    seaBackground.appendChild(reward);
    reward.className = "reward";

// Random to add different images

    reward.style.top = 0;
    reward.style.left = Math.random() * (seaBackground.offsetWidth - reward.offsetWidth) + "px"

    const imgArray = ['url("images/plasticbottle.png")','url("/images/plastic-bag.png")']
    const randomNumber = Math.floor(Math.random()  * ((imgArray.length)))
    console.log('RANDOM NUMBER ',randomNumber);
    reward.style.backgroundImage = imgArray[randomNumber]
    newGame.rewards.push(reward);
}

// setInterval to apply the function every second

setInterval(() => {
    if (newGame.gameOver === false && newGame.gameStarted === true){
        createNewObstacle()
        createNewReward()
        moveObstacles()
        moveRewards()
        removeObstacles()
        removeRewards()
        collissionDetectionForSquares()
        document.getElementById("scoreCounter").innerHTML = newGame.score;
        updateTimer()
    }
    
}, 1000);

function moveObstacles() {
    newGame.obstacles.forEach((obstacle) => {
        // console.log(obstacle.offsetTop);
        const obstaclePosition = obstacle.offsetTop + 50;
        obstacle.style.top = `${obstaclePosition}px`

    })
}
function moveRewards() {
    newGame.rewards.forEach((reward) => {
        const rewardPosition = reward.offsetTop + 50;
        reward.style.top = `${rewardPosition}px`
    })
}

function removeObstacles() {
    newGame.obstacles.forEach((obstacle) => {
        const obstaclePosition = obstacle.offsetTop;

        const seaBackground = document.getElementById("seaBackground");
        if (obstaclePosition > seaBackground.offsetHeight - obstacle.offsetHeight) {
            obstacle.remove() // This makes desapeare the obstacles
        
        }
    })
}
function removeRewards() {
    newGame.rewards.forEach((reward) => {
        const rewardPosition = reward.offsetTop;

        const seaBackground = document.getElementById("seaBackground");
        if (rewardPosition > seaBackground.offsetHeight - reward.offsetHeight) {
            reward.remove()
        }
    })
}

function updateTimer(){
    document.getElementById("timerCounter").innerHTML = newGame.timer;
    newGame.timer -=1;
   
     if(newGame.timer < 0){
        newGame.gameOver = true;
        console.log("GAME OVER");
       document.getElementById("game-end").style.display = "block";
    
    }
}

function collissionDetectionForSquares() {
    newGame.obstacles.forEach((obstacle) => { //This is to call the array

        const playerPosition = playerElement.getBoundingClientRect();
        const obstaclePosition = obstacle.getBoundingClientRect();

        if (
            playerPosition.x < obstaclePosition.x + obstaclePosition.width &&
            playerPosition.x + playerPosition.width > obstaclePosition.x &&
            playerPosition.y < obstaclePosition.y + obstaclePosition.height &&
            playerPosition.y + playerPosition.height > obstaclePosition.y
        ) {
            console.log('COLLISION DETECTED');

            //This will be executed when there is a collussion

            if (newGame.score > 0) {
                newGame.score -= 15;
            } //This reduces the score

            obstacle.remove() //When collussion obstacle desapeare
        }
    })

    newGame.rewards.forEach((reward) => { //This is to call the array

        const playerPosition = playerElement.getBoundingClientRect();
        const rewardPosition = reward.getBoundingClientRect();

        if (
            playerPosition.x < rewardPosition.x + rewardPosition.width &&
            playerPosition.x + playerPosition.width > rewardPosition.x &&
            playerPosition.y < rewardPosition.y + rewardPosition.height &&
            playerPosition.y + playerPosition.height > rewardPosition.y
        ) {
            console.log('COLLISION DETECTED');

            //This will be executed when there is a collussion
            newGame.score += 30;

            reward.remove() //When collussion obstacle desapeare
        }
    })
}






