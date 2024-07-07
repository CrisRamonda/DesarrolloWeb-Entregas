class Producto {
    constructor(marca, tipo, kg, precio) {
        this.marca = marca,
        this.tipo = tipo,
        this.kg = kg,
        this.precio = precio;
    }
}

const Productos = [
    // Perro Adulto
    new Producto('Eukanuba', 'Perro Adulto', 3, 3000),
    new Producto('Pro Plan', 'Perro Adulto', 15, 12000),
    new Producto('Royal Canin', 'Perro Adulto', 10, 9000),
    
    // Perro Cachorro
    new Producto('Pedigree', 'Perro Cachorro', 2, 2500),
    new Producto('Hill\'s', 'Perro Cachorro', 5, 4500),
    new Producto('Nutro', 'Perro Cachorro', 3, 3200),
    
    // Gato Adulto
    new Producto('Whiskas', 'Gato Adulto', 1, 1800),
    new Producto('Purina ONE', 'Gato Adulto', 2.5, 3500),
    new Producto('Iams', 'Gato Adulto', 3, 4000),
    
    // Gato Cachorro
    new Producto('Royal Canin', 'Gato Cachorro', 1.5, 2200),
    new Producto('Hill\'s', 'Gato Cachorro', 2, 2800)
]

nodoSectionProductos = document.getElementById('idProductos')

console.log(nodoSectionProductos);
console.dir(nodoSectionProductos);

Productos.forEach(prod => {
    nodoSectionProductos.innerHTML += `
        <article class="articleProductos">
            <!-- IMAGEN DEL PRODUCTO -->
            <img class="fotoProductos"  src="../images/ProductoAlimentoPerro.jpg" alt="IMAGEN DE ALIMENTO DE PERRO EN UN PLATO, JUNTO A UNA PATA DE PERRO">
            <h3 class="subTituloProductos">
                Balanceado ${prod.marca} ${prod.kg}kg
            </h3>
            <ul>
                <li>${prod.marca}</li>
                <li>${prod.tipo}</li>
                <li>$${prod.precio}</li>
            </ul>
        </article>
    `
})