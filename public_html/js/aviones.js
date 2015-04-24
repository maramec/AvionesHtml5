/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).on('change','#tipoAviones',function(){
var arrayListaAviones;
    $("#iDbest_planes").html("");
    $.getJSON("json/aviones.json", function (result) {
        arrayListaAviones = result.bestplanes;
        for(var i in arrayListaAviones){
            if(arrayListaAviones[i].category === $('#tipoAviones').val()){
                for(var j in arrayListaAviones[i].planes){
                    $("#iDbest_planes").append(' <div class="col-lg-12">\
            <hr>\
            <h2 class="intro-text text-center">'+arrayListaAviones[i].planes[j].name+'\
            </h2>\
            <hr>\
            <img class="img-responsive img-border img-full" src="'+arrayListaAviones[i].planes[j].img+'">\
            <p><div align="justify">'+arrayListaAviones[i].planes[j].description+'</div></p>\
            </div>');
                }
            }
        }
    });
    });
    
$(document).ready(function () {
   var arrayListaAviones;
  
    $.getJSON("json/aviones.json", function (result) {
        arrayListaAviones = result.bestplanes;
        for(var i in arrayListaAviones){
            if(arrayListaAviones[i].category === $('#tipoAviones').val()){
                for(var j in arrayListaAviones[i].planes){
                    $("#iDbest_planes").append(' <div class="col-lg-12">\
            <hr>\
            <h2 class="intro-text text-center">'+arrayListaAviones[i].planes[j].name+'\
            </h2>\
            <hr>\
            <img class="img-responsive img-border img-full" src="'+arrayListaAviones[i].planes[j].img+'">\
            <p><div align="justify">'+arrayListaAviones[i].planes[j].description+'</div></p>\
            </div>');
                }
            }
        }
    });
});
