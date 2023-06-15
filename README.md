
![logo-ironmaze](./images/logo.png)



## Sobre nosotros
Somos Carlos y Julián, dos estudiantes del Bootcamp de Desarrollo Full Stack de Ironhack Barcelona, y este es nuestro primer proyecto en el que hemos combinado CSS, HTML y JavaScript para desarrollarlo.


## Deployment
Puedes jugar al juego [aquí](https://juliancasillasp.github.io/the-game/)


## Sobre el juego
Con el cursor deberas llegar a la meta sin salir del camino.


## Controles
Cursor.

## Condición de victoria
Superar los tres mapas llegando a la meta.

## Condición de derrota
Colisión entre cursor y borde.

## Clases

|   Class   | Properties                                        | Methods                                                                            |
| :-------: | ------------------------------------------------- | ---------------------------------------------------------------------------------- |
|   Player  |    x, y, w, h                                     | draw(contexto), handleMouseMove(event, canvas, context), handleMouseOut(contexto)  |
|   Game    |   canvas, ctx, player, map, intervalId, iteracion | start(), clear (), print(), recalculate(), showGameOverScreen(), showWinScreen()   |                                    
