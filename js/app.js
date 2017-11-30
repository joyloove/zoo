//variable que contiene todo los elementos con la clase animal
var image = document.getElementsByClassName('animal');

//variable que contiene el elemento alcual se le aplicará el evento
var select = document.getElementById('select');

//funcion a ejecutar cuando el usuario selecicone una opcion <option>
select.onchange = function() {
  //guardar en variable items las veces en las que se itera por images
  for (var i = 0; i < image.length; i++) {
    var items = image[i]

    //al seleccionar una opción se agrega la clase correspondiente y se quitan las restantes para evitar que se quede la última clase declarada (cascada CSS)
    if (select.value == 'sepia') {
      items.classList.add('sepia');
      items.classList.remove('negative-colors');
      items.classList.remove('white-black');
    } else if (select.value == 'white-black') {
      items.classList.add('white-black');
      items.classList.remove('negative-colors');
      items.classList.remove('sepia');
    } else if (select.value == 'negative-colors') {
      items.classList.add('negative-colors');
      items.classList.remove('white-black');
      items.classList.remove('sepia');
    } else if (select.value == 'original') {
      items.classList.remove('negative-colors');
      items.classList.remove('white-black');
      items.classList.remove('sepia');
    };
  };
};
