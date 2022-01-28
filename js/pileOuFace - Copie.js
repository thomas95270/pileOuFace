"use strict";

//selection des balises html
let initial = document.querySelector("#initial");
let boutons = document.querySelector("#boutons");
let result = document.querySelector("#result");
let resultatImg = document.querySelector("#resultat");
let pile = document.querySelector(".pile");
let face = document.querySelector(".face");
let rejouer = document.querySelector(".rejouer");
let p1 = document.querySelector("p1");
let p2 = document.querySelector("p2");

//masque de la zone resultat
result.style.display = "none";

//initialisation du resultat aleatoire
let x = Math.floor(Math.random() * 10) % 2;
if (x == 0) {
	resultatImg.setAttribute("src", "img/tail.png");
	resultatImg.setAttribute("title", "pile");
	resultatImg.setAttribute("alt", "côté pile de la pièce");
} else {
	resultatImg.setAttribute("src", "img/face.png");
	resultatImg.setAttribute("title", "face");
	resultatImg.setAttribute("alt", "côté face de la pièce");
}

//Utilisateur choisit pile
let tirerPile = () => {
	initial.style.display = "none";
	boutons.style.display = "none";
	result.style.display = "flex";
	p1.textContent = "Vous avez choisi pile";
	if (resultatImg.getAttribute("title") == "pile") {
		p2.textContent = "Vous avez gagné !!!";
	} else {
		p2.textContent = "Vous avez perdu...";
	}
};

//Utilisateur choisit face
let tirerFace = () => {
	initial.style.display = "none";
	boutons.style.display = "none";
	result.style.display = "flex";
	p1.textContent = "Vous avez choisi face";
	if (resultatImg.getAttribute("title") == "face") {
		p2.textContent = "Vous avez gagné !!!";
	} else {
		p2.textContent = "Vous avez perdu...";
	}
};

//definition de la fonction relance
let relance = () => {
	location.reload();
};

pile.addEventListener("click", tirerPile);
face.addEventListener("click", tirerFace);
rejouer.addEventListener("click", relance);
