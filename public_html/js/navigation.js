/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function nav(){

    $("#idNav").html ('<nav class="navbar navbar-default" role="navigation">\
        <div class="container">\
            <!-- Brand and toggle get grouped for better mobile display -->\
            <div class="navbar-header">\
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\
                    <span class="sr-only">Toggle navigation</span>\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                </button>\
                <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->\
                <a class="navbar-brand" href="index.html">Aviones CSS</a>\
            </div>\
            <!-- Collect the nav links, forms, and other content for toggling -->\
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
                <ul class="nav navbar-nav">\
                    <li><a href="index.html">Home</a>\
                        </li>\
                        <li>\
                            <a href="aviones.html">Planes</a>\
                        </li>\
                        <li><a href="noticias.html">News</a>\
                        </li>\
                        <li>\
                            <a href="museos.html">Museum</a>\
                        </li>\
                        <li><a href="nosotros.html">About</a>\
                        </li>\
                        <!-- quitado por falta de tiempo<li><a href="contact.html">Contact</a>\
                        </li>-->\
                </ul>\
            </div>\
            <!-- /.navbar-collapse -->\
        </div>\
        <!-- /.container -->\
    </nav>\
');
    
}

 $(document).ready(nav);
                
            
