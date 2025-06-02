const usuarioCorrecto = 'admin';
const contraseñaCorrecta = '1234';
const texto = 'Bienvenido a Indumentaria Coder\n1. Ingresar Articulo\n2. Ver Articulos\n3. Buscar Articulo\n4. Eliminar Articulo\n5. Control de Stock\n6. Salir\n '
let bandera = true;
let seLogeo = false;

const Articulos = [];

function idRand(){
    return Math.floor(Math.random() * 90000) + 10000;
}
console.log(idRand());

const creadoraDeArrayDeId = function () {
	const AuxArray = [];

	for (let i = 0; i < Articulos.length; i++) {
		AuxArray.push(Articulos[i].id)
	}

	return AuxArray;
}

function ingresoUsuario(usuario, contraseña){

    if(usuarioCorrecto === usuario && contraseñaCorrecta === contraseña){
        bandera = false;
        alert('Usuario y Contraseña ingresados correctamente!');
        seLogeo = true;
        
    }else{
        alert('Usuario o Contraseña no correctos');
        
    }
}

function ingresarArticulo(nombre, precio, stock){
    let objetoAuxiliar = {
        id: idRand(),
        nombre,
        precio,
        stock
    }
    
    Articulos.push(objetoAuxiliar);
}

function verArticulos(){
    let mensaje = '';
    if(Articulos.length == 0){
        
        alert('No se ingreso ningun articulo:');
        return;
    }
    for (let i = 0; i < Articulos.length; i++) {
        mensaje += `ID: ${Articulos[i].id}\nNombre del articulo: ${Articulos[i].nombre}\nPrecio del articulo: ${Articulos[i].precio}\nStock del articulo: ${Articulos[i].stock}\n`
    }
    alert(mensaje);
}

function buscadoraPorId(id){

     if(Articulos.length == 0){
        
        alert('No se ingreso ningun articulo:');
        return;
    }
    const auxArticulo = Articulos.find(Articulos => Articulos.id === id);

    if(auxArticulo == undefined){
        alert('ID ingresado incorrectamente!');
    }
    else{
        alert(`El articulo buscado es:\nID: ${auxArticulo.id}\nNombre del articulo: ${auxArticulo.nombre}\nPrecio del articulo: ${auxArticulo.precio}\nStock del articulo: ${auxArticulo.stock}\n`)
    }
}

function eliminarArticulo(id){

     if(Articulos.length == 0){
        
        alert('No se ingreso ningun articulo:');
        return;
    }
    const AuxArray = creadoraDeArrayDeId();
    let index = AuxArray.indexOf(id);
    if(index == -1){

        alert('ID ingresado incorrectamente!')
    
    }else{
    
        Articulos.splice(index, 1);
    
    }
}

function controlDeStock(id, stock){
    if(Articulos.length == 0){
        
        alert('No se ingreso ningun articulo:');
        return;
    }
    const AuxArray = creadoraDeArrayDeId();
    let index = AuxArray.indexOf(id);
    if(index == -1){

        alert('ID ingresado incorrectamente!')
    
    }else{
        
        Articulos[index].stock += stock;
    
    }
}

    for(let i = 0; i < 3; i++){
    
        let pedirUsuario = prompt('Ingrese usuario');
        let pedirContraseña = prompt('Ingrese contraseña');
    
        ingresoUsuario(pedirUsuario, pedirContraseña);
        if(seLogeo == true){
            break;
    }if(i == 2){
        let confirmacion = confirm("¿Quiere seguir intentando?");
        if (confirmacion){
            i=0;
        }
    }
}
    if(seLogeo){
        bandera = true;
        while(bandera){
        
            let menu = Number(prompt(texto));

        while(isNaN(menu)){
            alert("Ingrese numeros!");
            menu = Number(prompt(texto));
        }
        switch(menu){
            case 1:
                let nombre = prompt('Ingrese el nombre del articulo');
                let precio = prompt('Ingrese el precio');
                let stock = Number(prompt('Ingrese el stock'));
                ingresarArticulo(nombre, precio, stock);
                break;
            case 2:
                verArticulos();
                break;
            case 3:
                let idAux = Number(prompt('Ingrese el ID a buscar'));
                buscadoraPorId(idAux);
                break;
            case 4:
                let idAux2 = Number(prompt('Ingrese el ID a eliminar'));
                eliminarArticulo(idAux2);
                break;
            case 5:
                let idAux3 = Number(prompt('Ingrese el ID a buscar'));
                let auxStock = Number(prompt('Ingrese el stock a agregar/quitar'));
                controlDeStock(idAux3, auxStock);
                break;
            case 6:
                bandera = false;
                break;           
        }
    }

}
