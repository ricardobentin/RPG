//initiatilize the game with HP for each player
var bulbasaurHP = 120;
var charmanderHP = 130;
var horseaHP = 140;
var pikachuHP = 150;
//print HP to page
$("#bulbasaurHPBench").text(bulbasaurHP);
$("#bulbasaurHPSelected").text(bulbasaurHP);
$("#bulbasaurHPEnemy").text(bulbasaurHP);
$("#bulbasaurHPDefender").text(bulbasaurHP);
$("#charmanderHPBench").text(charmanderHP);
$("#charmanderHPSelected").text(charmanderHP);
$("#charmanderHPEnemy").text(charmanderHP);
$("#charmanderHPDefender").text(charmanderHP);
$("#horseaHPBench").text(horseaHP);
$("#horseaHPSelected").text(horseaHP);
$("#horseaHPEnemy").text(horseaHP);
$("#horseaHPDefender").text(horseaHP);
$("#pikachuHPBench").text(pikachuHP);
$("#pikachuHPSelected").text(pikachuHP);
$("#pikachuHPEnemy").text(pikachuHP);
$("#pikachuHPDefender").text(pikachuHP);
//if you click on any one of the characters, you need to move it to the yourCharacter div
$(".cardBench").on("click", function () {
    if ($(this).attr("id") === "bulbasaurBench") {
        $("#bulbasaurSelected").removeAttr("hidden");
        $("#bulbasaurBench").attr("hidden", "");
        $("#charmanderBench").attr("hidden", "");
        $("#horseaBench").attr("hidden", "");
        $("#pikachuBench").attr("hidden", "");
        $("#bulbasaurEnemy").attr("hidden", "");

    }
    if ($(this).attr("id") === "charmanderBench") {
        $("#charmanderSelected").removeAttr("hidden");
        $("#bulbasaurBench").attr("hidden", "");
        $("#charmanderBench").attr("hidden", "");
        $("#horseaBench").attr("hidden", "");
        $("#pikachuBench").attr("hidden", "");
        $("#charmanderEnemy").attr("hidden", "");
    }
    if ($(this).attr("id") === "horseaBench") {
        $("#horseaSelected").removeAttr("hidden");
        $("#bulbasaurBench").attr("hidden", "");
        $("#charmanderBench").attr("hidden", "");
        $("#horseaBench").attr("hidden", "");
        $("#pikachuBench").attr("hidden", "");
        $("#horseaEnemy").attr("hidden", "");
    }
    if ($(this).attr("id") === "pikachuBench") {
        $("#pikachuSelected").removeAttr("hidden");
        $("#bulbasaurBench").attr("hidden", "");
        $("#charmanderBench").attr("hidden", "");
        $("#horseaBench").attr("hidden", "");
        $("#pikachuBench").attr("hidden", "");
        $("#pikachuEnemy").attr("hidden", "");
    }
})
$(".cardEnemyBench").on("click", function () {
    if ($(this).attr("id") === "bulbasaurEnemy") {
        $("#bulbasaurDefender").removeAttr("hidden");
        $("#bulbasaurEnemy").attr("hidden", "");
        $("#charmanderEnemy").attr("hidden", "");
        $("#horseaEnemy").attr("hidden", "");
        $("#pikachuEnemy").attr("hidden", "");
    }
    if ($(this).attr("id") === "charmanderEnemy") {
        $("#charmanderDefender").removeAttr("hidden");
        $("#bulbasaurEnemy").attr("hidden", "");
        $("#charmanderEnemy").attr("hidden", "");
        $("#horseaEnemy").attr("hidden", "");
        $("#pikachuEnemy").attr("hidden", "");
    }
    if ($(this).attr("id") === "horseaEnemy") {
        $("#horseaDefender").removeAttr("hidden");
        $("#bulbasaurEnemy").attr("hidden", "");
        $("#charmanderEnemy").attr("hidden", "");
        $("#horseaEnemy").attr("hidden", "");
        $("#pikachuEnemy").attr("hidden", "");
    }
    if ($(this).attr("id") === "pikachuEnemy") {
        $("#pikachuDefender").removeAttr("hidden");
        $("#bulbasaurEnemy").attr("hidden", "");
        $("#charmanderEnemy").attr("hidden", "");
        $("#horseaEnemy").attr("hidden", "");
        $("#pikachuEnemy").attr("hidden", "");
    }
})                                                     