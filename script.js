document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault(); // impede o envio real do formulário
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    this.reset(); // limpa o formulário
});
