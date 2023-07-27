class Game {
    constructor(){
        this.gameScreen = document.getElementById("game-screen");
        this.width = '';
        this.height = '';
        this.obstacles = [];
        this.rewards = [];
        this.score = 0;
        this.timer = 30;
        this.gameOver = false;
        this.gameStarted = false;
       
    }
}

