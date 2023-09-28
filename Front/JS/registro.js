document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente

      // Validaciones
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const nombre = document.getElementById('nombre').value;
      const apellidoPaterno = document.getElementById('apellidoPaterno').value;
      const apellidoMaterno = document.getElementById('apellidoMaterno').value;
      const fechaNacimiento = document.getElementById('fechaNacimiento').value;
      const genero = document.getElementById('genero').value;
      const imgUploader = document.getElementById('#img-preview').src;

      if (username === '' || email === '' || password === '' || nombre === '' || apellidoPaterno === '' || apellidoMaterno === '' || fechaNacimiento === '' || genero === '' || !imgUploader) {
        alert('Por favor, complete todos los campos y seleccione una imagen de perfil.');
      } else {
        // Enviar el formulario al servidor aquí
        alert('Formulario enviado con éxito. (Simulado)');
        form.reset(); // Reiniciar el formulario después del envío
        document.getElementById('img-uploader').src = ''; // Borrar la previsualización de la imagen
      }

    });
  });

var loadFile = function(event) {
    var output = document.getElementById('#img-uploader');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };

  const imagePreview= document.getElementById('#img-preview');
  const imageUploader= document.getElementById('#img-uploader');
  const file='';
  imageUploader.addEventListener('change',(e)=>{
    file= e.target.files[0];
    console.file;
  });