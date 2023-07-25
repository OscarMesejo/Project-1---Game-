class Player {
    constructor(x, y){
        this.x = x;
        this.y = y;  
}

// this puts limits in the seaBackground div boundaries
checkBoundaries(){
    //Create variables to simplify the code
const containerWidth = document.getElementById("seaBackground").offsetWidth;
const playerWidth = document.getElementById("player").offsetWidth;
const containerHeigth = document.getElementById("seaBackground").offsetHeight;
const playerHeigth = document.getElementById("player").offsetHeight;


    if(this.x < 0){
        this.x = 0;
    } else if(this.y < 0){
        this.y = 0;
    }else if (this.x > containerWidth - playerWidth){
        this.x = containerWidth - playerWidth;
    }else if(this.y > containerHeigth - playerHeigth){
        this.y = containerHeigth - playerHeigth;
    }
}

}

