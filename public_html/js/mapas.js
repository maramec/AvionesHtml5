/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var map;
function initialize() {
    var mapOptions = {
        zoom: 15
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);

            //Sacar nombre del sitio con google place    
            $.getJSON("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + position.coords.latitude + "," + position.coords.longitude + "&radius=50000&keyword=aviation+museum&sensor=false&key=AIzaSyBgR-YI1UM_5H2oEa2b92vx2M8VugLiIEs", function (result2) {
                var resultado2 = result2.results;
                var nombre = resultado2[0].name;
                $("#nombreMuseo").html('<p><strong>Nombre: </strong></p>' + nombre + '<br><br>');
            });
            
    //Mediante geolocalización de la que obtengo mi lat y long, y con la llamada al JSON obtengo el nombre de mi ciudad
            var i;
            var ciudad;
            $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false", function (result) {

                var resultado = result.results;
                for (i in resultado) {
                    if (resultado[i].types[0] === "locality" || resultado[i].types[0] === "administrative_area_level_3") {
                        ciudad = resultado[i].formatted_address;
                        break;
                    }
                }

                var marker = new google.maps.Marker({
                    map: map,
                    title: 'Museo'
                });

                //Gracias a haber encontrado la ciudad puedo realizar la busqueda con el geocode
                new google.maps.Geocoder().geocode({'address': 'Museo transporte aereo ' + ciudad}, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (!marker) {
                            marker = new google.maps.Marker({
                                map: map,
                                draggable: true
                            });
                        }

                        marker.setPosition(results[0].geometry.location);
                        map.setCenter(results[0].geometry.location);
                        map.setZoom(15);
                        $("#direccion").html('<p><strong>Direccion:</strong></p>'+results[0].formatted_address);

                    } else {
                        alert("Geocode was not successful for the following reason: " + status);
                    }
                });
            });


        }, function () {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
    
    
}

$("#searchFormMuseum").submit(function (event) {
        event.preventDefault();
        var my_search_city = $("input[name=search_city]").val();
        
        $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address=aeronautic+museum+"+my_search_city+"&sensor=false", function (result3) {
            
            var resultado3 = result3.results;
            if(result3.status!== "ZERO_RESULTS"){
            var dir3 = resultado3[0].formatted_address;
            
            var j=0;
            var encontrado=0;
            for(j in resultado3[0].types){
                if(resultado3[0].types[j]==="museum" || resultado3[0].types[j]==="establishment"){
                    encontrado=1;
                    break;
                }
            }
            if(encontrado===1){
                var marker = new google.maps.Marker({
                map: map,
                title: 'Museo'
            });
            
            marker.setPosition(resultado3[0].geometry.location);
                        map.setCenter(resultado3[0].geometry.location);
                        map.setZoom(13);
                        $("#direccion").html('<p><strong>Direccion:</strong></p>'+dir3);
                        //Como no se puede acceder al nombre se borra
                        $("#nombreMuseo").html('');
            }
            else{
                        $("#direccion").html('');
                        $("#nombreMuseo").html('There are no museums in or nearby '+my_search_city+'.');
                    }
                }
        else{
                        $("#direccion").html('');
                        $("#nombreMuseo").html('ERROR. Check your spelling');
        }            
                }
        );
    });

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
