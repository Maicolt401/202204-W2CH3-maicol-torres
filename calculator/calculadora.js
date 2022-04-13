//le pedimos al usuario que cominece a introducir los valores a calcular
//let numone = prompt("Ingresa el primer numero");
// si el valor agregado no es un numero, pedimos al usuario volver a hacerlo
let numone;
pedirNumero();
function pedirNumero () {
    numone = prompt("Ingrese el primer numero");
    
    }

while (isNaN(numone) || numone === null ) {
    alert("Debe ingresar solo numeros");
    pedirNumero();
}

let numtwo;
pedirNumerodos();
function pedirNumerodos () {
    numtwo = prompt("Ingrese el segundo dumero");
    
    }

while (isNaN(numtwo) || numtwo === null ) {
    alert("Debe ingresar solo numeros");
    pedirNumerodos();
}
// empezamos a hacer la funcion para calcular los valores agregados y comenzar a ingresarlos dentro de la array
function calculator(numone, numtwo) {
    
// inicializamos los array vacio 
  let results = [];
let operandoraiz = [];
    
  if (numone && numtwo) {
    const resultSum = +numone + +numtwo;
    const resultRest = numone - numtwo;
    const resultMult = (numone * numtwo ).toFixed(3);
    const resultDiv = (numone / numtwo).toFixed(3);
//empujamos los resultados dentro del array
    results.push(resultSum, resultRest, resultMult, resultDiv);
    console.log("El resultado de la suma es: " + resultSum);
    console.log("El resultado de la resta es: " + resultRest);
    console.log("El resultado de la multiplicacion es:" + resultMult);
    console.log("El resultado de la division es: " + resultDiv);
    console.log(results);
  }
// si el usuario ingresa un solo numero, ese dicho numeor sera calculado por raiz cuadrada
  else if (numone && !numtwo) {

    const resultnumone = ('El resultado de la raíz cuadrada de ' + numone + ' es ' + (Math.sqrt(numone)).toFixed(3));
    operandoraiz.push(resultnumone);
    console.log(operandoraiz);

  }

  else if (numone && !numtwo) {

    const resultnumtwo = ('El resultado de la raíz cuadrada de' + numtwo + ' es ' + (Math.sqrt(numtwo)).toFixed(3));

    operandoraiz.push(resultnumtwo);
    console.log(operandoraiz);
  }
}

calculator(numone, numtwo);