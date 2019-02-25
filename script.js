
/*****************
=== FEATURE 1 ====
******************/

footer = document.getElementsByTagName("footer")[0];
console.log(footer);

//1
footer.addEventListener("click", function(){
	console.log("clique");
});

//1-bis
let numberClick = 1
footer.addEventListener("click", function(){
	console.log("clic numéro " + numberClick);
	numberClick ++;
});



/*****************
=== FEATURE 2 ====
******************/

let navbarToggle = document.getElementsByClassName("navbar-toggler")[0];
let navbarHeader = document.getElementById("navbarHeader");


navbarToggle.addEventListener("click", function(){
	navbarHeader.classList.toggle("collapse");
});

/*****************
=== FEATURE 3 ====
******************/

let editBtn1 = document.querySelectorAll(".btn-group .btn")[1];
let firstCard = document.querySelectorAll(".card")[0]

editBtn1.addEventListener("click", function(){
	firstCard.classList.add("text-danger");
});

/*****************
=== FEATURE 4 ====
******************/

let editBtn2 = document.querySelectorAll(".btn-group")[1].getElementsByClassName('btn')[1];
let secondCard = document.querySelectorAll(".card")[1]

editBtn2.addEventListener("click", function(){
	if (secondCard.style.color === 'green'){ 
			secondCard.style.color = '' ; 
	}
	else {
		secondCard.style.color = 'green'
	}
});

/*****************
=== FEATURE 5 ====
******************/

let navbar = document.getElementsByClassName('navbar')[0];
console.log(navbar);

navbar.addEventListener("dblclick", function(){
	stylesheetBS = document.querySelectorAll('link[rel=stylesheet][href~="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]')[0];
	if (stylesheetBS.disabled){
		stylesheetBS.disabled = false;
	}
	else{
		stylesheetBS.disabled = true;
	}	
});

/*****************
=== FEATURE 6 ====
******************/


let allCardsOnPage = document.querySelectorAll('.card');


let reduceSize = function(card){
	card.getElementsByTagName('img')[0].style.width = '20%'
}

let hideText = function(card){
	card.getElementsByClassName('card-text')[0].style.display = 'none';
} 

let growSize = function(card){
	card.getElementsByTagName('img')[0].style.width = '100%'
}

let showText = function(card){
	card.getElementsByClassName('card-text')[0].style.display = 'block';
} 


allCardsOnPage.forEach(function(card,index){
	
	card.getElementsByTagName('button')[0].addEventListener('mouseover', function(){
		
		if(card.getElementsByClassName('card-text')[0].style.display === 'none'){
			growSize(card);
			showText(card);
		}
		else{
			reduceSize(card);
			hideText(card);
		}
	});
});
