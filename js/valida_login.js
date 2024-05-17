const email = document.getElementById("email")
const pass = document.getElementById("password")
const parrafo = document.getElementById("warnings")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/
    parrafo.innerHTML = ""
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido, debe poner el dominio (.com, .hotmail, .outlook, etc) <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})