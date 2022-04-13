var dictionary = [
{ letter: "A", question: "Con la A: Animal volador simbolico de Estados Unidos", answer: "aguila", correct: false, error: false, pasapalabra: false},
{ letter: "B", question: "Con la B: Accion que se hace debajo del agua .", answer: "bucear", correct: false, error: false, pasapalabra: false},
{ letter: "C", question: "Con la C: maquina que se usa para poder transportarse.", answer: "coche", correct: false, error: false, pasapalabra: false},
{ letter: "D", question: "Con la D: que hay en las manos.", answer: "dedos", correct: false, error: false, pasapalabra: false},
{ letter: "E", question: "Con la E: Lugar que se usa para viviendas, oficinas, colegios, etc.", answer: "edificio", correct: false, error: false, pasapalabra: false},
{ letter: "F", question: "Con la F: Tiempo que viene después.", answer: "futuro", correct: false, error: false, pasapalabra: false},
{ letter: "G", question: "Con la G: animal domestico.", answer: "gato", correct: false, error: false, pasapalabra: false},
{ letter: "H", question: "Con la H: sinonimo de encontrar algo ", answer: "hallar", correct: false, error: false, pasapalabra: false},
{ letter: "I", question: "Con la I: lugar donde la gente reza.", answer: "iglesia", correct: false, error: false, pasapalabra: false},
{ letter: "J", question: "Con la J: Persona que juega.", answer: "jugador", correct: false, error: false, pasapalabra: false},
{ letter: "K", question: "Con la K: Medida para pesar (equivale a mil gramos).", answer: "kilo", correct: false, error: false, pasapalabra: false},
{ letter: "L", question: "Con la L: Envase de metal.", answer: "lata", correct: false, error: false, pasapalabra: false},
{ letter: "M", question: "Con la M: Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura.", answer: "manzana", correct: false, error: false, pasapalabra: false},
{ letter: "N", question: "Con la N: hogar de los pajaros.", answer: "nido", correct: false, error: false, pasapalabra: false},
{ letter: "Ñ", question: "Con la Ñ: animal usado por el mundia del 2014 por brasil.", answer: "ñandu", correct: false, error: false, pasapalabra: false},
{ letter: "O", question: "Con la O: Animal doméstico que tiene el cuerpo cubierto de lana.", answer: "oveja", correct: false, error: false, pasapalabra: false},
{ letter: "P", question: "Con la P: Andar por placer o para hacer ejercicio.", answer: "pasear", correct: false, error: false, pasapalabra: false},
{ letter: "Q", question: "Con la Q: Alimento sólido preparado con leche.", answer:"queso", correct: false, error: false, pasapalabra: false},
{ letter: "R", question: "Con la R: Pocas palabras que  cuentan una historia más larga.", answer: "resumen", correct: false, error: false, pasapalabra: false},
{ letter: "S", question: "Con la S: Lo contrario de entrar.", answer: "salir", correct: false, error: false, pasapalabra: false},
{ letter: "T", question: "Con la T: Parte superior de una casa.", answer: "techo", correct: false, error: false, pasapalabra: false},
{ letter: "U", question: "Con la U: Algo que no puede esperar.", answer: "urgente", correct: false, error: false, pasapalabra: false},
{ letter: "V", question: "Con la V: el avestruz es un animal muy..?", answer: "veloz", correct: false, error: false, pasapalabra: false},
{ letter: "X", question: "Con la X: Cuarenta en números romanos.", answer: "xl", correct: false, error: false, pasapalabra: false},
{ letter: "Y", question: "Con la Y: Hembra del caballo", answer: "yegua", correct: false, error: false, pasapalabra: false},
{ letter: "Z", question: "Con la Z: Empezar a navegar", answer: "zarpar", correct: false, error: false, pasapalabra: false}
];

var index = 0;
var points = 0;
var result = document.getElementById("pointsShow");
var userAnswer;// variable donde se consultan las respuestas del usuario.

// Funcion mostrar preguntas
function showQuestion(){
	//console.log("index en showQuestion" + index)
	userAnswer = document.getElementById("pregunta");
	userAnswer.innerHTML = dictionary[index].question;
}

// Función comprobar respuesta
function checkAnswer(){
	userAnswer = document.getElementById("respuesta").value.toLowerCase();
	if(userAnswer === dictionary[index].answer){
		alert("Has respondido correctamente la letra");
		dictionary[index].correct = true;
		points = points + 1;
		result.innerHTML = points;
		/*document.getElementById().style.color="green";*/

	}else if(userAnswer != dictionary[index].answer){
		dictionary[index].correct = false;
		alert("La respuesta correcta era "  + dictionary[index].answer );
	}else{
		showQuestion();
	}
	index = index + 1;
	return showQuestion();
}

// Función pasarpalabra
function pasarPalabra(){

	var wordPased = dictionary.splice(index, 1)[0];
	dictionary.push(wordPased);
	showQuestion();
} 

//total hints words user true
/*function showCorrectLetter(){
	dictionary.forEach(function(key){
		if(key.correct===true){
			console.log("Has respondido correctamente la letra => " + key.letter)    
		}
	})
}*/

// Cronometro
function crono(){
	let countSeconds = 300;
	let seconds = document.getElementById("seconds");
	let cronometro = setInterval(
		function(){
			if (countSeconds<10){
				countSeconds = "0" + countSeconds;
			}
			if(countSeconds==00)
			{
				clearInterval(cronometro);
				alert("Se acabó tú tiempo");
				document.getElementById("playnow").style.visibility="visible";
				document.getElementById("sendAnswer").style.visibility="hidden";
				document.getElementById("respuesta").style.visibility="hidden";
				document.getElementById("pasaPalabra").style.visibility="hidden";
				document.getElementById("question").style.visibility="hidden";
				document.getElementById("seconds").style.visibility="hidden";
				document.getElementById("temp").style.visibility="hidden";
				document.getElementById("exit").style.visibility="hidden";
				showCorrectLetter()
			}
			seconds.innerHTML = countSeconds;
			--countSeconds;
		}
		,1000);
}

// Play again function
function playAgain(){
	location.reload();
}

// Fin juego
function endGame(){
	alert("Se acabó tú tiempo");
	document.getElementById("playnow").style.visibility="visible";
	document.getElementById("sendAnswer").style.visibility="hidden";
	document.getElementById("respuesta").style.visibility="hidden";
	document.getElementById("pasaPalabra").style.visibility="hidden";
	document.getElementById("question").style.visibility="hidden";
	document.getElementById("seconds").style.visibility="hidden";
	document.getElementById("temp").style.visibility="hidden";
	document.getElementById("exit").style.visibility="hidden";
	clearTimeout("crono");
}

// Funciones necesarias para empezar a jugar.
function jugar(){
	document.getElementById("sendAnswer").style.visibility="visible";
	document.getElementById("respuesta").style.visibility="visible";
	document.getElementById("pasaPalabra").style.visibility="visible";
	document.getElementById("jugar").style.visibility="hidden";
	document.getElementById("playnow").style.visibility="hidden";
	document.getElementById("message").style.visibility="hidden";
	document.getElementById("temp").style.visibility="visible";
	document.getElementById("exit").style.visibility="visible";
	showQuestion();
	crono();
}