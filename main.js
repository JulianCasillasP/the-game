window.onload = () => {

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Definir los cuadrados y sus propiedades
const map1 = {

obstaculo: [
  { x: 0, y: 0, width: 250, height: 600, color: 'black' },
  { x: 450, y: 100, width: 250, height: 500, color: 'black' },
  { x: 0, y: 0, width: 700, height: 70, color:'black' },
  { x: 0, y:500, width:600, height:100, color:'black' },
  { x:550, y:50, width:150, height:50, color:'black' }

  ],

  meta: { x:550, y: 70, width: 30, height:30, color:'red'},
}


//------------------------------------------
// const map2 ={
// obstaculo : [
//   { x: 0, y: 0, width: 700, height: 60, color: 'black'},
//   { x: 0, y: 0, width: 60, height: 600, color: 'black'},
//   { x: 0, y: 520, width: 700, height: 80, color: 'black'},
//   { x: 650, y:0, width: 60, height: 600, color: 'black'},
//   { x: 104, y:108, width: 596, height: 54, color:'black'},
//   { x: 0, y: 216, width: 596, height: 54, color:'black'},
//   { x: 104, y: 320, width: 596, height: 54, color:'black'},
//   { x: 0, y: 432, width: 596, height: 58, color:'black'},

// ],

// meta: { x: 60, y: 490, width: 30, height:30, color:'red'},
//  }



//-------------------------------------------
// const map3 = {
// obstaculo : [
//   { x: 0, y: 0, width: 100, height:600, color: 'black'},
//   { x: 0, y: 0, width: 700, height: 60, color: 'black'},
//   { x: 600, y: 0, width: 100, height: 700, color: 'black'},
//   { x: 0, y: 500, width: 700, height: 100, color:'black'},
//   { x: 200, y:100, width: 100, height: 400, color: 'black'},
//   { x: 200, y:100, width: 350, height: 150, color: 'black'},
//   { x: 400, y:100, width: 150, height: 310, color: 'black'},
//   { x: 470, y:100, width: 80, height: 380, color: 'black'},
//   { x: 320, y:460, width: 150, height: 20, color: 'black'},
//   { x: 280, y:430, width: 170, height: 20, color: 'black'},
//   { x: 320, y:400, width: 180, height: 20, color: 'black'},
//   { x: 300, y:380, width: 90, height: 10, color: 'black'},
//   { x: 300, y:250, width: 90, height: 100, color: 'black'},
//   { x: 310, y:360, width: 100, height: 10, color: 'black'},
// ],

// meta: { x: 390, y: 230, width: 10, height:20, color:'red' },

// }


// Dibujar los cuadrados en el canvas



  class Player {

    constructor() {
      this.radius = 10
      this.width = 20;
      this.height = 20;
      this.x = 335;
      this.y = 470;
      this.isDragging = false;
    }
    
  
    draw(contexto) {
      contexto.fillStyle = "red";
      contexto.beginPath();
      contexto.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      contexto.closePath();
      contexto.fill();

      map1.obstaculo.forEach(function(cuadrado) {
        ctx.fillStyle = cuadrado.color;
        ctx.fillRect(cuadrado.x, cuadrado.y, cuadrado.width, cuadrado.height);
      });
      
      ctx.fillStyle = map1.meta.color;
      ctx.fillRect(map1.meta.x, map1.meta.y, map1.meta.width, map1.meta.height);
      
    }
  
    clear(contexto, canvas) {
      contexto.clearRect(0, 0, canvas.width, canvas.height);
      
    }
  
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
  
      this.clear(context, canvas);
      this.draw(context);
    }
  
    handleMouseOut(contexto) {
      this.isDragging = false;
      this.x = 335;
      this.y = 470;
      this.clear(contexto);
      this.draw(contexto);
    }
  }
  
  class Game {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.context = this.canvas.getContext("2d");
      this.canvas.style.border = "2px solid black";
      this.player = new Player();
      this.intervalId = undefined;
      this.player.draw(this.context);
      this.map = map1;
      
}
start() {
  if (this.intervalId == undefined) {
    this.intervalId = setInterval(() => {
      this.iteration++;
      this.clear();
      this.recalculate();
      this.print();
    }, 20);
  }
}
print() {
}
}
  const game = new Game("gameCanvas");
  // Crear una instancia del juego
  
  game.canvas.addEventListener("mousemove", (event) => {
    game.player.handleMouseMove(event, game.canvas, game.context);
    console.log ("adios")
  });

  game.canvas.addEventListener("mouseout", () => {
    game.player.handleMouseOut(game.context);
    console.log ("hola")
  }); 
  }