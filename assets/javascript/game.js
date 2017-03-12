$( document ).ready(function() {

	var wins = 0;
	var losses = 0;
	var total = 0;
	var ranNum = 0;
	var redcrystal = 0;
	var bluecrystal = 0;
	var yellowcrystal = 0;
	var greencrystal = 0;
});

total = 0
$("total").html(0);

var ranNum = 0;

$("button").click(function(){
	start=true;
	// targetNum = Math.floor(Math.random()100*1);
	$("ranNum").html(targetNumber);

});
function score() {
	if (total === ranNum) {
		alert("You won!")
		wins++;
		restart();
	}
	if (total > ranNum) {
		alert("You lose!")
		losses++;
		restart(); 
	}

	}

function game() {

	
}










