// Define todos los productos en un solo array
const productos = [
    // Chaquetas
    { id: 1, nombre: "Chaqueta negra de cuero", descripcion: "Chaqueta para vestir", img: "./img/chaqueta1.jpg", precio: 3000, tiempoEntrega: "3-4 días", categoria: "Chaquetas", cantidad: 1 },
    { id: 2, nombre: "Chaqueta crema", descripcion: "Chaqueta para vestir", img: "./img/chaqueta2.jpg", precio: 3000, tiempoEntrega: "3-4 días", categoria: "Chaquetas", cantidad: 1 },
    { id: 3, nombre: "Chaqueta negra", descripcion: "Chaqueta para vestir", img: "./img/chaqueta3.jpg", precio: 3000, tiempoEntrega: "3-4 días", categoria: "Chaquetas", cantidad: 1 },
    { id: 4, nombre: "Chaqueta cafe", descripcion: "Chaqueta para vestir", img: "./img/chaqueta4.jpg", precio: 3000, tiempoEntrega: "3-4 días", categoria: "Chaquetas", cantidad: 1 },

    // Camisas
    { id: 5, nombre: "Camisa verde", descripcion: "Camisa para vestir", img: "./img/camisa3.jpg", precio: 1000, tiempoEntrega: "3-4 días", categoria: "Camisas", cantidad: 1 },
    { id: 6, nombre: "Camisa azul", descripcion: "Camisa para vestir", img: "./img/camisa4.jpg", precio: 1000, tiempoEntrega: "3-4 días", categoria: "Camisas", cantidad: 1 },
    { id: 7, nombre: "Camisa negra", descripcion: "Camisa para vestir", img: "./img/camisan.jpg", precio: 1000, tiempoEntrega: "3-4 días", categoria: "Camisas", cantidad: 1 },
    { id: 8, nombre: "Camisa blanca", descripcion: "Camisa para vestir", img: "./img/camisablanca.jpg", precio: 1000, tiempoEntrega: "3-4 días", categoria: "Camisas", cantidad: 1 },

    // Pantalones
    { id: 9, nombre: "Pantalon de mezclilla", descripcion: "Pantalon para vestir", img: "./img/pantalon1.jpg", precio: 1800, tiempoEntrega: "3-4 días", categoria: "Pantalones", cantidad: 1 },
    { id: 10, nombre: "Pantalon atletico", descripcion: "Pantalon para vestir", img: "./img/pantalon2.jpg", precio: 1800, tiempoEntrega: "3-4 días", categoria: "Pantalones", cantidad: 1 },
    { id: 11, nombre: "Pantalon negro", descripcion: "Pantalon para vestir", img: "./img/pantalon3.jpg", precio: 1800, tiempoEntrega: "3-4 días", categoria: "Pantalones", cantidad: 1 },
    { id: 12, nombre: "Pantalon gris", descripcion: "Pantalon para vestir", img: "./img/pantalon4.jpg", precio: 1800, tiempoEntrega: "3-4 días", categoria: "Pantalones", cantidad: 1 },

    // Tenis
    { id: 13, nombre: "Tenis Nautica cafes", descripcion: "Calzado para caminata", img: "./img/tenis1.jpg", precio: 2000, tiempoEntrega: "3-4 días", categoria: "Tenis", cantidad: 1 },
    { id: 14, nombre: "Tenis Nautica azules", descripcion: "Calzado para caminata", img: "./img/tenis2.jpg", precio: 2000, tiempoEntrega: "3-4 días", categoria: "Tenis", cantidad: 1 },
    { id: 15, nombre: "Tenis Reebok", descripcion: "Calzado para caminata", img: "./img/tenis3.jpg", precio: 2000, tiempoEntrega: "3-4 días", categoria: "Tenis", cantidad: 1 },
    { id: 16, nombre: "Tenis Crocs", descripcion: "Calzado para caminata", img: "./img/tenis4.jpg", precio: 2000, tiempoEntrega: "3-4 días", categoria: "Tenis", cantidad: 1 },

    // Limpieza
    { id: 17, nombre: "Limpiador de tenis", descripcion: "Pack de Limpiadores de Tenis y Lustradores de Zapatos", img: "./img/limpiadortenis.jpg", precio: 361, tiempoEntrega: "3-4 días", categoria: "Limpieza", cantidad: 1 },
    { id: 18, nombre: "Espuma de tenis", descripcion: "SNEAKERS KLEAN blanqueador y Espuma lavado en seco", img: "./img/espuma.jpg", precio: 342, tiempoEntrega: "3-4 días", categoria: "Limpieza", cantidad: 1 },
    { id: 19, nombre: "Cintas para tenis", descripcion: "Mythya 4 Pares de Cordones de Zapatos Planos, Agujetas para Tenis", img: "./img/cintas.jpg", precio: 152, tiempoEntrega: "3-4 días", categoria: "Limpieza", cantidad: 1 },
    { id: 20, nombre: "Quita pelusa", descripcion: "Quita Pelusa para Ropa Recargable, Removedor De Pelusa Electrico", img: "./img/quitapelusa.jpg", precio: 133, tiempoEntrega: "3-4 días", categoria: "Limpieza", cantidad: 1 },
];

const contenedorProductos = document.getElementById('contenedor-productos');
const botonesCategorias = document.querySelectorAll(".boton-menu");
const tituloPrincipal = document.getElementById('titulo-principal');
const numerito = document.getElementById('numerito');

let productosCarrito = JSON.parse(localStorage.getItem("productosCarritoo")) || [];

function cargarProductos(productosAMostrar) {
    contenedorProductos.innerHTML = "";

    productosAMostrar.forEach(producto => {
        const { id, nombre, descripcion, img, precio, categoria } = producto;
        const div = document.createElement("div");
        div.classList.add(`producto${categoria}`);

        let imagenClass = "producto-imagen";
        if (producto.categoria === "Pantalones") {
            imagenClass = "producto-imagenPantalon";
        } else if (producto.categoria === "Tenis") {
            imagenClass = "producto-imagenTenis";
        } else if (producto.categoria === "Limpieza") {
            imagenClass = "producto-imagen-limpiadores";
        }

        div.innerHTML = `
            <div class="producto">
                <img class="${imagenClass}" src="${img}" alt="${nombre}">
                <div class="producto-detalles">
                    <h3>${nombre}</h3>
                    <p class="descripcion">${descripcion}</p>
                    <p>$${precio}</p>
                    <button class="producto-agregar" id="${id}" aria-label="Agregar ${nombre} al carrito">Agregar</button>
                    <button class="producto-comprar" id="${id}" aria-label="Comprar ${nombre} ahora">Comprar Ahora</button>
                </div>
            </div>
            `;
        contenedorProductos.appendChild(div);
    });

    actualizarBotonesAgregar();
    comprarBoton();
}


//alerta

function mostrarAlertaPersonalizada(titulo, mensaje) {
    const alertaExistente = document.getElementById("alerta-personalizada");
    if (alertaExistente) alertaExistente.remove();

    const alertaContenedor = document.createElement("div");
    alertaContenedor.id = "alerta-personalizada";
    alertaContenedor.className = "alerta alerta-oculta";

    alertaContenedor.innerHTML = `
        <div class="alerta-contenido">
            <span class="cerrar-alerta" onclick="cerrarAlerta()">&times;</span>
            <h2>${titulo}</h2>
            <p>${mensaje}</p>
            <button class="botonAlerta" onclick="cerrarAlerta()">Aceptar</button>
        </div>
    `;

    document.body.appendChild(alertaContenedor);
    setTimeout(() => alertaContenedor.classList.remove("alerta-oculta"), 10);
}

function cerrarAlerta() {
    const alerta = document.getElementById("alerta-personalizada");
    if (alerta) {
        alerta.classList.add("alerta-oculta");
        setTimeout(() => alerta.remove(), 300);
    }
}

function actualizarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function agregarAlCarrito(e) {
    const idBoton = parseInt(e.currentTarget.id);
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productoAgregado) {
        const index = productosCarrito.findIndex(producto => producto.id === idBoton);
        if (index !== -1) {
            productosCarrito[index].cantidad++;
        } else {
            productoAgregado.cantidad = 1;
            productosCarrito.push(productoAgregado);
        }

        localStorage.setItem("productosCarritoo", JSON.stringify(productosCarrito));
        actualizarNumerito();

        // Llamar a la alerta personalizada para agregar al carrito
        mostrarAlertaPersonalizada("Producto agregado", `${productoAgregado.nombre} ha sido agregado al carrito.`);
    }
}

function comprarBoton() {
    const botonesComprar = document.querySelectorAll(".producto-comprar");
    botonesComprar.forEach(boton => {
        boton.addEventListener("click", function () {
            const idBoton = parseInt(boton.id);
            const producto = productos.find(producto => producto.id === idBoton);

            if (producto) {
                mostrarAlertaPersonalizada("Compra realizada", `¡Comprado con éxito!\n${producto.nombre}\nPrecio: $${producto.precio}`);
            }
        });
    });
}

function actualizarNumerito() {
    const totalCantidad = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = totalCantidad;
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(btn => btn.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id === "todos-productos") {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        } else {
            const categoria = e.currentTarget.id.toLowerCase();
            const productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() === categoria);

            tituloPrincipal.innerText = productosFiltrados[0].categoria;
            cargarProductos(productosFiltrados);
        }
    });
});

actualizarNumerito();
cargarProductos(productos);
