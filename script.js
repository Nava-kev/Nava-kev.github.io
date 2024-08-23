document.addEventListener("DOMContentLoaded", function() {
    var userAgent = navigator.userAgent;

    // Llamada a la API de ipinfo.io para obtener la ubicación del usuario
    fetch('https://ipinfo.io/json?token=tu_token')
        .then(response => response.json())
        .then(data => {
            var country = data.country;

            // Lista de países asiáticos
            const asianCountries = [
                'AF', 'AM', 'AZ', 'BH', 'BD', 'BT', 'BN', 'KH', 'CN', 'CY', 'GE', 'IN', 'ID', 'IR', 
                'IQ', 'IL', 'JP', 'JO', 'KZ', 'KW', 'KG', 'LA', 'LB', 'MY', 'MV', 'MN', 'MM', 'NP', 
                'KP', 'OM', 'PK', 'PH', 'QA', 'SA', 'SG', 'KR', 'LK', 'SY', 'TJ', 'TH', 'TL', 'TR', 
                'TM', 'AE', 'UZ', 'VN', 'YE'
            ];

            // Bloquear acceso para usuarios de Asia
            if (asianCountries.includes(country)) {
                document.getElementById('contenido').innerHTML = "Acceso bloqueado. El contenido no está disponible para usuarios en Asia.";
                return; // Termina la ejecución del script
            }

            // Comportamiento basado en el país
            if (country === 'US') {
                document.getElementById('contenido').innerHTML = "Lo siento, el acceso desde Estados Unidos está bloqueado.";
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
