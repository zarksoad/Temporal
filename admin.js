import {listUsers} from './script.js';

let listaUsuarios = document.getElementById("listaUsuarios")

listUsers.forEach(element =>{
    let li = document.createElement("li")
    let btn = document.createElement("button")
    let textUser = document.createTextNode(`Nombre :${element.nombre} correo ${element.email}  `)
    let btnText = document.createTextNode("Eliminar")
    btn.appendChild(btnText)
    li.appendChild(textUser)
    li.appendChild(btn)
    listaUsuarios.appendChild(li)

})

