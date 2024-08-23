document.addEventListener("DOMContentLoaded", function() {
    // Obtener el User-Agent del navegador
    var userAgent = navigator.userAgent;

    // Llamada a la API de ipinfo.io para obtener la ubicación del usuario
    fetch('https://ipinfo.io/json?token=tu_token')
        .then(response => response.json())
        .then(data => {
            var country = data.country;

            // Mostrar contenido basado en el país
            if (country === 'US') {
                document.getElementById('contenido').innerHTML = "Lo siento, el acceso desde Estados Unidos está bloqueado.";
                return; // Bloquear más interacciones
            } else if (country === 'MX') {
                document.getElementById('contenido').innerHTML = "Bienvenido, usuario de México.";
            } else {
                document.getElementById('contenido').innerHTML = "Contenido para usuarios de otros países.";
            }

            // Comportamiento dependiendo del User Agent
            if (/mobile/i.test(userAgent)) {
                document.getElementById('contenido').innerHTML += "<br>Estás visitando desde un dispositivo móvil.";
            } else {
                document.getElementById('contenido').innerHTML += "<br>Estás visitando desde un dispositivo de escritorio. Iniciando descarga...";
                
                // Descargar un archivo automáticamente
                var link = document.createElement('a');
                link.href = 'archivo.txt'; // Asegúrate de que este archivo esté en tu repositorio
                link.download = 'archivo.txt';
                link.click();
            }

            // Comportamiento para arañas de buscadores
            if (/bot|crawl|spider/i.test(userAgent)) {
                document.getElementById('contenido').innerHTML = "Contenido específico para arañas de buscadores.";
            }
        })
        .catch(error => {
            console.error("Error al obtener la información de geolocalización:", error);
            document.getElementById('contenido').innerHTML = "No se pudo determinar su ubicación.";
        });
});
