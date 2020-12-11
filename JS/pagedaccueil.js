var destinations = [
    {
        "ville" : "Washington",
        "prix1": 600,
        "image":"../Images/EU.png",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":0,
        "continent": "Amérique",
        "petitdej" : "non",
        "meteo" : ""
    },
    {
        "ville" : "Copenhagen",
        "prix1": 300,
        "image":"../Images/DAN.jpg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":1,
        "continent":"Europe",
        "petitdej" : "non",
        "meteo" : ""

    },
    {
        "ville" : "Montreal",
        "prix1": 500,
        "image":"../Images/CAN.jpg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":2,
        "continent":"Amérique",
        "petitdej" : "oui",
        "meteo" : ""
    },
    {
        "ville" : "Tokyo",
        "prix1": 650,
        "image": "../Images/JAP.jpg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":3,
        "continent":"Asie",
        "petitdej" : "non",
        "meteo" : ""
    },
    {
        "ville" : "Dubai",
        "prix1": 1100,
        "image": "../Images/Dubai.jpg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":4,
        "continent":"Asie",
        "petitdej" : "oui",
        "meteo" : ""
    },
    {
        "ville" : "Picherande",
        "prix1": 30,
        "image":"../Images/Picherande.jpeg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":5,
        "continent":"Europe",
        "petitdej" : "oui",
        "meteo" : ""
    },
];

var template = document.querySelector("#listedestinations");
for (const v of destinations){
    let clone = document.importNode(template.content, true);
    newContent = clone.firstElementChild.innerHTML
        .replace(/{{image}}/g, v.image)
        .replace(/{{ville}}/g, v.ville)
        .replace(/{{largeur}}/g, v.largeur)
        .replace(/{{hauteur}}/g, v.hauteur)
        .replace(/{{numero}}/g, v.numero)
        .replace(/{{petitdej}}/g, v.petitdej)
        .replace(/{{meteo}}/g, v.meteo)

    clone.firstElementChild.innerHTML=newContent;
    document.getElementById("idimages").appendChild(clone);   
}

var formulaire =[
    {
        "type":"checkbox",
        "nom":"lieu",
        "id":"idvalueformlieu",
        "ref":"Europe",
    },
    {
        "type":"checkbox",
        "nom":"lieu",
        "id":"idvalueformlieu",
        "ref":"Asie",
    },
    {
        "type":"checkbox",
        "nom":"lieu",
        "id":"idvalueformlieu",
        "ref":"Amérique",
    },
    {
        "type":"checkbox",
        "nom":"lieu",
        "id":"idvalueformlieu",
        "ref":"Afrique",
    },
    {
        "type":"checkbox",
        "nom":"lieu",
        "id":"idvalueformlieu",
        "ref":"Océanie",
    },
    {
        "type":"checkbox",
        "nom":"option",
        "id":"idvalueform",
        "ref":"Petit Déjeuner"
    }
]

var template = document.querySelector("#listeformulaire");
for (const v of formulaire){
    let clone = document.importNode(template.content, true);
    newContent = clone.firstElementChild.innerHTML
        .replace(/{{type}}/g, v.type)
        .replace(/{{nom}}/g, v.nom)
        .replace(/{{id}}/g, v.id)
        .replace(/{{ref}}/g, v.ref)

    clone.firstElementChild.innerHTML=newContent;
    document.getElementById("form").appendChild(clone);   
}

function test_function(){ //fonction inutile mais c'est ma première en js, c'est sentimental
    document.getElementById("titre").innerHTML="Site de voyage";     
}

function afficherRech(){ //fonction qui affiche ou non les filtres au clic du bouton
    if (document.getElementById("form").style.display == "none"){
       document.getElementById("form").style.display = "block"; 
    }
    else{
        document.getElementById("form").style.display = "none";
    }
}

function cochage(){ //récupère les cases cochées
    for (var f of formulaire){
    var retournée = ''
        if (document.getElementById("Europe").checked == true) {
            retournée = 'oui';
        }
        else if (document.getElementById("Amérique").checked == true) {
            retournée = 'oui';
        }
        else if (document.getElementById("Asie").checked == true) {
            retournée = 'oui';
        }
        else if (document.getElementById("Océanie").checked == true) {
            retournée = 'oui';
        }
        else if (document.getElementById("Afrique").checked == true) {
            retournée = 'oui';
        }
        else {
            retournée = 'non';
        }
    return retournée
    }
}
function cochagepetitdej(){//récuère si petit-dej coché ou non
    if (document.getElementById("Petit Déjeuner").checked == true){
        retournée ='oui'
    }
    else{
        retournée = 'non'
    }
    return retournée
}

function filtrage(){ //filtrer les images sur la page d'accueil

    for (var f of formulaire){ //f parcourt la liste formulaire
        if (cochage()=='oui'){
            if(document.getElementById(f.ref).checked == true){ //si la case est check
                var lieu = f.ref //on récupère le continent associé à la case
                if (cochagepetitdej() == 'oui'){
                    for (var d of destinations){ //d parcourt la liste destinations
                        if (d.continent == lieu && d.petitdej == 'oui'){ //si la destination est identitique à la case checkée et petitdej checké
                            console.log(d.ville + ' remplit les 2 critères')
                            document.getElementById('2').style.display = "block"; //l'image s'affiche
                        }
                        else if(d.petitdej='non') {
                            document.getElementById(d.numero).style.display = "none";
                        }
                    }           
                }
                if (cochagepetitdej() == 'non'){//on affiche quand meme ceux qui ont l'option
                    for (var d of destinations){ //d parcourt la liste destinations
                        if (d.continent == lieu){ //si la destination est identitique à la case checkée
                            document.getElementById(d.numero).style.display = "block"; //l'image s'affiche
                        }
                    }           
                }
            }
            if(document.getElementById(f.ref).checked == false){//les non-checkées ne s'afficheront pas
                var lieu = f.ref
                for (var d of destinations){
                    if (d.continent == lieu){
                        document.getElementById(d.numero).style.display = "none";
                    }
                }           
            } 
        }
        else {
            for (d of destinations){
                if(cochagepetitdej() == 'oui'){
                    for (var d of destinations){
                        if (d.petitdej == 'oui'){
                            document.getElementById(d.numero).style.display = "block";
                        }
                        else{
                            document.getElementById(d.numero).style.display = "none";
                        }
                    }
                }
                else{
                    document.getElementById(d.numero).style.display = "block"
                }
            }
        }
    }
}

window.onscroll = function() {function_scrolldown()}; //afficher le bouton quand on est trop bas

function function_scrolldown(){ //apparition ou non du bouton retour haut
    if(document.documentElement.scrollTop > 100){//on descend plus que 100px
        document.getElementById("boutonhaut").style.display = "block";//il aparaît !
    }
    else{
        document.getElementById("boutonhaut").style.display ="none";
    }
}

function function_none(){ //fonctions au chargement de la page
    document.getElementById("boutonhaut").style.display="none";//empêcher le bouton haut d'apparaitre au chargement de la page
    document.getElementById("form").style.display = "none";//pareil pour les filtres
}

function function_top(){ //retour haut de page
    document.documentElement.scrollTop=0;
}

var n=0
var appliAPI = function(data) {//Fonction météo avec l'utilisation de l'API OpenWeatherMap
    //recherche la destination : data.name
    for (d of destinations){
        if(d.ville.toUpperCase()==data.name.toUpperCase()){
            //ville trouvée
            d.meteo = data.main.temp
            //on remplace dans l'id correspondant par la data.main.temp trouvée
            document.getElementById("meteo"+d.numero).innerHTML = d.meteo + '°C'
        }
               
    }
    
}

function appelAPI() {//fonction qui récupère la température sans key
  //on appelle la fonction à chaque ville
    for (var d of destinations){
        ville = d.ville
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"
        //utilisation de Jquery
        $.get(url, appliAPI).done(function() {
        })
        .always(function() {
        });
    }
}
function filtreprix(){//filtrage du prix meme principe
    prix = document.getElementById('budget').value
    for (var d of destinations){
        if (d.prix1 > prix){
            document.getElementById(d.numero).style.display = "none";
        }
        else if(d.prix1 < prix){//on affiche que si le prix du voyage est inférieur au prix en input
            //car input demandé = budget max
            document.getElementById(d.numero).style.display = "block";
        }
    }
    return prix
}
function AfficherRange(){//pour afficher en temps réel la valeur du range budget max
    var value = document.getElementById('budget').value
    document.getElementById('AfficheRange').textContent = value + " €"
}