// This is to move the player around the screen
document.addEventListener("keydown",(event) =>{
    event.preventDefault();
    console.log(event);
    playerMove(event.key)
})

const playerElement = document.getElementById("player")
const player = new Player;
console.log(player);

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

const obstacle = new Obstacle;




