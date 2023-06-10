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


map1.obstaculo.forEach(function(cuadrado) {
  ctx.fillStyle = cuadrado.color;
  ctx.fillRect(cuadrado.x, cuadrado.y, cuadrado.width, cuadrado.height);
});

ctx.fillStyle = map1.meta.color;
ctx.fillRect(map1.meta.x, map1.meta.y, map1.meta.width, map1.meta.height);


}


  

   



      

