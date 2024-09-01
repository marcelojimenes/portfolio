document.addEventListener('DOMContentLoaded', () => {
    // inicia o ouvinte do DOM exibindo a seção e manipulando o carrosel
    showSection(sectionIndex);
    handleCarousel()
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); //previne o comportamento padrão do evento de submit
    alert('Mensagem enviada com sucesso!'); //exibe o alerta de que o formulário foi enviado
    this.reset(); //finalizado, limpamos os campos do formulário após o alerta
});


