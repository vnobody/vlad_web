/**
 * Created by Lenovo on 8.12.2014.
 */
var allowedPages = ["home", "gallery", "prices", "partners", "contact"];
function loadContentByHash(hash) {
    var filename = hash.substring(1).split("#");
    console.log(allowedPages);
    console.log(filename[0]);
    console.log($.inArray(filename, allowedPages));

    /*
    if ($.inArray(filename[0], allowedPages) === -1) {
        $("#content").load("home.html");
    } else {
        $("#content").load(filename + ".html");
    }
    */


    if (filename != "") {
        $("#content").load(filename + ".html");
    } else {
        $("#content").load("home.html");
    }

}

function loadContent() {

}

$(document).ready(function(){
    var url = window.location.hash;
    console.log(url);
    $("#header").load("header.html");
    loadContentByHash(url);
    $("#footer").load("footer.html");

    $("body").on("click", ".button", function() {
        var $this = $(this);
        loadContentByHash($this.attr("href"));
    });
});