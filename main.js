window.onload = () => {
    class Game {
        constructor(canvasId) {
            
          this.canvas = document.getElementById(canvasId);
          this.context = this.canvas.getContext("2d");
          this.canvas.width = 700;
          this.canvas.height = 800;
      
          // Establecer el estilo del borde
          this.canvas.style.border = "2px solid black";
      
          // Tamaño y posición del rectángulo
          this.rectangleWidth = 30;
          this.rectangleHeight = 30;
          this.startingX = 20;
          this.startingY = 20;
          this.rectangleX = this.startingX;
          this.rectangleY = this.startingY;
      
          // Registrar el evento mousemove en el canvas
          this.canvas.addEventListener("mousemove", (event) => {
            this.handleMouseMove(event);
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
            mouseX >= 0 &&
            mouseX <= this.canvas.width &&
            mouseY >= 0 &&
            mouseY <= this.canvas.height
          ) {
            this.rectangleX = mouseX - this.rectangleWidth / 2;
            this.rectangleY = mouseY - this.rectangleHeight / 2;
          } else {
            this.rectangleX = this.startingX;
            this.rectangleY = this.startingY;
          }
      
          this.drawRectangle();
        }
      }
      
      // Crear una instancia del juego
      const game = new Game("gameCanvas");
}