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

/*var template = document.querySelector("#listedestinations");
for (const v of destinations){
    let clone = document.importNode(template.content, true);
    newContent = clone.firstElementChild.innerHTML
        .replace(/{{image}}/g, v.image)
        .replace(/{{pays}}/g, v.pays)
        .replace(/{{largeur}}/g, v.largeur)
        .replace(/{{hauteur}}/g, v.hauteur)
        .replace(/{{numero}}/g, v.numero)

    clone.firstElementChild.innerHTML=newContent;
    document.getElementById("idimages").appendChild(clone);   
}*/

function getDonne () {
    var str = document.location.href;
    var url = new URL(str);
    var num = url.searchParams.get("id");
    var donnee= function_getDestination(num);
    console.log(donnee.pays);
    document.getElementById("p02").innerHTML=donnee.pays;
}

function function_getDestination(numer) {      //récupération de l'id dans le lien et des donnnes lie a l id
    for (var d of destinations) {
        if (d.numero==numer) {
            return d
        }
    }
    return null
}

// UTILISER LE TEST DE console.log ("coucou") POUR SAVOIR SI CA MARCHE