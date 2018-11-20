const priceFris = 2;
const priceBier = 2.50;
const priceWijn = 3.50;
const priceBitterballen8 = 5;
const priceBitterballen16 = 11;

var amountFris = 0;
var amountBier = 0;
var amountWijn = 0;
var amountBitterballen8 = 0;
var amountBitterballen16 = 0;

var drankje = "Niks";



	keuzeOrder();
	function keuzeOrder() {
		var keuzeBestelling = prompt("Wat wilt u bestellen? U kunt kiezen uit een drankje of een snack. Als u de bestelling wilt stoppen moet u stop invoeren.");
		if (keuzeBestelling == "stop") {
			betalen();
		}else  if (keuzeBestelling.toLowerCase() == "drankje") {
			bestelling();
		}else if (keuzeBestelling.toLowerCase() == "snack") {
			snack();
		}else {

			alert("Sorry, dit hebben wij niet. Wij verkopen wel drankjes en snacks.");
			keuzeOrder();
		}

	}

	function bestelling() {
		keuzeDrankje = prompt("Wat wilt u drinken? Wij hebben fris, bier en wijn. Type terug voor terug gaan.");

		if (keuzeDrankje.toLowerCase() == "fris" || keuzeDrankje.toLowerCase() == "wijn" || keuzeDrankje.toLowerCase() == "bier") {
			drankje = keuzeDrankje;
			orderAmount();
		}else if (keuzeDrankje.toLowerCase() == "stop") {
			betalen();
		}else if (keuzeDrankje.toLowerCase() == "terug") {
			keuzeOrder();
		}else {
			alert("Helaas, dit staat niet op het menu.");
			bestelling();
		}
	}

	function betalen() {
		alert("U heeft de bestelling gestopt.");
		document.write("Rekening: <br>");
		if (amountFris > 0) {
			document.write("U heeft " + amountFris + " fris besteld. De fris word dan " + amountFris*priceFris + " euro <br>");
		}
		if (amountBier > 0) {
			document.write("U heeft " + amountBier + " bier besteld. Het bier word dan " + amountBier*priceBier + " euro <br>");
		}
		if (amountWijn > 0) {
			document.write("U heeft " + amountWijn + " wijn besteld. De wijn word dan " + amountWijn*priceWijn + " euro <br>");
		}
			document.write("<br>");

		if (amountBitterballen8 > 0) {
			document.write("U heeft " + amountBitterballen8 + " schalen bitterballen besteld. Dit word dan " + amountBitterballen8*priceBitterballen8 + " euro <br>");
		}
		if (priceBitterballen16 > 0) {
			document.write("U heeft " + amountBitterballen16 + " schalen bitterballen besteld. Dit word dan " + amountBitterballen16*priceBitterballen16 + " euro <br>");
		}

		var totalPrice = (amountFris*priceFris) + (amountBier*priceBier) + (amountWijn*priceWijn) + (amountBitterballen8*priceBitterballen8) + (amountBitterballen16*priceBitterballen16);
		
		document.write("Totaal te betalen bedrag " + totalPrice + ",-");
	}

	function snack () {
		var amountBitterballen = prompt("U kunt kiezen uit 8 of 16 bitterballen. Type terug voor terug gaan.");

		if (amountBitterballen == "8") {
			var amountSchalen = parseInt(prompt ("Hoeveel schalen wilt u bestellen?") );
			amountBitterballen8 += amountSchalen
			keuzeOrder();
		}else if (amountBitterballen == "16") {
			var amountSchalen = parseInt(prompt ("Hoeveel schalen wilt u bestellen?") );
			amountBitterballen16 += amountSchalen
			snack();
		}else if (amountBitterballen == "terug") {
			keuzeOrder();
		}else if (amountBitterballen == "stop") {
			betalen();
		}else {
			alert("Dat staat niet op het menu.");
			snack();
		}

	}

	function orderAmount() {
		var amountDrink = parseInt(prompt ("Hoeveel " + drankje + " wilt u bestellen?") );

		if (isNaN (amountDrink) ) {
			alert("Dat is geen nummer.");
			orderAmount();
		}

		if (drankje == "fris") {
			amountFris += amountDrink;
		}else if (drankje == "bier") {
			amountBier += amountDrink;
		}else if (drankje == "wijn") {
			amountWijn += amountDrink;
		}
		keuzeOrder();
	}