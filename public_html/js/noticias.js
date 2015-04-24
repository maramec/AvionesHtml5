/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cargarNoticia(titulo, texto, fecha, url) {
    fecha = fecha.substring(0, fecha.length - 10);
    if (texto === null) {
        texto = "News item only available for NY Times subscribers";
    }
    $("#idNoticias").append('<div class="col-lg-12 text-center">\
                        <h2>' + titulo + '\
                            <br>\
                            <small>' + fecha + '</small>\
                        </h2>\
                        <p>' + texto + '</p>\
                        <a href="' + url + '" class="btn btn-default btn-lg" target="_blank">Read full article</a>\
                        <hr>\
                    </div>');

}



$("#searchForm").submit(function (event) {
    event.preventDefault();
    var my_search_words = $("input[name=search_keywords]").val();
    var my_begin_date = $("input[name=begin_date]").val();
    var my_end_date = $("input[name=end_date]").val();
    var arrayNoticias;
    var i;
    var regex = /[0-9]{8}/;
    if(regex.test(my_begin_date) && regex.test(my_end_date)){
    // NYTimes API: words separated by '+'
    my_search_words = my_search_words.replace(/ /g, "+");
   
    $.getJSON("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + my_search_words + "&begin_date=" + my_begin_date + "&end_date=" + my_end_date + "&api-key=b1e8bdbc3fa9841be66f9cb3bab690b7%3A4%3A70045411", function (result) {
        if(result){
        arrayNoticias = result.response.docs;
        
        if (typeof arrayNoticias === 'undefined' || arrayNoticias.length <= 0) {
            $("#idNoticias").html('<div class="col-lg-12 text-center">\
                    No news items found!!!\
                    <img src="http://media.tumblr.com/tumblr_lzkdapaolW1r6jytk.gif"></div>');
        } else {
            $("#idNoticias").html('<div class="col-lg-12 text-center">\
                    </div>');
            for (i in arrayNoticias) {

                cargarNoticia(arrayNoticias[i].headline.main, arrayNoticias[i].lead_paragraph, arrayNoticias[i].pub_date, arrayNoticias[i].web_url);

            }
        }
    }else{
        $("#idNoticias").html('<div class="col-lg-12 text-center">\
                    No news items found!!!\
                    <img src="http://media.tumblr.com/tumblr_lzkdapaolW1r6jytk.gif"></div>');
    }

    });
    }else{
        $("#idNoticias").html('<div class="col-lg-12 text-center">\
                    Date format incorrect!!! YYYYMMDD\
                    <img src="http://media.tumblr.com/tumblr_lzkdapaolW1r6jytk.gif"></div>');
    }
});

$(document).ready(function () {
    var arrayNoticias;
    var i;
    $.getJSON("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Spitfire+Supermarine&begin_date=19300101&end_date=19600101&api-key=<INSERT NYTIMES API KEY HERE>", function (result) {
        arrayNoticias = result.response.docs;
        $("#idNoticias").html('<div class="col-lg-12 text-center">\
                    </div>');

        for (i in arrayNoticias) {

            cargarNoticia(arrayNoticias[i].headline.main, arrayNoticias[i].lead_paragraph, arrayNoticias[i].pub_date, arrayNoticias[i].web_url);

        }


    });
});
