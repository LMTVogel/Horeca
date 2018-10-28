alert("Welkom bij Café {Curly Bracket's}");

function addingOrder() {
	var whichOrder = prompt('Welke bestelling wilt u toevoegen?')

	if (whichOrder == 'fris') {
		var fris = prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?')
	}
	if (whichOrder == 'bier') {
		var bier = prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?')
	}
 	if (whichOrder == 'wijn') {
 		var wijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?')
 	}
 	addingOrder();
}

addingOrder();