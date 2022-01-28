"use strict";

/*********selection des balises html*********/
let piece = document.querySelector("#piece"); // bloc des boutons piece
let result = document.querySelector("#result"); //bloc resultat
let resultatImg = document.querySelector("#resultat"); //image de la piece tirée au hasard
let pile = document.querySelector(".pile"); //classe du bouton Pile
let face = document.querySelector(".face"); //classe du bouton Face
let relancer = document.querySelector(".relancer"); //classe du bouton relancer
let p = document.querySelector("p"); //texte invitant a clicker sur une piece
let p1 = document.querySelector("p1"); //texte indicant le choix d el'utilisateur
let p2 = document.querySelector("p2"); // texte indiquant si l'utilisateur a gagné ou perdu
let t; // variable de temps
//masque de la zone resultat
result.style.display = "none";

//initialisation du resultat aleatoire
let x = Math.floor(Math.random() * 10) % 2;
if (x == 0) {
	resultatImg.setAttribute("src", "img/piece6.png");
	resultatImg.setAttribute("title", "pile");
	resultatImg.setAttribute("alt", "côté pile de la pièce");
} else {
	resultatImg.setAttribute("src", "img/piece2.png");
	resultatImg.setAttribute("title", "face");
	resultatImg.setAttribute("alt", "côté face de la pièce");
}
/**********La piece tourne **********/
function pieceTourne() {
	result.style.display = "flex";
	resultatImg.setAttribute("src", "../img/piece0.png");
}

/**********************Utilisateur choisit pile**************/
function tirerPile() {
	//switch affichage
	piece.style.display = "none";
	p.style.display = "none";
	t = pieceTourne(); //nb image
	p1.textContent = "Vous avez choisi pile";
	//Affichage du resultat
	if (resultatImg.getAttribute("title") == "pile") {
		p2.textContent = "Vous avez gagné !!!";
		resultatImg.style.border = "10px solid green";
	} else {
		p2.textContent = "Vous avez perdu...";
		resultatImg.style.border = "10px solid red";
	}
}

/**********************Utilisateur choisit face****************/
function tirerFace() {
	//changement d'affichage
	piece.style.display = "none";
	p.style.display = "none";
	t = pieceTourne(); //nb image
	p1.textContent = "Vous avez choisi face";
	//Affichage du resultat
	if (resultatImg.getAttribute("title") == "face") {
		resultatImg.style.border = "10px solid green";
		p2.textContent = "Vous avez gagné !!!";
	} else {
		p2.textContent = "Vous avez perdu...";
		resultatImg.style.border = "10px solid red";
	}
}

//definition de la fonction relance
let relance = () => {
	location.reload();
};

//Mise en place des événements
pile.addEventListener("click", tirerPile);
face.addEventListener("click", tirerFace);
relancer.addEventListener("click", relance);
