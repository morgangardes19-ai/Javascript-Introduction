// Récupérer un élément avec un ID : 
// let firstSection = document.getElementById("firstSection");
// console.log(firstSection)

// Récupérer des éléments avec leur nom de balise :
// let divs = document.getElementsByTagName("div");
// console.log(divs);

// Récupérer des éléments avec leur nom de classe : 
// let secondDiv = document.getElementsByClassName("secondDiv");
// console.log(secondDiv);

// Ou plus simplement : Récuréper un OU des éléments grâce à un sélecteur CSS
// let firstSection = document.querySelector("#firstSection");
// console.log(firstSection);

// let divs = document.querySelectorAll("divs");
// console.log(divs);

// let secondDiv = document.querySelector(".secondDiv");
// console.log(secondDiv);

// Récupérer l'article et y créer une nouvelle div :
// let article = document.querySelector("article");

// let newDiv = document.createElement("div");
// newDiv.classList.add("test");


// article.appendChild(newDiv);


// /////////////////////// ECOUTEUR D'EVENEMENT ////////
let clickButton = document.querySelector(".clickButton");
let zoneAffichage = document.querySelector("#zoneAffichage");

clickButton.addEventListener("click", handleClickOnClickButton);

function handleClickOnClickButton() {
    // console.log("hello");
    let newDiv = document.createElement("div");
    newDiv.classList.add("divAfficher");

    zoneAffichage.appendChild(newDiv);

}

// ///// ECOUTEUR D'EVENEMENT SUR DES GROUPES ///////////
// Récupérer les éléments HTML grâce à quelque chose qu'ils ont en commun comme par exemple une class :
let divDOMs = document.querySelectorAll(".divDOMSuppr");
let zoneSuppression = document.querySelector("#zoneSuppression");

divDOMs.forEach(divDOM => {
    divDOM.addEventListener("click", handleClickOnDivDOM);
});

function handleClickOnDivDOM(evenement) {

    let divCliquer = evenement.target;
    
    zoneSuppression.removeChild(divCliquer);
}
