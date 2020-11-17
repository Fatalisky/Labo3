alert("Para el Cuestionario, haga clik en QUIZ");

document.getElementById("kestion").onclick = function hazPregunta(){
      document.getElementById("prueba").style.display = "flex";
  }


// Array bidimensional [pregunta , respuesta correcta]
var preguntas = [																			// Pregunta Respuesta
    ['¿Cual es el nombre del director de la TUP?', 'Jorge'] ,         //  [0][0]   [0][1]
    ['¿Cuánto es ln(e)?', '1'] ,															//  [1][0]   [1][1]
    ['¿Cuánto es 10^0?', '1'] ,               //  [2][0]   [2][1]
  ['¿En qué deporte jugó Michael Jordan?', 'Basket'],								// [3][0]   [3][1]
    ['¿Cuántos jugadores participan en un partido de Basket?', '10'], // [4][0]   [4][1]

  ],
  pregunta, respuesta;
  formuladas = 0;
  acertadas = 0;
  var resuFin = document.getElementById("resu");
hazPregunta();

/*
  Se programa que al pulsarse el botón "Siguiente Pregunta" se compruebe si se ha acertado la pregunta, en cuyo caso, se incrementa en una unidad 'acertadas'.
  También se comprueba si ya se han realizado las 5 preguntas, en cuyo caso, se llama a 'muestraResultado()' que mostrará el resultado del juego y terminará el programa, de lo contrario, se formula una nueva pregunta.
*/

document.getElementById('boton').addEventListener('click', function(){
  entrada = document.getElementById("dato").value;

  if(entrada == respuesta){
    acertadas++;
  }

  if(formuladas < 5){			// Si aun no se han hecho 5 preguntas
    hazPregunta();			// seguir preguntando
  }
  else{						// de lo contrario
    muestraResultado();		// finaliza juego mostrando el resultado
    document.getElementById("boton").style.display = "none";
    document.getElementById("preg").style.display = "none";
    document.getElementById("dato").style.display = "none";
    document.getElementById("final").style.display = "block";
    document.getElementById("resu").innerHTML += preguntas
    //button.style.display="none";
    //document.getElementById('resu').innerHTML = preguntas;
    //console.log(resumen)
  }
});

/*
  Formula una pregunta al usuario...
*/

function hazPregunta(){
  let e;		

  // pregunta/respuesta al azar

  e = preguntas.splice( numAleat(0, preguntas.length-1), 1 );
  pregunta = e[0][0];			// se guardan la pregunta y la respuesta 
  respuesta = e[0][1];

  document.getElementById('preg').innerHTML = pregunta;        // se muestra la pregunta
  document.getElementById('dato').value = '';                  // se borra lo escrito anteriormente por el usuario

  formuladas++;
  
}

//document.getElementById("resolucion").onclick = function territorioargentino_on(){
  if(muestraResultado){
    
    document.getElementById("resolucion").style.display = "flex";
  }

  // if(preguntas){
  //   document.getElementById("resu").style.display = "flex";
//}

// Comprueba el número de preguntas acertadas y muestra mensaje en función de este...

function muestraResultado(){
        var resultado;      // para guardar el mensaje con el resultado

  switch(acertadas){
    case 0:
      resultado = 'No has acertado una sola pregunta:-/';
      break;
    case 1:
      resultado = 'Bueno, al menos has acertado una pregunta :-)';
      break;
    case 2:
      resultado = 'Solo 2 preguntas acertadas de ' +formuladas+ '. Toca mejorar.';
      break;
    case 3:
      resultado = 'No está mal, 3/5 acertadas.';
      break;
    case 4:
      resultado = 'Muy bien, has acertado ' + acertadas + ' preguntas :-)';
      break;
    case 5:
      resultado = '¡BRAVO 5/5';
      break;
  }

        document.getElementById('resolucion').innerHTML = resultado;
        
        //document.getElementById('resu').innerHTML = preguntas;
        //console.log(preguntas)
  
        document.getElementById("resu").innerHTML=preguntas;
}

function numAleat(min, max){
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}