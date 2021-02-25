//Matteo


/***************************************
*   VARIABLES GLOBALES
************************************** */

let platMenu = ["Fondue bourguignone",
    "Courgettes farcies",
    "Couscous",
    "Falafels",
    "Poké bowl",
    "Buddha bowl",
    "Pizza",
    "Börek",
    "Köftes",
    "Pâtes au roquefort",]

let verif;
/***************************************
*   FONCTION EVENT
************************************** */
/**
 * Ajouter un plat au menu
 */

/**
 * 
 * @param {*} event contient tout ce qu'il y a dans l'event "au click"
 */
function ajoutPlat (event) {
    event.preventDefault(); // Empêche l'action par défaut de l'evenement ==> reload de la page
    let plat = document.querySelector("input[type=text]").value.trim(); //ajoute de la valeur entrée pas l'user
        
    
    //on vérifie qu'on essaie pas de faire manger du vide aux gens
    if (plat.length == 0) {
        alert("Je ne peux pas du rien ajouter au menu :(");
    } else {
        verifDoublon(); // on vérifie les doublons
        if (verif < 0) {
        alert(`"${plat}" bien ajouté(e) au menu ! On va se régaler devant un p'tit Seigneur des Anneaux !`);
        platMenu.push(plat); //ajout du plat dans le tableau des plats
        refreshMenu();
        } else {
            alert("Attention ! Il ne peut pas y avoir deux fois le même plat au menu !")
        }
    }

    document.querySelector("form").reset();
}

/**
 * Vérifier qu'un plat n'est pas présent deux fois
 */
function verifDoublon () {
    let verifPlat = document.querySelector("input[type=text]").value.trim(); // on reprend les données pour ne pas les écraser
    let verifPlatMenu = platMenu;

    verifPlat = verifPlat.toUpperCase(); // on passe tout en majuscule pour éviter les soucis de casse
    for(let i = 0; i < platMenu.length; i++){
        verifPlatMenu[i] = verifPlatMenu[i].toUpperCase();
    }
 
    verif = verifPlatMenu.indexOf(verifPlat); // on vérifie que le plat ne soit pas déjà dans la liste
}

/**
* Afficher le menu et le nombre de plats dans celui-ci
*/
function refreshMenu () {
    document.querySelector("#meals").innerHTML = `<h3>Il y a ${platMenu.length} plats au menu :</h3>`;
    document.querySelector("#meals").innerHTML += "<ul></ul>";
    for(let i = 0; i < platMenu.length; i++){
        document.querySelector("#meals ul").innerHTML += `<li>${platMenu[i]}</li>`
    }
}

/***************************************
*   CODE PRINCIPAL
************************************** */
//code qui s'exécute quand la page est chargée

document.addEventListener("DOMContentLoaded", function(){
    refreshMenu();

    document.querySelector("input[type=button").addEventListener("click", ajoutPlat)
});