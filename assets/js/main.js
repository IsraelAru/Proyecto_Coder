const body = document.getElementById("products");
const botonProducto = document.getElementById("agregarProducto");
const botonDeAgregarProducto = document.getElementById("botonAgregar");
const formulario = document.getElementById("formulario");
const nombreProducto = document.getElementById("nombre");
const imagenProducto = document.getElementById("image");
const precioProducto = document.getElementById("precio");
const stockProducto = document.getElementById("stock");
const cardContenido = document.getElementById("cart-container");

const Carrito = JSON.parse(localStorage.getItem("carrito")) || [];
class Articulo {
  constructor(nombre, image, precio, stock) {
    this.id = idRand();
    this.nombre = nombre;
    this.image = image;
    this.precio = precio;
    this.stock = stock;
  }
}

function idRand() {
  //Funcion para generar un id aleatorio
  return Math.floor(Math.random() * 90000) + 10000;
}

function ingresarArticulo() {
  let nombre = nombreProducto.value;
  let precio = Number(precioProducto.value);
  let stock = Number(stockProducto.value);
  let image = imagenProducto.value;

  let objetoAuxiliar = new Articulo(nombre, image, precio, stock);

  listaProductos.unshift(objetoAuxiliar);
  console.log(listaProductos);

  localStorage.setItem("productos", JSON.stringify(listaProductos));

  return objetoAuxiliar;
}

function creadoraDeCard() {
  listaProductos.forEach((element) => {
    let divProducto = document.createElement("div");

    divProducto.setAttribute("class", "card");
    divProducto.innerHTML = `
    <div class="card" style="width: 18rem">
      <img src="${element.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element.nombre}</h5>
        <p class="card-text">
          $${element.precio}
        </p>
        <p class="card-text">
          ID:${element.id}
        </p>
        <a href="#" class="btn btn-primary" id="${element.id}" >Agregar al Carrito</a>
      </div>
    </div>`;
    body.appendChild(divProducto);
  });
}

let seLogeo = localStorage.getItem("admin");

function dadoraDeEventosABoton() {
  const HTMLElementsBotones =
    document.getElementsByClassName("btn btn-primary");
  const ArrayBotones = Array.from(HTMLElementsBotones);
  ArrayBotones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      let producto = buscadoraDeProductos(e.target.id);
      Swal.fire({
        title: "¡Se añadio al carrito!",
        text: producto.nombre,
        imageUrl: producto.image,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
      agregadoraACarrito(producto);
    });
  });
}

function buscadoraDeProductos(id) {
  return listaProductos.find((el) => el.id == id);
}

function agregadoraACarrito(producto) {
  Carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(Carrito));
  creadoraDeCardsDeCarrito();
}
function creadoraDeCardsDeCarrito() {
  Carrito.forEach((producto) => {
    cardContenido.innerHTML += `
    <div class="card" style="width: 18rem">
      <img src="${producto.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">
          $${producto.precio}
        </p>
        <p class="card-text">
          ID:${producto.id}
        </p>
      </div>
    </div>`;
  });
}
if (!seLogeo) {
  alert("¡Debe iniciar sesión!");
  window.location = "../index.html";
}

let listaProductos = [
  {
    nombre: `Campera Inflada Hombre Con Capucha - Abrigadas Invierno 19"`,
    precio: 44645,
    id: idRand(),
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_718425-MLA72018184083_092023-F.webp",
  },
  {
    nombre: "Jean Clasico Rica Lewis Lona Gruesa",
    precio: 49732,
    id: idRand(),
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_748536-MLA85202062344_062025-F.webp",
  },
  {
    nombre: "Remera Danitex Algodón Peinado 24.1 Corta Redonda",
    precio: 6365,
    id: idRand(),
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_970684-MLA79462395654_102024-F.webp",
  },
  {
    nombre: "Jogging Friza Hombre Con Puño Wacky Pantalon Jogger",
    precio: 16600,
    id: idRand(),
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_885311-MLA77029111640_062024-F.webp",
  },
];

localStorage.setItem("products", JSON.stringify(listaProductos));

creadoraDeCard();

let estadoDelForm = false;

botonProducto.onclick = () => {
  if (estadoDelForm) {
    agregarProducto.innerText = "Agregar Producto";
    formulario.style.display = "none";
    estadoDelForm = false;
  } else {
    formulario.style.display = "flex";
    agregarProducto.innerText = "Cancelar";
    estadoDelForm = true;
  }
};

botonDeAgregarProducto.onclick = (e) => {
  e.preventDefault();
  document.getElementById("products").innerHTML = "";
  ingresarArticulo();

  nombreProducto.value = "";
  precioProducto.value = "";
  imagenProducto.value = "";
  stockProducto.value = "";

  creadoraDeCard();
};

dadoraDeEventosABoton();
