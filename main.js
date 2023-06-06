window.onload = () => {



class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");


        }

}




class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.speed = 1;

}


    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
}



class Obstacle {


}

class FinishLine {

}

}