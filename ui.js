function UI() {
	this.status = 0;
}

UI.setDay = function() {
	$('#day').text(dayOfYear);
}

UI.setFish = function() {
	$('#fishCaught').text(fish);
}

UI.setPenguins = function() {
	$('#Penguins').text(penguins.length);
}

UI.setPenguinCost = function(a) {
    $('#penguinCost').text(penguinCost);
}

UI.message = function(msg) {
    $("<div class='message'>" + msg + "</div>").prependTo("#messages").hide().slideDown();
    if ($("#messages > div").length > 3) {
        $("#messages div:last").remove();
        $("#messages div:last").fadeOut(2000, function() {
               
        });
    }
}

// To disable f5
function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); };
$(document).bind("keydown", disableF5);
$(document).on("keydown", disableF5);

$(function(){
    $('html').keydown(function(e){
       if (e.which == 119) {
            debug();
       }
    });
});