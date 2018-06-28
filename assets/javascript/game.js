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
    console.log(this);
    // why won't this syntax work :(
    if ($(this).attr("id") === "bulbasaurBench") {
        $("#bulbasaurSelected").removeAttr("hidden");
        $("#bulbasaurBench").attr("hidden","");
        $("#charmanderBench").attr("hidden","");
        $("#horseaBench").attr("hidden","");
        $("#pikachuBench").attr("hidden","");
        
        
    }
    if ($(this).attr("id") === "charmanderBench") {
        $("#charmanderSelected").removeAttr("hidden");
        $("#bulbasaurBench").attr("hidden","");
        $("#charmanderBench").attr("hidden","");
        $("#horseaBench").attr("hidden","");
        $("#pikachuBench").attr("hidden","");
    }
    if ($(this).attr("id") === "horseaBench") {
        $("#horseaSelected").removeAttr("hidden");
        $("#bulbasaurBench").attr("hidden","");
        $("#charmanderBench").attr("hidden","");
        $("#horseaBench").attr("hidden","");
        $("#pikachuBench").attr("hidden","");
    }
    if ($(this).attr("id") === "pikachuBench") {
        $("#pikachuSelected").removeAttr("hidden");
        $("#bulbasaurBench").attr("hidden","");
        $("#charmanderBench").attr("hidden","");
        $("#horseaBench").attr("hidden","");
        $("#pikachuBench").attr("hidden","");
    }
})                                                              