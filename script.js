// Aguarda o carregamento completo do DOM antes de executar
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portal de Tarefas do MBA carregado com sucesso!");

    // Seleciona todos os botões de "Abrir Projeto"
    const botoes = document.querySelectorAll('.btn-abrir');

    botoes.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            const nomeProjeto = botao.parentElement.querySelector('.nome-projeto').textContent;
            
            // Log para debug (ajuda na leitura crítica de código ensinada no Projeto 4)
            console.log(`Tentando abrir: ${nomeProjeto}`);
            
            // Feedback simples ao usuário
            // Importante para evitar o erro "Cannot GET" sem aviso prévio
            // conforme discutido nos riscos de alucinação e erros lógicos
            if (!botao.getAttribute('href')) {
                evento.preventDefault();
                alert(`O arquivo para o ${nomeProjeto} ainda não foi localizado.`);
            }
        });
    });
});