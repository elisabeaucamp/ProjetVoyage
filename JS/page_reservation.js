var destinations = [
    {
        "pays" : "Partez aux Etats-Unis",
        "prix1": 600,
        "image":"../Images/EU.png",
        "hauteur" : 211,
        "largeur" : 375,
        "numero":0
    },
    {
        "pays" : "Partez au Danemark",
        "prix1": 300,
        "image":"../Images/DAN.jpg",
        "hauteur" : 211,
        "largeur" : 375,
        "numero":1
    },
    {
        "pays" : "Partez au Canada",
        "prix1": 500,
        "image":"../Images/CAN.jpg",
        "hauteur" : 211,
        "largeur" : 375,
        "numero":2
    },
    {
        "pays" : "Partez au Japon",
        "prix1": 650,
        "image": "../Images/JAP.jpg",
        "hauteur" : 211,
        "largeur" : 375,
        "numero":3
    },
];

var voyage = [
    {
        "sst":"Date de départ",
        "type":"date",
        "name":"datedepart",
    },
    {
        "sst":"Date d'arrivée",
        "type":"date",
        "name":"datearrivee",
    },
    {
        "sst":"Nombre d'adultes",
        "type":"text",
        "name":"nbadulte",
    },
    {
        "sst":"Nombre d'enfants (-12 ans)",
        "type":"text",
        "name":"nbenfant",
    },
    {
        "sst":"Petit déjeuner",
        "type":"checkbox",
        "name":"ptitdej",
    },
]


var template=document.querySelector("#listeVoyage");
for (const v of voyage){
    let clone=document.importNode(template.content, true);
    newContent = clone.firstElementChild.innerHTML
        .replace(/{{sst}}/g, v.sst)
        .replace(/{{type}}/g, v.type)
        .replace(/{{name}}/g, v.name);
    clone.firstElementChild.innerHTML=newContent
    document.body.appendChild(clone);
}



function getDonne () {
    var str = document.location.href;
    var url = new URL(str);
    var num = url.searchParams.get("id");
    var donnee= function_getDestination(num);
 //    
 // console.log(donnee.pays);   //test pour savoir comment ça marche
    document.getElementById("p02").innerHTML=donnee.pays;
}


function function_getDestination(numer) {      //récupération de l'id dans le lien et des donnnes liés a l'id
    for (var d of destinations) {
        if (d.numero==numer) {
            return d
        }
    }
    return null
}


//- un enfant paie 40% du prix d’un adulte, quel que soit le séjour choisi.
//- Un petit déjeuner ajoute un supplément de 12€ par personne et par jour.
//- Evidemment, la date de retour doit obligatoirement être postérieure à la date de départ.
//- Les enfants ne peuvent voyager sans être accompagnés d’un adulte. 
//Toute modification dans le formulaire conduit à un re-calcul du prix. 

function Affichprix () {
    var str = document.location.href;
    var url = new URL(str);
    var num = url.searchParams.get("id");
    var donnee= function_getDestination(num);
    var FPrix = donnee.prix1
    console.log(FPrix);
    console.log(document.getElementById("p05")) 
//    FPrix=FPrix*Number(document.getElementsByName("nbadulte"))
    console.log(FPrix);
    document.getElementById("p03").innerHTML= FPrix

}
// UTILISER LE TEST DE console.log ("coucou") POUR SAVOIR SI CA MARCHE