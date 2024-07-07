// PRODUCTOS // 
// DEFINICION CLASE PRODUCTO
class Producto {
    constructor(id, marca, tipo, kg, precio) {
        this.id = id,
        this.marca = marca,
        this.tipo = tipo,
        this.kg = kg,
        this.precio = precio;
    }
}

// SE INSTANCIAN PRODUCTOS
const Productos = [
    // Perro Adulto
    new Producto(1,'Eukanuba', 'Perro Adulto', 3, 3000),
    new Producto(2,'Pro Plan', 'Perro Adulto', 15, 12000),
    new Producto(3,'Royal Canin', 'Perro Adulto', 10, 9000),
    
    // Perro Cachorro
    new Producto(4,'Pedigree', 'Perro Cachorro', 2, 2500),
    new Producto(5,'Hill\'s', 'Perro Cachorro', 5, 4500),
    new Producto(6,'Nutro', 'Perro Cachorro', 3, 3200),
    
    // Gato Adulto
    new Producto(7,'Whiskas', 'Gato Adulto', 1, 1800),
    new Producto(8,'Purina ONE', 'Gato Adulto', 2.5, 3500),
    new Producto(9,'Iams', 'Gato Adulto', 3, 4000),
    
    // Gato Cachorro
    new Producto(10,'Royal Canin', 'Gato Cachorro', 1.5, 2200),
    new Producto(11,'Hill\'s', 'Gato Cachorro', 2, 2800)
]

// SE TRAE EL NODO PARA INCLUIR LOS PRODUCTOS
nodoSectionProductos = document.getElementById('idProductos')

console.log(nodoSectionProductos);
console.dir(nodoSectionProductos);

// SE MODIFCIA EL HTML PARA INCLUIR PRODUCTOS
Productos.forEach(prod => {
    nodoSectionProductos.innerHTML += `
        <article id="idProducto" class="articleProductos">
            <!-- IMAGEN DEL PRODUCTO -->
            <img class="fotoProductos"  src="../images/ProductoAlimentoPerro.jpg" alt="IMAGEN DE ALIMENTO DE PERRO EN UN PLATO, JUNTO A UNA PATA DE PERRO">
            <h3 class="subTituloProductos">
                Balanceado ${prod.marca} ${prod.kg}kg
            </h3>
            <ul>
                <li>${prod.marca}</li>
                <li>${prod.tipo}</li>
                <li>$${prod.precio}</li>
                <button id="idBotonProductos" class="btn botonProductos">AGREGAR</button>
            </ul>
        </article>
    `
})

const nodoProducto = Array.from(document.getElementsByClassName('articleProductos'))
const nodoBoton = document.getElementById('idBotonProductos')

console.dir(nodoProducto);
console.log(typeof(nodoProducto));
console.log(Productos[1]);
console.dir(nodoBoton);




