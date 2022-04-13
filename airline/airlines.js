//ingresamos los datos referentes a los vuelos ya registrados
let flights = [

    { id: 0, to: "RIO DE JANEIRO", from: "BARCELONA", cost: 1500, scale: false },
    { id: 1, to: "LIMA", from: "MADRID", cost: 1010, scale: false },
    { id: 2, to: "CARACAS", from: "BARCELONA", cost: 1500, scale: true },
    { id: 3, to: "BUENOS ARIRES", from: "MADRID", cost: 1175, scale: false },
    { id: 4, to: "LISBOA", from: "BARCELONA", cost: 150, scale: false },
    { id: 5, to: "MOSCOU", from: "MADRID", cost: 300, scale: false },
    { id: 6, to: "PARIS", from: "BARCELONA", cost: 90, scale: false },
    { id: 7, to: "MARBELLA", from: "BARCELONA", cost: 1500, scale: true },
    { id: 8, to: "BERLIN", from: "BARCELONA", cost: 500, scale: true },
    { id: 9, to: "COLORADO", from: "MADRID", cost: 1500, scale: true },
    { id: 10, to: "MIAMI", from: "MADRID", cost: 150, scale: false }];
  
  //preguntamos el nombre del usuario y le damos la bienvenida
  let userName = prompt("Cual es tu nombre?");
  alert(`Bienvenido ${userName} a Isdi Airlines!`);
  
  infoFlights();
  console.log("");
  function infoFlights() {
    for (let i=0; i<flights.length; i++) {
  
      let infoScale = "";
  //averiguamos si el vuelo tiene escala o no
      if (flights[i].scale === true) {
        infoScale = "tiene escala";
      } else {
        infoScale = "No realiza ninguna escala.";
      }
  //mostramos al usuario toda la informacion de los vuelos
      console.log(`El vuelo con salida de ${flights[i].from} con direcion a ${flights[i].to} tiene un precio de ${flights[i].cost}€ y ${infoScale}`);
  
    }
  }
//calculamos el precio promedio de los vuelos
  promCost();
  console.log("");
  function promCost() {
    let totalCost = 0;
  
    for (let i = 0; i < flights.length; i++) {
      totalCost += flights[i].cost;
    }
  
    let prom = totalCost / flights.length;
  
    console.log(`El precio promedio de los vuelos de nuestra aerolinea es de: ${prom.toFixed(3)}€` );
  
  }
//mostramos los ultimos 5 vuelos del dia
  lastFlights();
  console.log("");
  function lastFlights() {
  
    let destinations = [];
    let latest = [];
  
    for (let i = 0; i < flights.length; i++)
      destinations.push(flights[i]['to']);
    latest = destinations.slice(6);
    console.log(`Los ultimos vuelos del dia con salida de Madrid y Barcelona tienen como destino a: ${latest}`)
  
  };
  