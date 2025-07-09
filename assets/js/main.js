/* const texto =
  "Bienvenido a Indumentaria Coder\n1. Ingresar Articulo\n2. Ver Articulos\n3. Buscar Articulo\n4. Eliminar Articulo\n5. Control de Stock\n6. Salir\n ";
let bandera = true;
let seLogeo = false;

const Articulos = [];

class Articulo {
  constructor(nombre, precio, stock) {
    this.id = idRand();
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

function idRand() {
  return Math.floor(Math.random() * 90000) + 10000;
}
console.log(idRand());

const creadoraDeArrayDeId = function () {
  const AuxArray = [];

  for (let i = 0; i < Articulos.length; i++) {
    AuxArray.push(Articulos[i].id);
  }

  return AuxArray;
};

function ingresarArticulo(nombre, precio, stock) {
  let objetoAuxiliar = new Articulo(nombre, precio, stock);

  Articulos.push(objetoAuxiliar);
}

function verArticulos() {
  let mensaje = "";
  if (Articulos.length == 0) {
    alert("No se ingreso ningun articulo:");
    return;
  }
  for (let i = 0; i < Articulos.length; i++) {
    mensaje += `ID: ${Articulos[i].id}\nNombre del articulo: ${Articulos[i].nombre}\nPrecio del articulo: $${Articulos[i].precio}\nStock del articulo: ${Articulos[i].stock}\n`;
  }
  alert(mensaje);
}

function buscadoraPorId(id) {
  if (Articulos.length == 0) {
    alert("No se ingreso ningun articulo:");
    return;
  }
  const auxArticulo = Articulos.find((Articulos) => Articulos.id === id);

  if (auxArticulo == undefined) {
    alert("ID ingresado incorrectamente!");
  } else {
    alert(
      `El articulo buscado es:\nID: ${auxArticulo.id}\nNombre del articulo: ${auxArticulo.nombre}\nPrecio del articulo: $${auxArticulo.precio}\nStock del articulo: ${auxArticulo.stock}\n`
    );
  }
}

function eliminarArticulo(id) {
  if (Articulos.length == 0) {
    alert("No se ingreso ningun articulo:");
    return;
  }
  const AuxArray = creadoraDeArrayDeId();
  let index = AuxArray.indexOf(id);
  if (index == -1) {
    alert("ID ingresado incorrectamente!");
  } else {
    Articulos.splice(index, 1);
  }
}

function controlDeStock(id, stock) {
  if (Articulos.length == 0) {
    alert("No se ingreso ningun articulo:");
    return;
  }
  const AuxArray = creadoraDeArrayDeId();
  let index = AuxArray.indexOf(id);
  if (index == -1) {
    alert("ID ingresado incorrectamente!");
  } else {
    Articulos[index].stock += stock;
  }
}

for (let i = 0; i < 3; i++) {
  let pedirUsuario = prompt("Ingrese usuario");
  let pedirContraseña = prompt("Ingrese contraseña");

  ingresoUsuario(pedirUsuario, pedirContraseña);
  if (seLogeo == true) {
    break;
  }
  if (i == 2) {
    let confirmacion = confirm("¿Quiere seguir intentando?");
    if (confirmacion) {
      i = 0;
    }
  }
}
if (seLogeo) {
  bandera = true;
  while (bandera) {
    let menu = Number(prompt(texto));

    while (isNaN(menu)) {
      alert("Ingrese numeros!");
      menu = Number(prompt(texto));
    }
    switch (menu) {
      case 1:
        let nombre = prompt("Ingrese el nombre del articulo");
        let precio = prompt("Ingrese el precio");
        let stock = Number(prompt("Ingrese el stock"));
        ingresarArticulo(nombre, precio, stock);
        break;
      case 2:
        verArticulos();
        break;
      case 3:
        let idAux = Number(prompt("Ingrese el ID a buscar"));
        buscadoraPorId(idAux);
        break;
      case 4:
        let idAux2 = Number(prompt("Ingrese el ID a eliminar"));
        eliminarArticulo(idAux2);
        break;
      case 5:
        let idAux3 = Number(prompt("Ingrese el ID a buscar"));
        let auxStock = Number(prompt("Ingrese el stock a agregar/quitar"));
        controlDeStock(idAux3, auxStock);
        break;
      case 6:
        bandera = false;
        break;
    }
  }
}
 */
const body = document.getElementById("products");
const botonProducto = document.getElementById("agregarProducto");
const botonDeAgregarProducto = document.getElementById("botonAgregar");
const formulario = document.getElementById("formulario");
const nombreProducto = document.getElementById("nombre");
const imagenProducto = document.getElementById("image");
const precioProducto = document.getElementById("precio");
const stockProducto = document.getElementById("stock");

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
          ${element.precio}
        </p>
        <a href="#" class="btn btn-primary">Agregar al Carrito</a>
      </div>
    </div>`;
    body.appendChild(divProducto);
  });
}

let seLogeo = localStorage.getItem("admin");

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

localStorage.setItem("productos", JSON.stringify(listaProductos));

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
