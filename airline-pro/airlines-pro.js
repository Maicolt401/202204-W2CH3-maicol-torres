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

const ADMIN = "ADMIN";
const USER = "USER";
let nameUser;
let lastFiveFlights;
let userRol;


askForName();

//preguntamos el nombre al cliente
function askForName() {
    nameUser= prompt("Beinvenido a Skylab Airlines ,por favor indicanos cual es tu nombre:",);
    if(nameUser=== '' || nameUser=== null){
        nameUser= 'persona sin nombre'
    }
}
showFlights();

//mostramos los detalles de los vuelos disponibles
function showFlights() {
    let friendlyFlights = flights.map((element) => {
        let info = `
             ${element.id}   El vuelo con salida de  ${element.from} con destino a  ${element.to}
            tiene un precio de ${element.cost}€ y ${element.scale ? "tiene escalas" : " no realiza ninguna escala"}.
            `
        return info;
    });

    let firstFiveFlights = friendlyFlights.slice(0,6);
    lastFiveFlights = friendlyFlights.slice(6,11);
    let addedFiveFlights = friendlyFlights.slice(11,flights.length);

    alert(
        "Binevenido a Skylab airnlines " + nameUser+ "  la lista de vuelos es la siguiente:\n " + firstFiveFlights.join('\n')
    );
    alert(
        lastFiveFlights.join('\n')
    );
    if(flights.length > 11){
        alert(
            addedFiveFlights.join('\n')
        );
    }

}

//calculamos el valor promedio de todos los vuelos 
showPromCost();


function showPromCost() {
    let totalCost = flights.map(
        (element) => element.cost
    ).reduce(
        (acumulator, currentVal) => acumulator + currentVal, 0
    );

    let PromCost = totalCost / flights.length;

    alert(" El precio promedio de los vuelos es de " + PromCost.toFixed(3).toString().replace('.', ',') + "€");

}
//buscamos que vuelos tienen escala y los mostramos en pantalla
FlightsWithScales();
function FlightsWithScales() {
    let flightsWithScales = flights.filter(
        (element) => (element.scale === true)
    );
    let friendlyFlightsWthScales = flightsWithScales.map((element) => {
        let info = ` ${element.from} -  ${element.to}`
        return info;
    });

    alert('Hay' +" "+ flightsWithScales.length 
            + ' vuelos con escalas.\n'
            + friendlyFlightsWthScales.join('\n')
    );
}

function showDestinations(){
    lastFiveFlights = friendlyFlights.slice(6,11);
    alert(
        "Los próximos vuelos para " + nameUser+ "son: \n " +  lastFiveFlights.join('\n')
    );
}

//preguntamos el rol del usuario
askRole();
function askRole() {
    let role = prompt("eres USER o ADMIN");
    role = checkRoleIsNotEmpy(role);
    role = checkRoleIsValid(role.toString().toUpperCase());
    if (role == ADMIN) {
        adminOptions();
    } else if (role== USER) {
        userOptions();
    }
}
//explicamos las funciones y desiciones que pueda tomar el admin con adminOptions
function adminOptions() {
    let askForActions = confirm("Como ADMIN puedes Crear nuevos vuelos pulsando CONTINUAR \n o  Borrar vuelos ya regristrados pulsando CANCELAR");

    
    
    if(flights.length >= 14){
        alert("se han superado el maximo de vuelos permitidos \n si gustas introducir un nuevo vuelo debes borrar uno ya existente.");
        deleteNewFlight();
    } else {
        if(askForActions === true) { // creamos los nuevos vuelos
            createNewFlight();
            let askIfContinue = confirm("¿Quieres continuar realizando mas operaciones?")
            if(askIfContinue === true){
                askRole();
            } else {
                alert("¡Hasta la próxima!");
            }
        } else if(askForActions === false) { //borramos alguno
            deleteNewFlight();
            let askIfContinue = confirm("¿Quieres continuar realizando mas operaciones?")
            if(askIfContinue === true){
                askRole();
            } else {
                alert("¡Hasta la próxima!");
            }
        }
    }
    
}
//inicializamos todos los valores en null para luego ir rellenandolos
function createNewFlight(){
    let newFlight = {
        id: null, 
        to: null, 
        from: null, 
        cost: null, 
        scale: null
    };
//ingresamos los valores
    let askId = prompt("ID del nuevo vuelo:");
    askId = checkIdIsValid(askId);
    let askFrom = prompt("Cual es la ciudad de origen del vuelo:");
    let askTo = prompt("Cual es la Ciudad de destino del vuelo:");
    let askCost = prompt("Precio del voleto:\n Introduce el número sin €.");
    askCost = checkNumberIsValid(askCost);

//comprobamos si hay escalas o no
    let askScale = prompt("El vuelo tiene escalas?\n- Indica SI si tiene escalas\n- Indica NO si no tiene");
    if(askScale.toUpperCase() === "SI"){
        askScale = true;
    } else if(askScale.toUpperCase() === "NO"){
        askScale = false;
    } else {
        askScale = false;
    }
    newFlight.id = askId;
    newFlight.from = askFrom;
    newFlight.to = askTo;
    newFlight.cost = askCost;
    newFlight.scale = askScale;

//empujamos los valores 
    flights.push(newFlight);
    showFlights();
}

function deleteNewFlight(){
    let askShowFlights = confirm("¿quieres ver los vuelos actualizados?");

    if(askShowFlights === true) {
        showFlights();
    } 
    let askIdToDelete = prompt("que ID de vuelo te gustaria borrar?");
    askIdToDelete = checkIfIdExist(askIdToDelete);
    let index = flights.findIndex((element) => element.id === askIdToDelete);
    deleteFlight = flights.splice(index, 1);

    let friendlyFlights = deleteFlight.map((element) => {
        let info = `
        ${element.id}   El vuelo con salida de  ${element.from} con destino a  ${element.to}
       tiene un precio de ${element.cost}€ y ${element.scale ? "tiene escalas" : " no realiza ninguna escala"}.
       `
        return info;
    });

    alert(
         friendlyFlights.join('\n') ,"ha sido borrado exitosamente"
    );

    askShowFlights = confirm("¿te gustaria ver denuevo los vuelos actualizados?");

    if(askShowFlights === true) {
        showFlights();
    } 
}

function userOptions() {
    let priceToSearch = prompt("precio de busqueda para su vuelo : \n ingresar monto sin €");
    priceToSearch = checkNumberIsValid(priceToSearch);
    let flightsSearchByPrice = flights.filter((element) => (element.cost <= priceToSearch));
    let friendlyFlightsResult = flightsSearchByPrice.map((element) => {
        let info = `${element.id} |  ${element.cost}€ |  Origen: ${element.from}  Destino: ${element.to}`
        return info;
    });

    if (friendlyFlightsResult.length === 0) {
        let resultOfDialog = confirm("no se han encontrado resultados \n ¿Te gustaría realizarla de nuevo?");
        if (resultOfDialog == true) {
            userOptions();
        } else {
            alert("¡Hasta la próxima!");
        }
    } else {
        let resultTest = friendlyFlightsResult.length > 1 ? "Los vuelos encontrados para esta búsqueda son:\n" :"";
        alert(resultTest + friendlyFlightsResult.join('\n'));
        let flightToBuyId = prompt("Indica el vuelo que le gustaria comprar ingresando el ID del voleto");
        if (flightToBuyId == null) {
            let askIfContinue = confirm("¿Quieres continuar realizando mas operaciones?")
            if(askIfContinue === true){
                askRole();
            } else {
                alert("¡Hasta la próxima!");
            }
        } if (flightToBuyId == "") {
            alert("No has elegido ninguno de nuestros vuelos disponibles ");
            let askIfContinue = confirm("¿Quieres continuar realizando mas operaciones?")
            if(askIfContinue === true){
                askRole();
            } else {
                alert("¡Hasta la próxima!");
            }
        } else {
            flightToBuyId = checkNumberIsValid(flightToBuyId);
            let lightPurchased = flights.filter((element) => element.id === flightToBuyId);
            alert(`La compra de su voleto con salida de  ${lightPurchased[0].from} con destino a ${lightPurchased[0].to} se ha realizado satisfactoriamente \n¡Gracias por elegirnos! \n vuelva pronto!`);
        }
    }
}
//comprobamos valores ingresados 
function checkRoleIsNotEmpy(role) {
    if (role == null || role == "") {
        role = prompt("No te has identificado como ADMIN o USER, vuelve a intentarlo");
        checkRoleIsNotEmpy(role);
    }
    return role;
}
//comprobamos que los roles ingresados sean validos
function checkRoleIsValid(role) {
    if (role == ADMIN || role == USER) {
        return role;
    } else {
        role = prompt("Valor no valido \n Debes indicar si eres ADMIN o USER");
        role = checkRoleIsNotEmpy(role);
        role = checkRoleIsValid(role.toString().toUpperCase());
    }
    return role;
}

function checkNumberIsValid(number) {
    if (number !== null) {
        if (number !== "") {
            number = parseFloat(number);
            if (Number.isNaN(number) == true) {
                number = prompt("Haz introducido un valor no valido, debes indicar un número. \n ¿te gustaria volverlo a intentar?");
                checkNumberIsValid(number);
            }
        }
    }
    return number;
}
function checkIfIdExist(id){
    id = checkNumberIsValid(id);
    let validId = flights.some((element) => element.id === id ? true : false);
    if(validId === false){
        id = prompt("El ID con numero " + id + ".  es erroneo\n Por favor, introduce otro distinto.");
        checkIfIdExist(id);
    } else if(validId === true){
        return id;
    }
    return id;
}

function checkIdIsValid(id){
    id = checkNumberIsValid(id);
    let validId = flights.some((element) => element.id === id ? true : false);
    if(validId === true){
        id = prompt("El ID introducido ya existe en nuestra lista de vuelos . Por favor, introduce otro distinto.");
        checkIdIsValid(id);
    } else if(validId === false){
        return id;
    }
    return id;
}

