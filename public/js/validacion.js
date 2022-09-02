const userName = document.querySelector("[name=userName]")
const userLastN = document.querySelector("[name=userLastN]")
const userEmail = document.querySelector("[name=userEmail]")
const userPass = document.querySelector("[name=userPass]")
const userCategory = document.querySelector("[name=userCategory]")
const userImage = document.querySelector("[name=userImage]")

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


const validation = (message, e) => {
    const field = e.target
    const fieldValue = e.target.value

    if (fieldValue.trim().length === 0) {
        setErrors(message, field);
    } else {
      setErrors("", field, false);
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

userImage.addEventListener("change", (e) => {
    const field = e.target;
    const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
    const allowedExt = ["jpg", "jpeg", "png", "gif"];
    if (!allowedExt.includes(fileExt)) {
      setErrors("", field);
    } else {
      setErrors("", field, false);
    }
  });



userName.addEventListener("blur", (e) => validation("El nombre es obligatorio", e ))
userLastN.addEventListener("blur", (e) => validation("El apellido es obligatorio", e ))
userEmail.addEventListener("blur", (e) => validation("El email es obligatorio", e))
userPass.addEventListener("blur", (e) => validation("La contraseña es obligatoria" ,e))

userEmail.addEventListener("input", validateEmail)

