const userName = document.querySelector("[name=userName]")
const userLastN = document.querySelector("[name=userLastN]")
const userEmail = document.querySelector("[name=userEmail]")
const userPass = document.querySelector("[name=userPass]")
const userCategory = document.querySelector("[name=userCategory]")
const userImage = document.querySelector("[name=userImage]")
const buttonSubmit = document.querySelector("form.reservation")

const setErrors = (message, field, isError = true) => {
    if (isError) {
      field.classList.add("invalido");
      field.nextElementSibling.classList.add("error");
      field.nextElementSibling.innerText = message;
      
    } else {
      field.classList.remove("invalido");
      field.nextElementSibling.classList.remove("error");
      field.nextElementSibling.innerText = "";
    }
  }


let todoOk = [];


const validation = (message, e, campo) => {
    const field = e.target
    const fieldValue = e.target.value

    if (fieldValue.trim().length <= 1) {
        setErrors(message, field)
        todoOk = todoOk.filter((x) => {return x !== campo})
        console.log(todoOk)
    } else {
      setErrors("", field, false)
      valor = todoOk.filter((x) => {return x === campo})
        if (valor.length === 0){
          todoOk.push(campo)
          console.log(todoOk)
        }
        }
      }

const validateEmail = (e, campo="email2") => {
const field = e.target
const fieldValue = e.target.value
const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

console.log(regex.test(fieldValue))

if (fieldValue.trim().length > 5 && !regex.test(fieldValue) ) {
    setErrors("Un email valido por favor", field);
    valor = todoOk.filter((x) => {return x === campo})
} else {
  setErrors("", field, false);
  valor = todoOk.filter((x) => {return x === campo})
  if (valor.length === 0){
    todoOk.push(campo)
    console.log(todoOk)
}}
}

userPass.addEventListener("focus", (e,) => {
  const field = e.target
  field.nextElementSibling.innerHTML = "8 caracteres mínimo"
})

userPass.addEventListener("input",(e, campo="password") => {
  const field= e.target
  const fieldValue = e.target.value
  if (fieldValue.trim().length > 8){
    valor = todoOk.filter((x) => {return x === campo})
    if (valor.length === 0){
      todoOk.push(campo)
      console.log(todoOk)
      field.nextElementSibling.innerHTML = ""
  }}
  else {
      todoOk = todoOk.filter((x) => {return x !== campo})
      console.log(todoOk)
    field.nextElementSibling.innerHTML = "8 caracteres mínimo"  
  }
})

// Si la imagen sube bien, pushear al array todoOk.
userImage.addEventListener("change", (e, campo="img") => {
    const field = e.target;
    const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
    const allowedExt = ["jpg", "jpeg", "png", "gif"];
    if (!allowedExt.includes(fileExt)) {
      setErrors("", field);
      valor = todoOk.filter((x) => {return x === campo})
      if (valor.length === 0){
        todoOk.push(campo)
        console.log(todoOk)
    } else {
      setErrors("", field, false);
      valor = todoOk.filter((x) => {return x === campo})
        if (valor.length === 0){
          todoOk.push(campo)
    }
  }
}});

userName.addEventListener("blur", (e) => validation("El nombre es obligatorio y como mínimo debe tener 2 caracteres", e, "name" ))
userLastN.addEventListener("blur", (e) => validation("El apellido es obligatorio y como mínimo debe tener 2 caracteres", e, "lastName" ))
userEmail.addEventListener("blur", (e) => validation("El email es obligatorio", e, "email"))
userPass.addEventListener("blur", (e) => validation("La contraseña es obligatoria" ,e, "passowrd"))
userEmail.addEventListener("input",(e) => validateEmail(e,))

//para detener el boton de envio de formulario, utilice el array todoOk donde por cada validación correcta pushea el nombre del campo, entonces al terminar 
buttonSubmit.addEventListener("submit", (e) => {
  if(todoOk.length != 6) {
    e.preventDefault()
    console.log(1)
    document.querySelector(".formNotSend").innerText= "Debe completar su registro"
  }
})


