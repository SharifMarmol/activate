
class Producto {
    constructor(nombre, precio, marca, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.stock = stock;
    }
}

const crearProducto = () => {
    let nombreProducto = prompt("Como se llama el producto ?");
    let precioProducto = parseInt( prompt("Cual es el precio del producto sin iva ?"));
    let marcaProducto = prompt("Cual es la marca del producto ?");
    let stockProducto = parseInt( prompt("Cual es el stock del producto ?"));

    let precioTotal = precioProducto * 1.21;

    const nuevoProducto = new Producto(nombreProducto, precioTotal, marcaProducto, stockProducto);
    productos.push(nuevoProducto);
    console.log(productos);
    return nuevoProducto;
}

let productos = [];

for (const producto of productos) {
    document.getElementById(mostrarProducto);
    let mostrarProducto = document.createElement("div");
    mostrarProducto.innerHTML = `<ul> 
                                    <li> 
                                        Nombre: ${producto.nombre}
                                        Precio: ${producto.precio}
                                        Marca: ${producto.marca}
                                        Stock: ${producto.stock}
                                    </li>
                                </ul> `;
    
}                   

let kayakSea = new Producto("kayak de mar", "50000", "Sea", "300");
let KayakOcean = new Producto("kayak de Oceano", "20000", "Ocean", "300");


let bastonesNordic = new Producto("bastones de caminata nordica", "30000", "Nordic", "250");
let bastonesTrekking = new Producto("bastones de caminata trekking", "15000", "Trekking", "250");

let kettlebell = new Producto("kettlebell", "2000", "Iron", "500");

const busquedaProducto = () => {
    let busqueda = prompt("Que buscas, kayaks, bastones o kettlebells ?");
    
    switch(busqueda) {
        case "kayaks":
            let kayaks = prompt("Que marca Sea o Ocean ?");
                if (kayaks = "sea") {
                    console.log(kayakSea);
                }else if (kayaks = "ocean") {
                    console.log(KayakOcean);
                } else{
                    alert(`No se que marca de kayak es esa`);
                }
            break;
        case "bastones":
            let bastones = prompt("Que marca Nordic o Trekking ?");
                if (bastones = "nordic") {
                    console.log(bastonesNordic);
                }else if (bastones = "trekking") {
                    console.log(bastonesTrekking);
                } else{
                    alert(`No se que marca de bastones es esa`);
                }
            break;
        case "kettlebells":
            console.log(kettlebell);
            break;
        default:
            alert("Solo tenemos kayaks, bastones o kettlebells, recarga la pagina para volver a buscar");
            break;
    }
    return busqueda;
}
