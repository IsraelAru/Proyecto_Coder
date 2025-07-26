let carritoContainer = document.getElementById("cart-container");

const carritoCompleto = JSON.parse(localStorage.getItem("carrito")) || [];
carritoCompleto.forEach((producto) => {
  let prodCarrito = document.createElement("div");
  prodCarrito.innerHTML = `
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
  carritoContainer.appendChild(prodCarrito);
});
