var destinations = [
    {
        "pays" : "Partez à Washington",
        "prix1": 600,
        "image":"../Images/EU.png",
        "numero":0
    },
    {
        "pays" : "Partez à Copenhagen",
        "prix1": 300,
        "image":"../Images/DAN.jpg",
        "numero":1
    },
    {
        "pays" : "Partez à Montreal",
        "prix1": 500,
        "image":"../Images/CAN.jpg",
        "numero":2
    },
    {
        "pays" : "Partez à Tokyo",
        "prix1": 650,
        "image": "../Images/JAP.jpg",
        "numero":3
    },
    {
        "pays" : "Partez à Dubai",
        "prix1": 1100,
        "image": "../Images/Dubai.jpg",
        "numero":4
    },
    {
        "pays" : "Partez à Picherande",
        "prix1": 30,
        "image": "../Images/Picherande.jpeg",
        "numero":5
    },

];

function getDonne () {
    var str = document.location.href;
    var url = new URL(str);
    var num = url.searchParams.get("id");
    var donnee= function_getDestination(num);
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


function Affichprix () {
    var str = document.location.href;
    var url = new URL(str);
    var num = url.searchParams.get("id");
    var donnee= function_getDestination(num);
    var FPrix = donnee.prix1
    FPrix=FPrix*prixPersonne()+prixDej()
    FPrix+=FPrix*(prixJours()-1)
    document.getElementById("prix").innerHTML=FPrix
}

function prixPersonne (){
    let nbadulte=document.getElementById("nbadulte").value;
    let nbenfant=document.getElementById("nbenfant").value;

    let prixfinal;
    let nbAdulte=parseInt(nbadulte,10);
    let nbEnfant=parseInt(nbenfant,10);
    
    prixfinal = nbAdulte+0.4*nbEnfant
    return prixfinal
}

function prixDej (){
    let ptitdej=document.getElementById("ptitdej").checked;
    let nbadulte=document.getElementById("nbadulte").value;
    let nbenfant=document.getElementById("nbenfant").value;

    let prix2;
    let prixPetitDej;
    let nbAdulte=parseInt(nbadulte,10);
    let nbEnfant=parseInt(nbenfant,10);

    if (ptitdej== false){ prixPetitDej = 0}
    else{prixPetitDej=12}

    prix2 = prixPetitDej*(nbAdulte+nbEnfant)
    return prix2
}

function prixJours(){
    let depart=document.getElementById("datedepart").value;
    let arrivee=document.getElementById("datearrivee").value;
    let jours =Math.ceil(((Date.parse(arrivee)-Date.parse(depart))/(1000*60*60*24)))
    document.getElementById("fausseDate").innerHTML=""
    if (jours<=0 || isNaN(jours)) {
        document.getElementById("fausseDate").innerHTML="Les dates sont mauvaises"
        return 1
    }
    return jours
}