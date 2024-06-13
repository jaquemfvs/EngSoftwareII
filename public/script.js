document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Aqui você pode adicionar a lógica de autenticação, por exemplo, enviando os dados para um servidor.
    console.log('Email:', email);
    console.log('Senha:', password);
    
    alert('Login realizado com sucesso!');
});