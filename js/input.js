const nombre = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const mensajeError = document.getElementById('parrafo')


form.addEventListener('submit', e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    mensajeError.innerHTML = ""
    if(nombre.value.length == 0) {
        warning +='No puedes dejar el campo name vacio <br>'
        entrar = true
    }
    if(!validateEmail.test(email.value)){
        warning += 'El correo no es valido @ .  <br>'
        entrar = true
    }
    if(message.value.length == 0) {
        warning += 'Rellene el campo mensaje <br>'
        entrar = true
    }

    if(entrar) {
        mensajeError.innerHTML = warning
    }else {
        alert('Eviado')
    }
})