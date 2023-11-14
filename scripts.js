document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('meuFormulario');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 

            if (validateForm()) {
                localStorage.setItem('nome', document.getElementById('nome').value);
                localStorage.setItem('email', document.getElementById('email').value);
                localStorage.setItem('mensagem', document.getElementById('mensagem').value);

                window.location.href = "confirmation.html";
            }
        });
    }

    function validateForm() {
        var nomeCompleto = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var mensagem = document.getElementById('mensagem').value;

        if (nomeCompleto.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return false;
        }

        if (!nomeCompleto.includes(' ')) {
            alert('Por favor, insira nome e sobrenome no campo Nome.');
            return false;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return false;
        }

        return true;
    }
});
