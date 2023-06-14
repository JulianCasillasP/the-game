window.onload = () => {

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  
  // Definir los cuadrados y sus propiedades
  const maps = [{
  
  obstaculo: [
    { x: 0, y: 0, width: 250, height: 600, color: 'black' },
    { x: 450, y: 100, width: 250, height: 500, color: 'black' },
    { x: 0, y: 0, width: 700, height: 70, color:'black' },
    { x: 0, y:500, width:600, height:100, color:'black' },
    { x:550, y:50, width:150, height:50, color:'black' }
  
    ],
  
    meta: { x:520, y: 70, width: 30, height:30, color:'red'},
  }, {
    obstaculo : [
      { x: 0, y: 0, width: 700, height: 60, color: 'black'},
      { x: 0, y: 0, width: 60, height: 600, color: 'black'},
      { x: 0, y: 520, width: 700, height: 80, color: 'black'},
      { x: 650, y:0, width: 60, height: 600, color: 'black'},
      { x: 104, y:108, width: 596, height: 54, color:'black'},
      { x: 0, y: 216, width: 596, height: 54, color:'black'},
      { x: 104, y: 320, width: 596, height: 54, color:'black'},
      { x: 0, y: 432, width: 596, height: 58, color:'black'},
      {x: 560, y: 60, width:120, height: 48, color: "black"},
    
    ],
    
    meta: { x: 60, y: 490, width: 30, height:30, color:'red'},
     }, {
      obstaculo : [
        { x: 0, y: 0, width: 100, height: 450, color: 'black' },
        { x: 0, y: 0, width: 700, height: 60, color: 'black' },
        { x: 600, y: 0, width: 100, height: 700, color: 'black' },
        { x: 0, y: 530, width: 700, height: 100, color: 'black' },
        { x: 200, y: 100, width: 90, height: 430, color: 'cyan' },
        { x: 200, y: 100, width: 350, height: 150, color: 'yellow' },
        { x: 410, y: 100, width: 60, height: 310, color: 'blue' },
        { x: 470, y: 100, width: 80, height: 400, color: 'orange' },
        { x: 320, y: 480, width: 150, height: 20, color: 'purple' },
        { x: 290, y: 440, width: 150, height: 10, color: 'brown' },
        { x: 320, y: 410, width: 150, height: 5, color: 'green' },
        { x: 290, y: 385, width: 90, height: 5, color: 'red' },
        { x: 290, y: 250, width: 90, height: 90, color: 'green' },
        { x: 315, y: 360, width: 95, height: 5, color: 'blue' },
        { x:0, y:0, width: 30, height: 600, color: 'black' },
      ],
      
      meta: { x: 380, y: 250, width: 30, height: 20, color: 'red' },
      
      }]
  
    class Player {
  
      constructor() {
        this.width = 13;
        this.height = 13;
        this.x = 335;
        this.y = 470;
        this.isDragging = false;
      }
      
    
      draw(contexto) {
        contexto.fillStyle = "red";
        contexto.fillRect(this.x, this.y, this.width, this.height);  
      }
     
    
      // clear(contexto, canvas) {
      //   contexto.clearRect(0, 0, canvas.width, canvas.height);
        
      // }
    
      handleMouseMove(event, canvas, context) {
  
        const rect = canvas.getBoundingClientRect();
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
    
        // this.clear(context, canvas);
        // this.draw(context);
      }
    
      handleMouseOut(contexto) {
        this.isDragging = false;
        this.x = 335;
        this.y = 470;
        // this.clear(contexto);
        // this.draw(contexto);
      }
    }
    

    class Game {
      constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.player = new Player();
        this.intervalId = undefined;
        this.player.draw(this.context);
        this.map = maps[0];
        this.mapNumber = 0;
        this.gameOverElement = document.querySelector(".game-over");

         }

  start() {
    if (this.intervalId == undefined) {
      this.intervalId = setInterval(() => {

        this.clear();
        this.recalculate();
        this.print();
      }, 5);
    }
  }

  clear () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  print() {
    this.map.obstaculo.forEach(function(cuadrado) {
      ctx.fillStyle = cuadrado.color;
      ctx.fillRect(cuadrado.x, cuadrado.y, cuadrado.width, cuadrado.height);
    });
    
    ctx.fillStyle = this.map.meta.color;
    ctx.fillRect(this.map.meta.x, this.map.meta.y, this.map.meta.width, this.map.meta.height);

    this.player.draw(this.context);
  }

  

  recalculate() {
    // Obtener las coordenadas del jugador
    const playerX = this.player.x;
    const playerY = this.player.y;
    const playerWidth = this.player.width;
    const playerHeight = this.player.height;
  
    // Verificar colisiones con obstáculos
    this.map.obstaculo.forEach((obstaculo) => {
      if (
        playerX < obstaculo.x + obstaculo.width &&
        playerX + playerWidth > obstaculo.x &&
        playerY < obstaculo.y + obstaculo.height &&
        playerY + playerHeight > obstaculo.y
      ) {
        // Si hay colisión, restablecer la posición del jugador
        this.showGameOverScreen();
      }
    });
  
    // Verificar colisión con la meta
    if (
      playerX < this.map.meta.x + this.map.meta.width &&
      playerX + playerWidth > this.map.meta.x &&
      playerY < this.map.meta.y + this.map.meta.height &&
      playerY + playerHeight > this.map.meta.y
    ) {
      // Si hay colisión con la meta, pasar al siguiente obstáculo
      const currentMeta = this.map.meta;
      this.mapNumber++;
      if (this.mapNumber < maps.length) {
        this.map = maps[this.mapNumber];
        this.player.x = currentMeta.x; // Restablecer la posición del jugador a la posición de la meta anterior
        this.player.y = currentMeta.y;
      } 
    }
  }

  showGameOverScreen() {
    clearInterval(this.intervalId); //detener el bucle principal del juego
    this.gameOverElement.style.display = 'block'; //mostrar la pantalla de gameover
    canvas.style.display = 'none';
   }

 
}


    const game = new Game("gameCanvas");
    // Crear una instancia del juego

    document.getElementById("new-game-button").onclick = () => {
          startGame();
          document.getElementsByClassName("game-intro")[0].style.display = "none"; 
          canvas.style.display = 'block'

        };
      
        function startGame() {
          game.start();
        }
      


    game.canvas.addEventListener("mousemove", (event) => {
      game.player.handleMouseMove(event, game.canvas, game.context);
     
    });
  
    game.canvas.addEventListener("mouseout", () => {
      game.player.handleMouseOut(game.context);
      
    }); 
    }