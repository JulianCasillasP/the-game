window.onload = () => {

class Game {
    constructor(canvasId) {
      // Obtener el canvas y el contexto
      this.canvas = document.getElementById(canvasId);
      this.context = this.canvas.getContext("2d");
      this.canvas.width = 700;
      this.canvas.height = 600;
      this.canvas.style.border = "2px solid black";
  
      // Tamaño y posición del rectángulo
      this.rectangleWidth = 30;
      this.rectangleHeight = 30;
      this.startingX = 335;
      this.startingY = 285;
      this.rectangleX = this.startingX;
      this.rectangleY = this.startingY;
  
      // Variable para indicar si el rectángulo se debe unir al cursor
      this.isDragging = false;
  
      // Registrar los eventos mousemove y mouseout en el canvas
      this.canvas.addEventListener("mousemove", (event) => {
        this.handleMouseMove(event);
      });
      this.canvas.addEventListener("mouseout", () => {
        this.handleMouseOut();
      });
  
      // Dibujar el rectángulo inicial
      this.drawRectangle();
    }
  
    drawRectangle() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillStyle = "red";
      this.context.fillRect(
        this.rectangleX,
        this.rectangleY,
        this.rectangleWidth,
        this.rectangleHeight
      );
    }
  
    handleMouseMove(event) {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
  
      if (
        mouseX >= this.rectangleX &&
        mouseX <= this.rectangleX + this.rectangleWidth &&
        mouseY >= this.rectangleY &&
        mouseY <= this.rectangleY + this.rectangleHeight
      ) {
        this.isDragging = true;
      } else {
        this.isDragging = false;
      }
  
      if (this.isDragging) {
        this.rectangleX = mouseX - this.rectangleWidth / 2;
        this.rectangleY = mouseY - this.rectangleHeight / 2;
      }
  
      this.drawRectangle();
    }
  
    handleMouseOut() {
      this.isDragging = false;
      this.rectangleX = this.startingX;
      this.rectangleY = this.startingY;
      this.drawRectangle();
    }
  }
  
  // Crear una instancia del juego
  const game = new Game("gameCanvas");
}