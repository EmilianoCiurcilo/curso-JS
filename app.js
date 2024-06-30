function convertir (){
    let dolarOficial = 900
    let dolarBlue = 1300

    
    let cambio = prompt ('Bienvenido, a que tipo de dolar desea convertir? "oficial" - "blue"')

    while (cambio != "blue" && cambio != "oficial"){
        alert("ingrese correctamente oficial o blue")
        cambio = prompt ('Bienvenido, a que tipo de dolar desea convertir? "oficial" - "blue"')
    };
    
    if(cambio == "oficial"){
        let monto = prompt('ingrese el monto en dolares a cambiar')
        let conversion = `${monto*dolarOficial}`
        alert (`La conversion es $${conversion} pesos`)
    }
    
    if(cambio == "blue"){
        let monto = prompt('ingrese el monto en dolares a cambiar')
        let conversion =`${monto*dolarBlue}`
        alert (`La conversion es $${conversion} pesos`)
    }
    
    alert ("¡Gracias por su visita!")
}
convertir()