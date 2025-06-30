const usuarioCorrecto = "admin";
const contraseñaCorrecta = "1234";

let boton = document.getElementById("botonLogin");
let user = document.getElementById("User");
let password = document.getElementById("Password");
let esAdmin = false;

//boton.addEventListener("click", ingresoUsuario());

boton.onclick = (e) => {
  e.preventDefault();
  ingresoUsuario();
};

function ingresoUsuario() {
  let usuario = user.value;
  let contraseña = password.value;

  if (usuarioCorrecto === usuario && contraseñaCorrecta === contraseña) {
    esAdmin = true;
    localStorage.setItem("admin", esAdmin);
    window.location = "./pages/home.html";
  } else {
    alert("Usuario o Contraseña no correctos");
    user.value = "";
    password.value = "";
  }
}
