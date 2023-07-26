// This is to move the player around the screen
document.addEventListener("keydown",(event) =>{
    event.preventDefault();
    console.log(event);
    playerMove(event.key)
})
//This creates a new game
const newGame = new Game;

const playerElement = document.getElementById("player")
const player = new Player(325,350);
console.log(player);

// This function is going to get the key pressed as an argument and move the player accordingly
function playerMove(keyPressed){
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

function createNewObstacle(){
    console.log("create new obstacle");
    const seaBackground = document.getElementById("seaBackground");
    const obstacle = document.createElement("div");
    seaBackground.appendChild(obstacle);
    obstacle.className = "obstacle";

    // Random para añadir distintas imágenes
    obstacle.style.top = 0;
    obstacle.style.left = Math.random() * seaBackground.offsetWidth + "px"

    const imgArray = ['url("/images/pez.png")', 'url("/images/plastic-bag.png")', 'url("/images/plastic-bag.png")']
    const randomNumber = Math.floor(Math.random() * ((imgArray.length - 1)))

    obstacle.style.backgroundImage = imgArray[randomNumber]
    newGame.obstacles.push(obstacle);
    
// 
    
    // obstacleElement.style.left = `${obstacle}px`
    // obstacleElement.style.top = `${obstacle}px`

    
}

// crear funcion createNewReward para rewards
function createNewReward(){
    console.log("create new reward");
    const seaBackground = document.getElementById("seaBackground");
    const reward = document.createElement("div");
    seaBackground.appendChild(reward);
    reward.className = "reward";
    reward.style.top = 0;
    reward.style.left = Math.random() * seaBackground.offsetWidth + "px"

    const imgArray = ['url("/images/plastic-bag.png")', 'url("/images/plastic-bag.png")']
    const randomNumber = Math.floor(Math.random() * ((imgArray.length - 1)))
    reward.style.backgroundImage = imgArray[randomNumber]
    newGame.reward.push(reward);
}


setInterval(() => {
    createNewObstacle()
    moveObstacles()
    removeObstacles()
    collissionDetectionForSquares()
    createNewReward()
}, 1000);

function moveObstacles(){
    newGame.obstacles.forEach((obstacle)=>{
        // console.log(obstacle.offsetTop);
        const obstaclePosition = obstacle.offsetTop+50;
        obstacle.style.top = `${obstaclePosition}px`
        
    })

}

function removeObstacles(){
    newGame.obstacles.forEach((obstacle)=>{
        const obstaclePosition = obstacle.offsetTop;
        
        const seaBackground = document.getElementById("seaBackground");
        if(obstaclePosition > seaBackground.offsetHeight - obstacle.offsetHeight){
            obstacle.remove() // This makes desapeare the obstacles
            // newGame.obstacles.pop()
        }
    })

}

function collissionDetectionForSquares(){
    newGame.obstacles.forEach((obstacle)=>{ //This is to call the array

        const playerPosition = playerElement.getBoundingClientRect();
        const obstaclePosition = obstacle.getBoundingClientRect();
    
        if(
            playerPosition.x < obstaclePosition.x + obstaclePosition.width &&
            playerPosition.x + playerPosition.width > obstaclePosition.x &&
            playerPosition.y < obstaclePosition.y + obstaclePosition.height &&
            playerPosition.y + playerPosition.height > obstaclePosition.y
        ){
            console.log('COLLISION DETECTED');

            //This will be executed when there is a collussion

            newGame.score.obstacle === -20;
            newGame.score.reward === 50;

        


            obstacle.remove() //When collussion obstacle desapeare
        }
    })
}






