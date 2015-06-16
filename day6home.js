jQuery(document).ready(function() {


// 1
var e = 3;
var r = 4;

console.log(e + r);

// 2

var whiskeys = ['bourbon', 'rye', 'scotch']; 
var gins = ['straight', 'dry', 'extra dry'];

alert(whiskeys + ', ' + gins);

// 3

var guitarnames = ['Gibson', 'Fender', 'Schecter']
var Gibsons = ['Les Paul', 'SG', 'Flying V', 'ES-335', 'Explorer', 'Les Paul Jr.'];
var Fenders = ['Stratocaster', 'Telecaster', 'Jaguar', 'Jazzmaster', 'Coronado', 'Toronado'];
var Schecters = ['S-1 Custom', 'Ultra II', 'Ultra VI', 'Corsair', 'PT Fastback', 'Tempest'];
var guitars = [Gibsons, Fenders, Schecters]; 

console.log(guitarnames[2] + ' ' + guitars[2][3])
//outputs "Schecter Corsair" 
console.log(guitarnames[1] + ' ' + guitars[1][3])
//outputs "Fender Jazzmaster" 

// 4 

var number = 13; 

if (number < 10) {
	console.log("it's less that 10");
} else {
	console.log(number + ' ' + "is greater than 10");
}

// 5 

var pickGuitar = "Ibanez Artist"; 

if (pickGuitar == guitars[0][0]) {
	console.log("It is black.");
} else {
	console.log(pickGuitar + " is not a black guitar, my " + guitars[0][0] + " is.");
}

// 6 

function whatsMyName(name) {
	console.log(name);
}

whatsMyName("Jeff");

// 7 

function crashYourCar() {
	console.log("Not a good idea.");
}

crashYourCar();

// 8 

function whatDoor(chosen) {

	if (chosen === '1') {
		opinion = 'You win a Pet Monkey';
	} else if (chosen === '2') {
		opinion = 'You win a Pile of Wood';
	} else if (chosen === '3') {
		opinion = 'You win two Flowers';
	} else if (chosen === '4') {
		opinion = 'You win a New Boat';
	} else if (chosen === '5') {
		opinion = 'You win a Benign Tumor';
	} else {
		opinion = 'Please pick a number between 1 and 5'
	}
	alert(opinion);
}


whatDoor('5');







//-----------------------------------jQuery SHOW----------------------------





$(".div1").click( function() {
	$(".div1").fadeOut(1000)
});


$(".div2").click( function() {
	$(".div2").slideUp(1000)
});

$(".div3").click( function() {
	$(".div3").animate( {
  padding: '100',
} , 2000 );
});

$(".div4").click( function() {
	$(".div4").animate( {
  marginLeft: '500',
} , 2000 );
});

$(".div5").click( function() {
	$(".div5").animate( {
  fontSize: '.5em',
} , 2000 );
});

$(".div6").click( function() {
	$(".div6").animate( {
  fontSize: '5em',
} , 2000 );
});


$(".div7").click( function() {
	$(".div7").animate( {
  width: "20%",
} , 2000 );
});


$(".div8").click( function() {
	$(".div8").animate( {
  opacity: 0.3,
} , 2000 );
});

$(".div9").click( function() {
	$(".div9").animate( {
  marginLeft: '-1600px',
} , 2000 );
});

$(".div10").click( function() {
	$(".div10").animate( {
  fontSize: '5em',
} , 2000 );
});

$(".div10").click( function() {
	$(".div10").animate( {
  fontSize: '.5em',
} , 2000 );
});



});


//------------------------------Extra Credit-----------------------

//Give the img an ID 

//reference the ID and assign it a click event. 

//when the img is clicked make it flip upside down. 

//or 

//when the img is clicked make it replaced with a new img file that is just that same img flipped upside. 

//make the change happen slowly 

