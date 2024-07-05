document.addEventListener('DOMContentLoaded', () => {
    const preRegisteredUsers = [
        { email: 'xiancan333@gmail.com', password: '89328893' },
        { email: 'Elvis.ccs151@gmail.com', password: 'SiempreUnidos12' },
        { email: '76234082@certus.edu.pe', password: 'FelizxSiempre903' },
        { email: '74125288@certus.edu.pe', password: 'Soledad8932' },
        { email: '77071313@certus.edu.pe', password: 'Antisistemas3141' },
        { email: '72839383@certus.edu.pe', password: 'PowerRangers32' }
    ];

    preRegisteredUsers.forEach(user => {
        localStorage.setItem(user.email, JSON.stringify(user));
    });

    const loginForm = document.getElementById('loginForm');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        emailError.textContent = '';
        passwordError.textContent = '';

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (email.length > 50 || password.length > 50) {
            emailError.textContent = 'El email y la contraseña no pueden tener más de 50 caracteres';
            return;
        }

        const storedUser = localStorage.getItem(email);
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.password === password) {
                alert('Login exitoso');
                window.location.href = '/index.html';
            } else {
                passwordError.textContent = 'Contraseña incorrecta';
            }
        } else {
            emailError.textContent = 'El usuario no existe';
        }
    });
});



