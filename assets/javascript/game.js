//initiatilize the game with HP for each player
var bulbasaurHP = 120;
var charmanderHP = 130;
var horseaHP = 140;
var pikachuHP = 150;
//print HP to page
$("#bulbasaurHPBench").text(bulbasaurHP);
$("#charmanderHPBench").text(charmanderHP);
$("#horseaHPBench").text(horseaHP);
$("#pikachuHPBench").text(pikachuHP);
//if you click on any one of the characters, you need to move it to the yourCharacter div
$(".cardBench").on("click", function () {
    $(this).attr("hidden", "");
    var firstClick = this;
    if (this === firstClick)
        $("#bulbasaurSelected").removeAttr("hidden");
})