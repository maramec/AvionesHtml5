/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cargarPortada() {
    $("#portada").load('portada.html');
}

var fotos;
var textbusqueda = "aviones históricos";

function cargarVideos() {
    $.getJSON('json/videos.json', function (result) {

        var j;
        var videos = result.videos;

        for (j in videos) {
            $("#idVideos").append('<div class="row">\
            <div class="box">\
                <div class="col-lg-12">\
                    <hr>\
                    <h2 class="intro-text text-center">' + result.videos[j].titulo + '\
                    </h2>\
                    <hr>\
                    <div class="js-video [vimeo, widescreen]">\
  <iframe width="560" height="315" src="' + result.videos[j].video_url + '" frameborder="0" allowfullscreen></iframe>\
</div>\
                    <hr class="visible-xs">\
                    ' + result.videos[j].descripcion + '\
                </div>\
            </div>\
        </div>');
        }

    });
}


function cargarFotos() {

    //assign your api key equal to a variable
    var apiKey = 'b8064489154fb1c0e09ec34fd323acdd';
    var tag = "aviones históricos,warplanes,historic planes, wwii";
    var numeroFotos = 10;
    $.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' + apiKey + '&per_page=' + numeroFotos + '&text=' + textbusqueda + '&format=json&&nojsoncallback=1', function (data) {

        fotos = data.photos.photo;
        //console.log(fotos);
        var i;
        $("#cajaFotos").empty();
        for (i in fotos) {
            //                $("#cahaFotos").append("prueba"+i);
            $("#cajaFotos").append('<div class="col-lg-12 text-center">\
                        <h2>' + fotos[i].title + '</h2>\
                        <img class="img-responsive img-border img-full" src="https://farm' + fotos[i].farm + '.staticflickr.com/' + fotos[i].server + '/' + fotos[i].id + '_' + fotos[i].secret + '_c.jpg"></div>');

        }
    });

}



$('.opciones_drop_foto').click(function () {
    $('.opciones_drop_foto').removeClass('selected');
    $(this).addClass('selected');
    textbusqueda = $(this).text();
    $('#dropbdow_button').val($(this).text());
    $('#dropbdow_button').text($(this).text());
});
$("#botonCargarFotos").click(cargarFotos);

$(document).ready(function () {

    cargarPortada();
    cargarVideos();



});
