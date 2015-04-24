/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
 $.getJSON('json/nosotros.json',function(json){
    var j; 
    var arrayPersonas;
    arrayPersonas= json.nosotros;
   for(j in arrayPersonas){
    $("#micajita").append('<div class="col-sm-4 text-center">\
                        <img class="img-responsive" src="'+arrayPersonas[j].foto+'" alt="" >\
                        <h4>'+arrayPersonas[j].nombre+'</h4> \
                            <h6>'+arrayPersonas[j].titulacion+'</h6>\
         <p>'+arrayPersonas[j].discription+'</p>\
                        \
                    </div>');
   }  
     
     
 }); 
 $.getJSON("json/nosotros2.json",function(j){
    
    
    $("#text").html("<p>"+j.texto+"</p>");
   
    
});


  
});



    
    



