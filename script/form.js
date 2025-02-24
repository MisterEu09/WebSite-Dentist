document.getElementById('meuForm').addEventListener('submit', enviarWhatsApp);

function enviarWhatsApp(event) {
    event.preventDefault();
    const mensagem = document.getElementById('mensagem').value; // Agora está correto
    const numero = '5511917615997'; // Substitua pelo seu número
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}