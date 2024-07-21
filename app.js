const dolares = [
    {
    dolar: "oficial",
    valor: 900
    },
    {
    dolar: "blue",
    valor: 1300
    }
]
class Dolar {
    constructor(dolar, valor) {
      (this.dolar = dolar), (this.valor = valor);
    }
  }

const agregarDolares = () => {
    let dolar = prompt("ingrese el nombre del dolar");
    let valor = Number(prompt("ingrese el valor de cambio"));
    alert(`Agregaste el dolar ${dolar} a $${valor} correctamente`)
    
    let dolarNuevo = new Dolar (dolar, valor);
  
    dolares.push(dolarNuevo);
  };

let continuar = confirm("quieres agregar un nuevo dolar?");
while (continuar) {
  agregarDolares();
  continuar = confirm("quieres agregar otro?");
}

