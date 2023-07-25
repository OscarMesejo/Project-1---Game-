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
    const seaBackground = document.getElementById("seaBackground")
    const obstacle = document.createElement("div");
    seaBackground.appendChild(obstacle);
    obstacle.className = "obstacle";
    obstacle.style.top = 0;
    obstacle.style.left = Math.random() * seaBackground.offsetWidth + "px"
    newGame.obstacles.push(obstacle);
    

    
    // obstacleElement.style.left = `${obstacle}px`
    // obstacleElement.style.top = `${obstacle}px`

    
}


setInterval(() => {
    createNewObstacle()
    moveObstacles()
    removeObstacles()
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






