const emailInput = document.querySelector('#emailInput');
const resultMenseger = document.querySelector('#resultMenseger');
const emailForm = document.querySelector('#emailForm');

// Mensagem enquanto digita
emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();

    if (email.length < 5) {
        resultMenseger.textContent = "Digite mais caracteres...";
        resultMenseger.className = "text-orange-400 mt-2";
        // Limpa a validade personalizada para que a validação nativa possa funcionar
        emailInput.setCustomValidity(''); 
        return;
    }

    resultMenseger.textContent = "";
    resultMenseger.className = "";
    // Limpa a validade personalizada para que o formulário seja considerado válido
    emailInput.setCustomValidity(''); 
});

// Validação ao enviar
emailForm.addEventListener("submit", function (event) {
    // A validação nativa será executada antes do submit
    // Se o campo for inválido, o evento de submit será bloqueado
    // e o evento 'invalid' será disparado no input.
    if (!emailForm.checkValidity()) {
        event.preventDefault(); // Impede o envio se o formulário for inválido
    }
});

// Função de validação de email
const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
        return { isValid: false, message: "E-mail com formato inválido!" };
    }

    return { isValid: true, message: "E-mail válido!" };
};

// Evento para capturar a validação nativa
emailInput.addEventListener('invalid', function (event) {
    event.preventDefault(); // Impede o balão de erro padrão do navegador

    const email = emailInput.value.trim();
    const validationResult = validarEmail(email);
    
    // Define a mensagem no resultMenseger
    resultMenseger.textContent = validationResult.message;
    resultMenseger.className = "text-red-400 mt-2";
});

// Adiciona validação ao enviar para exibir mensagem de sucesso
emailForm.addEventListener("submit", function (event) {
    // Isso é necessário para exibir a mensagem de sucesso
    const email = emailInput.value.trim();
    const validationResult = validarEmail(email);

    if (validationResult.isValid) {
        resultMenseger.textContent = validationResult.message;
        resultMenseger.className = "text-green-400 mt-2";
    }
});