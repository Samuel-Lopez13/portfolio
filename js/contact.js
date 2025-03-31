// Inicializar EmailJS
(function() {
    emailjs.init("J3b03lYdP9jtklpsj"); // Reemplazar con tu public key de EmailJS
})();

// Manejar el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mostrar estado de carga
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...';
    submitButton.disabled = true;

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Enviar email usando EmailJS
    emailjs.send('service_csgxpah', 'template_hj7gwrj', { // Reemplazar con tus IDs
        from_name: name,
        reply_to: email,
        message: message,
    })
    .then(function() {
        // Mostrar mensaje de éxito
        submitButton.innerHTML = '<i class="fas fa-check mr-2"></i> ¡Mensaje Enviado!';
        submitButton.classList.remove('bg-emerald-500', 'hover:bg-emerald-600');
        submitButton.classList.add('bg-green-500', 'hover:bg-green-600');
        
        // Limpiar el formulario
        document.getElementById('contact-form').reset();

        // Restaurar el botón después de 3 segundos
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.classList.remove('bg-green-500', 'hover:bg-green-600');
            submitButton.classList.add('bg-emerald-500', 'hover:bg-emerald-600');
            submitButton.disabled = false;
        }, 3000);
    })
    .catch(function(error) {
        // Mostrar mensaje de error
        submitButton.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i> Error al enviar';
        submitButton.classList.remove('bg-emerald-500', 'hover:bg-emerald-600');
        submitButton.classList.add('bg-red-500', 'hover:bg-red-600');

        // Restaurar el botón después de 3 segundos
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.classList.remove('bg-red-500', 'hover:bg-red-600');
            submitButton.classList.add('bg-emerald-500', 'hover:bg-emerald-600');
            submitButton.disabled = false;
        }, 3000);
    });
}); 