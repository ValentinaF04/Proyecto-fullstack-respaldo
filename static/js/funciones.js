
var usuarioLogueado = JSON.parse(sessionStorage.getItem('usuarioLogueado'));
var enlacesAuth = document.getElementById('enlacesAuth');

if (usuarioLogueado) {
    if (document.title.includes("Mi Perfil")) {
       
        enlacesAuth.innerHTML = `<li class="nav-item"><a class="btn btn-primary" href="#" onclick="cerrarSesion()">Cerrar Sesión</a></li>`;
    } else {
        
        enlacesAuth.innerHTML = `
            <li class="nav-item"><a class="nav-link" href="perfil.html">Mi Perfil</a></li>
            <li class="nav-item"><a class="btn btn-primary" href="#" onclick="cerrarSesion()">Cerrar Sesión</a></li>
        `;
    }
}

function cerrarSesion() {
    sessionStorage.removeItem('usuarioLogueado');
    window.location.href = 'index.html';
}


/* funcion del forms del contacto */
function enviarFormulario(evento) {
    evento.preventDefault(); 
    
    var nombre = document.getElementById('nombre').value;
    if (nombre == "") {
        alert("Por favor, escribe tu nombre.");
        return;
    }
    
    alert("¡Gracias por tu mensaje, " + nombre + "! Te contactaremos pronto.");
    
    document.getElementById('formulario-contacto').reset();
}


/* Funcion para logearse con usuario */
function manejarLogin(evento) {
    evento.preventDefault();
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;
    var divError = document.getElementById('divError');
    
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuarioEncontrado = null;

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].correo === correo && usuarios[i].password === password) {
            usuarioEncontrado = usuarios[i];
            break;
        }
    }

    if (usuarioEncontrado) {
        divError.innerHTML = '<div class="alert alert-success">¡Inicio de sesión exitoso! Redireccionando a tu perfil...</div>';
        sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
        setTimeout(function() {
            window.location.href = 'perfil.html';
        }, 2000);
    } else {
        divError.innerHTML = '<div class="alert alert-danger">Correo o contraseña incorrectos.</div>';
    }
}


/* Funcion de registro de usuario */
function manejarRegistro(evento) {
    evento.preventDefault();
    
    var username = document.getElementById('username').value;
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var divError = document.getElementById('divError');

    if (password !== confirmPassword) {
        divError.innerHTML = '<div class="alert alert-danger">Las contraseñas no coinciden.</div>';
        return;
    }

    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].correo === correo) {
            divError.innerHTML = '<div class="alert alert-danger">Ese correo ya está registrado.</div>';
            return;
        }
    }

    var nuevoUsuario = { id: Date.now(), username: username, correo: correo, password: password };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    divError.innerHTML = '<div class="alert alert-success">¡Registro exitoso! Redireccionando...</div>';
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
}


/* Funcion de CRUD usuario y vista usuario */
function cargarPerfilUsuario() {
    var usuario = JSON.parse(sessionStorage.getItem('usuarioLogueado'));
    if (!usuario) {
        window.location.href = 'login.html';
        return;
    }
    document.getElementById('view-username').innerText = usuario.username;
    document.getElementById('view-correo').innerText = usuario.correo;
    document.getElementById('edit-username').value = usuario.username;
    document.getElementById('edit-correo').value = usuario.correo;
}

function mostrarFormularioEdicion() {
    document.getElementById('vistaPerfil').classList.add('d-none');
    document.getElementById('edicionPerfil').classList.remove('d-none');
}

function ocultarFormularioEdicion() {
    document.getElementById('vistaPerfil').classList.remove('d-none');
    document.getElementById('edicionPerfil').classList.add('d-none');
}

function guardarCambios(evento) {
    evento.preventDefault();
    var nuevoUsername = document.getElementById('edit-username').value;
    var usuarioActual = JSON.parse(sessionStorage.getItem('usuarioLogueado'));
    
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === usuarioActual.id) {
            usuarios[i].username = nuevoUsername;
            break;
        }
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    usuarioActual.username = nuevoUsername;
    sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuarioActual));

    cargarPerfilUsuario();
    ocultarFormularioEdicion();
    document.getElementById('divMensaje').innerHTML = '<div class="alert alert-success">¡Perfil actualizado!</div>';
}

function eliminarCuenta() {
    if (confirm('¿Seguro que quieres borrar tu cuenta? No podrás recuperarla.')) {
        var usuarioActual = JSON.parse(sessionStorage.getItem('usuarioLogueado'));
        var usuarios = JSON.parse(localStorage.getItem('usuarios'));
        var usuariosRestantes = [];
        
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id !== usuarioActual.id) {
                usuariosRestantes.push(usuarios[i]);
            }
        }
        localStorage.setItem('usuarios', JSON.stringify(usuariosRestantes));
        
        sessionStorage.removeItem('usuarioLogueado');
        window.location.href = 'registro.html';
    }
}