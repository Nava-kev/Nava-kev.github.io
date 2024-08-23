document.addEventListener("DOMContentLoaded", function() {
    // Obtener el User-Agent del navegador
    var userAgent = navigator.userAgent;

    // Detectar si el visitante está usando un dispositivo móvil
    if (/mobile/i.test(userAgent)) {
        document.getElementById('contenido').innerHTML = "Estás visitando desde un dispositivo móvil. ¡Bienvenido!";
    } else {
        // Para usuarios de escritorio, se inicia la descarga automática de un archivo
        document.getElementById('contenido').innerHTML = "Estás visitando desde un dispositivo de escritorio. Iniciando descarga...";
        
        // Descargar un archivo automáticamente (por ejemplo, un archivo de texto)
        var link = document.createElement('a');
        link.href = 'archivo.txt'; //
        link.download = 'archivo.txt';
        link.click();
    }

    // Detectar si es una araña de buscador
    if (/bot|crawl|spider/i.test(userAgent)) {
        document.getElementById('contenido').innerHTML = "Contenido específico para arañas de buscadores.";
    }
});
