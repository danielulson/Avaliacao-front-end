// Espera o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o formulário pelo ID
  const form = document.getElementById('form-contato');

  // Seleciona o elemento onde será exibido o feedback
  const feedback = document.getElementById('feedback');

  // Adiciona um ouvinte para o evento de envio do formulário
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio tradicional do formulário (recarregamento da página)

    // Captura os valores dos campos e remove espaços extras
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verifica se todos os campos foram preenchidos
    if (!nome || !email || !assunto || !mensagem) {
      feedback.textContent = 'Por favor, preencha todos os campos.';
      feedback.style.color = 'red';
      return;
    }

    // Valida o formato do e-mail com expressão regular
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      feedback.textContent = 'Por favor, insira um e-mail válido.';
      feedback.style.color = 'red';
      return;
    }

    // Verifica se a mensagem tem pelo menos 20 caracteres
    if (mensagem.length < 20) {
      feedback.textContent = 'A mensagem deve ter no mínimo 20 caracteres.';
      feedback.style.color = 'red';
      return;
    }

    // Se tudo estiver correto, exibe mensagem de sucesso e limpa o formulário
    feedback.textContent = 'Mensagem enviada com sucesso!';
    feedback.style.color = 'green';
    form.reset(); // Limpa todos os campos do formulário
  });
});
