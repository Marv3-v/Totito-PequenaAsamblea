function inicioJuego() {
  document.dato = "o";
  document.finDelJuego = false;
  cambiarMensaje("Turno de: " + document.dato);


}

function movimientoSiguiente(casilla) {
if(document.finDelJuego != true) {
  if (casilla.innerHTML == "") {
    
   casilla.innerText = document.dato;
   cambiarDato();
    } else {
        cambiarMensaje("Selecciona otra casilla, Turno de: " + document.dato);
    }

  } else {
    cambiarMensaje(document.dato + " ya ganó");
  }
}

function cambiarDato() {
  if(buscarGanador(document.dato)) {
    cambiarMensaje("Bravo, " + document.dato + " has ganado");
    document.finDelJuego = true;
  } else if(document.dato == "x") {
    document.dato = "o";
    cambiarMensaje("Turno de: " + document.dato);
  } else if(document.dato == "o") {
    document.dato = "x";
    cambiarMensaje("Turno de: " + document.dato);
  }

}

function cambiarMensaje(mensaje) {
    var texto = document.querySelector("#texto");
    texto.innerText = mensaje;
}

// Ahora, buscar quién fue el ganador
function buscarGanador(jugador) {
  resultado = false;
    empate();
  if(verificarCasilla(1, 2, 3, jugador) ||
     verificarCasilla(4, 5, 6, jugador) ||
     verificarCasilla(7, 8, 9, jugador) ||
     verificarCasilla(1, 4, 7, jugador) ||
     verificarCasilla(2, 5, 8, jugador) ||
     verificarCasilla(3, 6, 9, jugador) ||
     verificarCasilla(1, 5, 9, jugador) ||
     verificarCasilla(3, 5, 7, jugador)
   )   {
    resultado = true;
  }
  return resultado;
}

// Ahora comparo cada dato de cada casilla con el siquiente
function verificarCasilla(a, b, c, jugador) {
  resultado = false;
  if(obtenerDatos(a) == jugador && obtenerDatos(b) == jugador && obtenerDatos(c) == jugador) {
      resultado = true;
     }

    return resultado;
}

// Primero obtengo todos los datos de cada Casilla
function obtenerDatos(numero) {
  return document.querySelector("#c" + numero).innerText;
}

function empezarOtraVez() {
  document.getElementById("c1").innerText = "";
  document.getElementById("c2").innerText = "";
  document.getElementById("c3").innerText = "";
  document.getElementById("c4").innerText = "";
  document.getElementById("c5").innerText = "";
  document.getElementById("c6").innerText = "";
  document.getElementById("c7").innerText = "";
  document.getElementById("c8").innerText = "";
  document.getElementById("c9").innerText = "";
  cambiarMensaje("Turno de: " + document.dato);
  document.finDelJuego = false;
}


function empate() {
  if(document.getElementById("c1").innerText != null &&
     document.getElementById("c2").innerText != null &&
     document.getElementById("c3").innerText != null &&
     document.getElementById("c4").innerText != null &&
     document.getElementById("c5").innerText != null &&
     document.getElementById("c6").innerText != null &&
     document.getElementById("c7").innerText != null &&
     document.getElementById("c8").innerText != null &&
     document.getElementById("c9").innerText != null
    ) {
      cambiarMensaje("Empate");
      document.finDelJuego = true;
  }
  cambiarMensaje("Turno de: " + document.dato);
  document.finDelJuego = false;
}
