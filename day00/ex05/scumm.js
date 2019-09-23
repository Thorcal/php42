$(document).ready(function(){

	action = null;
	var card;
	var chicken;
	if (sessionStorage.getItem("card") == "true")
	{
		console.log("card should disappear");
		sessionStorage.setItem("card", false);
		$(".card").css("visibility", "hidden");
	}
	chicken = sessionStorage.getItem("chicken");
	$('.tags').click(function(){
		$(".arrow-speak").css("visibility", "hidden");
		$(".arrow-grab").css("visibility", "hidden");
		$(".arrow-use").css("visibility", "hidden");
		$(".arrow-look").css("visibility", "hidden");
		$(".arrow-go").css("visibility", "hidden");
		if (this.id == "parler")
		{
			document.body.style.cursor = "url(cursors/chat.cur), auto";
			action = "parler";
			$(".arrow-speak").css("visibility", "visible");
		}
		else if (this.id == "prendre")
		{
			document.body.style.cursor = "url(cursors/grab.png), auto";
			action = "prendre";
			$(".arrow-grab").css("visibility", "visible");
		}
		else if (this.id == "utiliser")
		{
			document.body.style.cursor = "url(cursors/use.png), auto";
			action = "utiliser";
			$(".arrow-use").css("visibility", "visible");
		}
		else if (this.id == "regarder")
		{
			document.body.style.cursor = "url(cursors/look.png), auto";
			action = "regarder";
			$(".arrow-look").css("visibility", "visible");
		}
		else if (this.id == "avancer")
		{
			document.body.style.cursor = "url(cursors/go.png), auto";
			action = "avancer";
			$(".arrow-go").css("visibility", "visible");
		}
	})


	//Interaction

	$("#area").click(function()
	{
		if (action != null)
		{
			$('.interactable').click(function()
			{
				if (this.id == "talkable" && action == "parler")
				{
					$("#popup").css("visibility", "visible");
					$("#popup").css("color", "black");
					$("#popup").html("Hey ! <br/> C'est la premiere fois que je te vois ici ! Bienvenue a 42, Malheureusement pour toi, on est le 1er janvier, tu vas pas avoir grand chose a faire ici aujourd'hui..<br/><br/>Bon, je te laisse, j'ai mon printf a finir...");
				}
				else if (this.id == "lookable" && action == "regarder")
				{
					$("#popup").css("visibility", "visible");
					$("#popup").css("color", "black");
					$("#popup").html("Un ordinateur verrouille.");
				}
				else if (this.id == "reachable" && action == "avancer")
					window.location = "foodtruck.html";
				else if (this.id == "grabable" && action == "prendre")
				{
					$("#popup").css("visibility", "visible");
					$("#popup").css("color", "black");
					$("#popup").html("Carte etudiante ramassee.");
					card = true;
					sessionStorage.setItem("card", card);
					$(this).hide();
				}
				console.log("Chicken = " + chicken);
				if (this.id == "usable" && action == "utiliser" && chicken != "true")
				{
					$("#popup").css("visibility", "visible");
					$("#popup").css("color", "black");
					$("#popup").html('Norminet : "MEOW !" <br/> Norminet a l\'air d\'avoir faim !');
				}	
				else if (this.id == "usable" && action == "utiliser" && chicken == "true")
					window.location = "win.html";
			})
		}
	})
});