let numone;
const pedirNumero = () => {};

while (Number.isNaN(numone) || numone === null) {
  pedirNumero();
}

let numtwo;
const pedirNumerodos = () => {};

while (Number.isNaN(numtwo) || numtwo === null) {
  pedirNumerodos();
}
function calculator(numone, numtwo) {
  const results = [];
  const operandoraiz = [];

  if (numone && numtwo) {
    const resultSum = +numone + +numtwo;
    const resultRest = numone - numtwo;
    const resultMult = (numone * numtwo).toFixed(3);
    const resultDiv = (numone / numtwo).toFixed(3);
    results.push(resultSum, resultRest, resultMult, resultDiv);
  } else if (numone && !numtwo) {
    const resultnumone = `El resultado de la raíz cuadrada de ${numone} es ${Math.sqrt(
      numone
    ).toFixed(3)}`;
    operandoraiz.push(resultnumone);
  } else if (numone && !numtwo) {
    const resultnumtwo = `El resultado de la raíz cuadrada de${numtwo} es ${Math.sqrt(
      numtwo
    ).toFixed(3)}`;

    operandoraiz.push(resultnumtwo);
  }
}

calculator(numone, numtwo);
