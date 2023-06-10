window.onload = () => {

  class Player {
    constructor(game) {
      this.game = game;
      this.canvas = this.game.canvas;
      this.context = this.game.context;
      this.width = 30;
      this.height = 30;
      this.x = 335;
      this.y = 285;
      this.isDragging = false;
  
      this.canvas.addEventListener("mousemove", (event) => {
        this.handleMouseMove(event);
      });
  
      this.canvas.addEventListener("mouseout", () => {
        this.handleMouseOut();
      });
    }
  
    draw() {
      this.context.fillStyle = "red";
      this.context.fillRect(this.x, this.y, this.width, this.height);
    }
  
    clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    handleMouseMove(event) {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
  
      if (
        mouseX >= this.x &&
        mouseX <= this.x + this.width &&
        mouseY >= this.y &&
        mouseY <= this.y + this.height
      ) {
        this.isDragging = true;
      } else {
        this.isDragging = false;
      }
  
      if (this.isDragging) {
        this.x = mouseX - this.width / 2;
        this.y = mouseY - this.height / 2;
      }
  
      this.clear();
      this.draw();
    }
  
    handleMouseOut() {
      this.isDragging = false;
      this.x = 335;
      this.y = 285;
      this.clear();
      this.draw();
    }
  }
  
  class Game {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.context = this.canvas.getContext("2d");
      this.canvas.style.border = "2px solid black";
      this.player = new Player(this);
      this.player.draw();
  
      this.canvas.addEventListener("mouseout", () => {
        this.player.handleMouseOut();
      });
    }
  }
  
  // Crear una instancia del juego
  const game = new Game("gameCanvas");
}