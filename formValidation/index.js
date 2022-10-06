const form = document.querySelector('form')
const name =document.getElementById('name')
const email =document.getElementById('email')
const password =document.getElementById('password')
/* preventing reloading on submission  */

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInput()
})


/* to get the element id parent element and target its error class and give it a mssg, and error class and remove  */


const setError = (element, message) => {
    const input= element.parentElement;
    const error = input.querySelector('.error')
    error.textContent = message;
    input.classList.add('error')
    input.classList.remove('success')

}

/* to get  */
const setSuccess = element =>{
    const input= element.parentElement;
    const error = input.querySelector('.error')
    error.textContent=""
    input.classList.remove('success')
    input.classList.add('error')
}

// checking if the input is an email 
const validEmail = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.text(String(email).toLowerCase())

}
// trimming on the white spaces
const validatedInputs = () =>{
    const nameValue = name.value.trim() 
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()  
}
