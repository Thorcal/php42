$(document).ready(function(){


	action = null;

	var card = sessionStorage.getItem("card");
	console.log(card);
	var chicken;
	sessionStorage.setItem("chicken", false);

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
				if (this.id == "lookable" && action == "regarder")
				{
					$("#popup").css("visibility", "visible");
					$("#popup").css("color", "black");
					$("#popup").html("Des gens attendent leur commande du food truck.");
				}
				else if (this.id == "reachable" && action == "avancer")
					window.location = "scumm.html";
				else if (this.id == "talkable" && action == "parler")
				{
					$("#popup").css("visibility", "visible");
					$("#popup").css("color", "black");
					$("#popup").html("Passe ta carte s'il te plait !");
				}
				else if (this.id == "usable" && action == "utiliser" && card == "true")
				{
					$("#popup").css("visibility", "visible");
					$("#popup").css("color", "black");
					$("#popup").html("Passe ta carte s'il te plait !<br/><br/>Ok, tiens, ton sandwich au poulet !");
					chicken = true;
					sessionStorage.setItem("chicken", chicken);
				}
			})
		}
	})
});