const userEmail = document.querySelector("[name=userEmail]")
const userPass = document.querySelector("[name=userPass]")

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

    if (fieldValue.trim().length === 0) {
        setErrors(message, field);
        todoOk = todoOk.filter((x) => {return x !== campo})
        console.log(todoOk)
    } else {
      setErrors("", field, false);
      valor = todoOk.filter((x) => {return x === campo})
        if (valor.length === 0){
          todoOk.push(campo)
          console.log(todoOk)
        }
        }
      }

const validateEmail = (e) => {
const field = e.target
const fieldValue = e.target.value
const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

console.log(regex.test(fieldValue))

if (fieldValue.trim().length > 5 && !regex.test(fieldValue) ) {
    setErrors("Please enter a valid email", field);
} else {
  setErrors("", field, false);
}
}

userPass.addEventListener("focus", (e) => {
  const field = e.target
  field.nextElementSibling.innerHTML = "8 caracteres mínimo"
})

userPass.addEventListener("input",(e) => {
  const field= e.target
  const fieldValue = e.target.value
  if (fieldValue.trim().length > 8)
  {
    field.nextElementSibling.innerHTML = ""
  }
  else {
    field.nextElementSibling.innerHTML = "8 caracteres mínimo"  
  }
})



userEmail.addEventListener("blur", (e) => validation("El email es obligatorio", e, "email"))
userPass.addEventListener("blur", (e) => validation("La contraseña es obligatoria" ,e, "passowrd"))
userEmail.addEventListener("input", validateEmail)

//para detener el boton de envio de formulario, utilice el array todoOk donde por cada validación correcta pushea el nombre del campo, entonces al terminar 
buttonSubmit.addEventListener("submit", (e) => {
  if(todoOk.length > 0) {
    e.preventDefault()
    console.log(1)
    document.querySelector(".formNotSend").innerText= "Debe completar su registro"
  }
})