function saludoFestividad() {
  
    // Formateamos la Fecha, por ejemplo "2022-06-29" 
    var fechaHoy = new Date().toISOString().slice(0, 10);    
    
    // Colocamos la fecha formateada dentro de otra variable 
    var soloFechaHoy = fechaHoy;
  
    // Definimos las fechas festivas o fechas en donde se debe mostrar el Mensaje 
    var navidad = "2022-12-25";  
    var anionuevo = "2023-01-01";
    
    // Verificamos si la fecha es igual a la de Navidad y mostramos un mensaje 
    if (soloFechaHoy == navidad) {
      
        texto = "Feliz Navidad !";
        imagen = "img/presents.png"; 
    
    // Verificamos si la fecha es igual a la de Año Nuevo y mostramos un mensaje   
    } else if (soloFechaHoy == anionuevo) {
      
        texto = "Feliz Año Nuevo !";
        imagen = "img/happy-new-year.png";

    // Verificamos si la fecha es igual a la fecha actual (Hoy)   
    } else if (soloFechaHoy == soloFechaHoy) {
      
        texto = "Hoy " + soloFechaHoy + " es un día especial !";
        imagen = "img/food.png";
    
    // Si ninguna fecha coincide, entonces mostramos un mensaje por defecto   
    } else {
      
        texto = "Por el Momento no hay alguna Festividad";
        imagen = "img/logo.png";
      
    }

    // Enviamos el mensaje al elemento con id "mensajesaludo" 
    document.images["imagensaludo"].src = imagen;
    document.getElementById('mensajesaludo').innerHTML = texto; 
  
}
