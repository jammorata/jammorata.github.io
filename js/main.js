(function () {
   'use strict';
   // this function is strict...
   var mi_imagen = document.getElementById('mi_imagen');
   mi_imagen.style = 'color: red';
   console.log('mi_imagen = ', mi_imagen.getAttribute('style'));
}());
