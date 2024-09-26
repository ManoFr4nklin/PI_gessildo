const loginForm = document.getElementById('loginForm');
const mensagem = document.getElementById('mensagem');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Simulando a verificação de credenciais (substitua pela sua lógica real)
  if (email === 'admin@gmail.com' && senha === '123456') {
    // Credenciais válidas, redirecionar para outra página
    window.location.href = 'tela_prp/oi.html';
  } else {
    mensagem.textContent = 'Usuário ou senha inválidos.';
  }
});