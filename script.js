function Person(nombre, email,clave){
    this.nombre = nombre
    this.email = email 
    this.clave = clave
}

// Administrador 

function Administador(nombre, email,clave,){  
    Person.call(this,nombre,email,clave)

}
// Metodos Administrador 
Administador.prototype.agregarProducto = function(){
    return `Hola has agregado un nuevo producto`
}
Administador.prototype.modificarProducto = function(){
    return `Has modificado el producto`
}

Administador.prototype.eliminarUsuario= function(){
    return `Has Eliminado usuario`
}

// Usuario
function Usuario (nombre,email,clave,puntosAcumulados){
    Person.call(this,nombre,email,clave)
    this.puntosAcumulados = puntosAcumulados

}

// Metodos de usuario 
Usuario.prototype.acumularPuntos = function(){
    return "Puntos acumulados "
}

Usuario.prototype.canjearPuntos = function(){
    return "Puntos Canjeados "
}

function Producto(nombre, puntosNecesarios, cantidadDisponible, stock,precio){
    this.nombre = nombre
    this.puntosNecesarios = puntosNecesarios 
    this.cantidadDisponible = cantidadDisponible 
    this.stock = stock 
    this.precio = precio

}

Producto.prototype.obtenerInfo = function(){
    return "Obtener informacion"
}

// ProductoFisico 

function ProductoFisico(nombre, puntosNecesarios, cantidadDisponible, stock,precio){
    Producto.call(this,nombre,puntosNecesarios,cantidadDisponible,stock,precio)

}

// Metodos ProductoFisico 
ProductoFisico.prototype = Object.create(Producto.prototype)
ProductoFisico.prototype.constructor = ProductoFisico

ProductoFisico.prototype.obtenerInfo = function(){
    return console.log(`Obtener informacion `)
}

ProductoFisico.prototype.actualizarStock = function(){
    return console.log("Actualizar Stock")
}

ProductoFisico.prototype.enviarProducto = function(){
    return console.log("Enviar producto")
}

// Producto Digital 

function ProductoDigital(nombre, puntosNecesarios, cantidadDisponible, stock,precio,url){
    Producto.call(this,nombre,puntosNecesarios,cantidadDisponible,stock,precio)
    this.url = url

}
// Metodos ProductoDigital
ProductoDigital.prototype = Object.create(Producto.prototype)
ProductoDigital.prototype.constructor = ProductoDigital


ProductoDigital.prototype.obtenerInfo = function(){
    return console.log(`Obtener informacion `)
}

ProductoDigital.prototype.descargar = function(){
    return console.log(`Descargar informacion`)
}

ProductoDigital.prototype.obtenerProductoEmail = function(){
    return console.log(`obtener informacion producto email`)
}

// Orden de Canje 

function OrdenDeCanje (usuario,nombre, puntosNecesarios, cantidadDisponible, stock,precio, fecha){
    Producto.call(this,nombre, puntosNecesarios, cantidadDisponible, stock,precio)
    this.usuario = usuario
    this.fecha = fecha

}

OrdenDeCanje.prototype.confirmarOrden = function(){
    return console.log("Desea confirmar la orden")
}

OrdenDeCanje.prototype.cancelarOrden = function(){
    return console.log("Cancelar orden")
}




