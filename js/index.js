

// Armamos el creador de objetos para los clientes

class Cliente {
    constructor(nombre, edad) {
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.asignado = false;
    }
    prestamoAsignado() {
        this.asignado = true;
    }
};

// Creamos los clientes ya existentes

const mauro = new Cliente("Mauro", "21");
const karina = new Cliente("Karina", "46");
const franco = new Cliente("Franco", "18");
const pablo = new Cliente("Pablo", "44");

const clientes = ["karina", "mauro", "franco", "pablo"];



// Traemos el botón inicial y le ponemos un evento "click". Con él borramos algunos parrafos, le pedimos el nombre al usuario y creamos un form para recibir la respuesta

let botonInicial = document.getElementById("btnInicial")
botonInicial.addEventListener("click", despejar)
function despejar(){
    let primerParrafo = document.getElementById("primerParrafo");
    let segundoParrafo = document.getElementById("segundoParrafo");
    primerParrafo.remove();
    segundoParrafo.remove();
    botonInicial.remove();
    let padreDiv = document.getElementById("padreDiv");
    let saludoInicial = document.createElement("p");
    saludoInicial.innerText = "Ingrese su nombre por favor... (debe ser cliente del banco)";
    padreDiv.append(saludoInicial);

    // Con este form evaluamos la respuesta del usuario con un evento "submit". Si es un cliente del banco se lo saluda y si no lo es se le avisa que no es cliente

    let formulario = document.createElement("form");
    formulario.innerHTML = "<form><input type=text><input type=submit value=Enviar></form>";
    formulario.id = "formu";
    padreDiv.append(formulario);
    
    let input = document.getElementById("formu");
    console.log(input);
    input.addEventListener("submit", validarFormulario);

    function validarFormulario(e){
        e.preventDefault();
        
        const clientes = ["karina", "mauro", "franco", "pablo"];
        if(clientes.includes(e.target.children[0].value)){
            let entradita = document.createElement("p");
            entradita.innerText = "Hola " + e.target.children[0].value;
            padreDiv.append(entradita);

            // Creamos un boton nuevo para continuar y le ponemos un evento "click". Con este evento se le pide al usuario que ingrese el monto con un form

            let botonContinuar = document.createElement("button");
            botonContinuar.innerText = "Continuar" ;
            botonContinuar.id = "botonContinuar";
            padreDiv.append(botonContinuar);
            let botonContinuar2 = document.getElementById("botonContinuar");
            
            botonContinuar2.addEventListener("click", respuestaClick)
            function respuestaClick(){
                    let pedidoMonto = document.createElement("p");
                    pedidoMonto.innerText = "Ingrese el monto que necesita y presione Enviar:";
                    padreDiv.append(pedidoMonto);
                    let formulario2 = document.createElement("form");
                    formulario2.innerHTML = "<form><input type=text><input type=submit value=Enviar></form>";
                    formulario2.id = "formu2";
                    padreDiv.append(formulario2);

                    // Armamos un evento "submit" para el form donde se le calcula el interes al monto ingresado por el usuario con una funcion

                    let input2 = document.getElementById("formu2");
                    console.log(input2);
                    input2.addEventListener("submit", validarFormulario2);
                
                    function validarFormulario2(e){
                        e.preventDefault();
                        function interes (num1) {
                            return num1 * 1.36;
                        }
                        let montoTotal = interes(e.target.children[0].value);
                        let avisoMonto = document.createElement("p");
                        avisoMonto.innerText = "La tasa de interés es del 36%, por lo que el monto total a abonar será de " + montoTotal + " pesos";
                        padreDiv.append(avisoMonto);

                        // Pedimos las cuotas y las recibimos con un form. Con el hacemos un evento de "submit" y con el analizamos si esa cantidad de cuotas esta disponible


                        let pedidoCuotas = document.createElement("p");
                        pedidoCuotas.innerText = "Ingrese cantidad de cuotas (3, 9 o 12)";
                        padreDiv.append(pedidoCuotas);
                        let formulario3 = document.createElement("form");
                        formulario3.innerHTML = "<form><input type=text><input type=submit value=Enviar></form>";
                        formulario3.id = "formu3";
                        padreDiv.append(formulario3);

                        let input3 = document.getElementById("formu3");
                        console.log(input3);
                        input3.addEventListener("submit", validarFormulario3);
                
                        function validarFormulario3(e){
                                e.preventDefault();

                                if((e.target.children[0].value != 3) && (e.target.children[0].value != 9) && (e.target.children[0].value != 12)){
                                    let avisoNegativo = document.createElement("p");
                                    avisoNegativo.innerText = "Cantidad de cuotas no disponible";
                                    padreDiv.append(avisoNegativo);
                                }else{
                                    let avisoPositivo = document.createElement("p");
                                    avisoPositivo.innerText = "Usted ha seleccionado " + e.target.children[0].value + " cuotas";
                                    padreDiv.append(avisoPositivo);

                                    // Estando disponible la cantidad de cuotas dividimos el monto total segun las cuotas seleccionadas y le comentamos al usuario cuanto tendra que pagar.

                                    function montoCuota (num1, num2) {
                                            return num1 / num2;
                                    }  
                                    let resultado = montoCuota(montoTotal, e.target.children[0].value);

                                    let avisoFinal = document.createElement("p");
                                    avisoFinal.innerText = "Usted debera pagar " + e.target.children[0].value + " cuotas de " + resultado + " pesos";
                                    padreDiv.append(avisoFinal);

                                    // Agregamos un ternario para avisarle al usuario con un ALERT si el monto de su cuota supera los 1000 pesos

                                    resultado > 1000 ? alert("ALERTA: La cuota supera los 1000 pesos") : alert("La cuta no supera los 1000 pesos");

                                    // Por ultimo le agradecemos al cliente

                                    let saludoFinal = document.createElement("p");
                                    saludoFinal.innerText = "Muchas gracias por usar nuestros servicios";
                                    padreDiv.append(saludoFinal);
                                }
                        }
                    }
            }
        }else{
            let entradita = document.createElement("p");
            entradita.innerText = "No eres un cliente del banco";
            padreDiv.append(entradita);
        }
    }
}