const emailInput = document.querySelector('#emailInput')
const resultMenseger = document.querySelector('#resultMenseger')
const emailForm = document.querySelector('#emailForm')

emailForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const email = emailInput.value
    const isValid = validarEmail(email)
    if (isValid) {
        resultMenseger.textContent = "E-mail válido!"
        resultMenseger.className = "text-green-400 mt-2"
    } else {
        resultMenseger.textContent = "E-mail não é válido!"
        resultMenseger.className = "text-red-400 mt-2"
    }
})

const validarEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/
    return regex.test(email)
}