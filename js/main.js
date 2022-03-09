var price = Math.random()*500;

var hidenprice = Math.round(price);
console.log(hidenprice);

var compteur = 0;

var reponse = prompt("Donnes moi le juste prix ?");

reponse = parseInt(reponse, 10);

if(isNaN(reponse)) {
    alert("Désolé ! Ce n'est pas un nombre !")
}

if(reponse === null) {
    break;
}

while(reponse != hidenprice){
    
    if(reponse > hidenprice){
        alert("Non, c'est moins !");
        reponse = prompt("Donnes moi le juste prix ?");
        compteur++
    }
    
    else{
        alert("Non, C'est plus !");
        reponse = prompt("Donnes moi le juste prix ?");
        compteur++
    }
}

alert("Ouiiii ! Bravo c'est le Juste prix !!!! " + reponse + " euros." + " Vous avez utilisé " + compteur + " essai(s).")