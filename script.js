const form = document.getElementById('contact-form');
const messageElement = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);   

    const data = Object.fromEntries(formData.entries());

    fetch('processa_form.php',   
 {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        messageElement.textContent = data.message;
    })
    .catch(error => {
        console.error('Erro ao enviar o formulário:', error);
        messageElement.textContent = 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.';
    });
});