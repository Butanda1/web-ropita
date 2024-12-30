let productosCarrito = JSON.parse(localStorage.getItem("productosCarritoo")) || [];

const carritoVacio = document.getElementById('vacio');
const carritoProductos = document.getElementById('carrito-productos');
const carritoAcciones = document.getElementById('carrito-acciones');
const carritoComprando = document.getElementById('comprando');
const total = document.getElementById('total');

function cargarProductos() {
    if (productosCarrito.length > 0) {
        carritoVacio.classList.add("disabled");
        carritoProductos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
        carritoComprando.classList.add("disabled");

        carritoProductos.innerHTML = ""; // Limpiar el contenedor

        productosCarrito.forEach(productoEscogido => {
            const { img, nombre, cantidad, precio, id } = productoEscogido;
            const div = document.createElement('div');
            div.classList.add("carrito-productos");

            
            let imagenClass = "carrito-producto-imagen";

            if(productoEscogido.precio === 3000){
                imagenClass = "carrito-producto-imagen-C";
            } else if (productoEscogido.precio === 1000) {
                imagenClass = "carrito-producto-imagen-C";
            } else if (productoEscogido.precio === 1800) {
                imagenClass = "carrito-producto-imagen-pantalon"
            } else if (productoEscogido.precio === 2000) {
                imagenClass = "carrito-producto-imagen-tenis"
            }
            

            div.innerHTML = `
                <div class="carrito-producto">
                    <img class="${imagenClass} " src="${img}" alt="">
                    <div class="carrito-producto-titulo">
                        <small>Título</small>
                        <h3>${nombre}</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>Cantidad</small>
                        <p>${cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>$${precio}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p>$${precio * cantidad}</p>
                    </div>
                    <button class="carrito-producto-eliminar" id="${id}"><img class="eliminarimg" src="./img/bote.png" alt=""></button>
                </div>
            `;

            carritoProductos.append(div);

            // Agregar el evento de eliminación
            div.querySelector('.carrito-producto-eliminar').addEventListener('click', function() {
                eliminarProducto(id);
            });
        });
        
    } else {
        carritoVacio.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoComprando.classList.add("disabled");
    }
    actualizarTotal();
}

function eliminarProducto(id) {
    productosCarrito = productosCarrito.filter(producto => producto.id !== id);
    localStorage.setItem("productosCarritoo", JSON.stringify(productosCarrito));
    
    mostrarAlertaPersonalizada("Producto eliminado", "El producto ha sido eliminado del carrito.");

          //reiniciado forzoso
        while (carritoProductos.firstChild) {
            carritoProductos.removeChild(carritoProductos.firstChild);
        }
    
        // Recargar productos
        cargarProductos();
        actualizarNumerito();
    
        setTimeout(() => window.location.reload(), 100); 
}

function vaciarCarrito() {
    // Mostrar alerta de confirmación
    mostrarConfirmacion("¿Estás seguro de que deseas vaciar el carrito?", "Esta acción eliminará todos los productos.", () => {
        localStorage.removeItem('productosCarritoo');
        productosCarrito.length = 0;
    
        mostrarAlertaPersonalizada("Carrito vaciado", "Todos los productos han sido eliminados del carrito.");

        while (carritoProductos.firstChild) {
            carritoProductos.removeChild(carritoProductos.firstChild);
        }
    
        // Recargar productos
        cargarProductos();
        actualizarNumerito();
    
        setTimeout(() => window.location.reload(), 100); 
    });
}

function actualizarTotal() {
    const contenedortotal = productosCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    total.innerText = `$${contenedortotal}`;
    return contenedortotal;
}

function comprarCarrito() {
    const totalCompra = actualizarTotal(); 

    // Mostrar alerta de confirmación
    mostrarConfirmacion("¿Estás seguro de que deseas realizar la compra?", `Total: $${totalCompra}`, () => {
        localStorage.removeItem('productosCarritoo');
        productosCarrito.length = 0;
        mostrarAlertaPersonalizada("Compra realizada", `¡Compra realizada con éxito!\nTotal: $${totalCompra}`);
        carritoVacio.innerText = "Muchas gracias por tu compra.😄";
        

        //reiniciado forzoso
        while (carritoProductos.firstChild) {
            carritoProductos.removeChild(carritoProductos.firstChild);
        }
    
        // Recargar productos
        cargarProductos();
        actualizarNumerito();
    
        setTimeout(() => window.location.reload(), 100); 
    });
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

//confirmacion de la alerta
function mostrarConfirmacion(titulo, mensaje, onConfirm) {
    const alertaExistente = document.getElementById("alerta-personalizada");
    if (alertaExistente) alertaExistente.remove();

    const alertaContenedor = document.createElement("div");
    alertaContenedor.id = "alerta-personalizada";
    alertaContenedor.className = "alerta alerta-oculta alerta-confirmacion"; // Clase para el estilo de confirmación

    alertaContenedor.innerHTML = `
        <div class="alerta-contenido">
            <span class="cerrar-alerta" onclick="cerrarAlerta()">&times;</span>
            <h2>${titulo}</h2>
            <p>${mensaje}</p>
            <button class="confirmar-boton" id="confirmar">Sí</button>
            <button class="confirmar-boton" onclick="cerrarAlerta()">No</button>
        </div>
    `;

    document.body.appendChild(alertaContenedor);
    setTimeout(() => alertaContenedor.classList.remove("alerta-oculta"), 10);

    // confirmar
    document.getElementById("confirmar").onclick = () => {
        cerrarAlerta();
        onConfirm();
    };
}

function cerrarAlerta() {
    const alerta = document.getElementById("alerta-personalizada");
    if (alerta) {
        alerta.classList.add("alerta-oculta");
        setTimeout(() => alerta.remove(), 300);
    }
}

// Cargar productos al inicializar
cargarProductos();
