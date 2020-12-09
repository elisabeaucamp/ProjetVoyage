var destinations = [
    {
        "ville" : "washington",
        "prix1": 600,
        "image":"../Images/EU.png",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":0,
        "continent": "Amérique",
        "petitdej" : "oui",
        "meteo" : " : zone_meteo1"
    },
    {
        "ville" : "copenhagen",
        "prix1": 300,
        "image":"../Images/DAN.jpg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":1,
        "continent":"Europe",
        "petitdej" : "non",
        "meteo" : " : zone_meteo2"

    },
    {
        "ville" : "montreal",
        "prix1": 500,
        "image":"../Images/CAN.jpg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":2,
        "continent":"Amérique",
        "petitdej" : "oui",
        "meteo" : " : zone_meteo3"
    },
    {
        "ville" : "tokyo",
        "prix1": 650,
        "image": "../Images/JAP.jpg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":3,
        "continent":"Asie",
        "petitdej" : "non",
        "meteo" : " : zone_meteo4"
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
        "type":"radio",
        "nom":"Date",
        "id":"idvalueform",
        "ref":"Dans une semaine"                   
    },
    {
        "type":"radio",
        "nom":"Date",
        "id":"idvalueform",
        "ref":"Dans un mois"            
    },
    {
        "type":"radio",
        "nom":"Date",
        "id":"idvalueform",
        "ref":"Dans un an",            
    },
    {
        "type":"range",
        "nom":"Budget",
        "id": "idvalueform",
        "ref":"budget",
    },
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
        "ref":"petitdej"
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

function test_function(){ //fonction à enlever
    document.getElementById("titre").innerHTML="Site de voyage";     
}

function afficherRech(){ //fonction qui affiche ou non les filtres
    if (document.getElementById("form").style.display == "none"){
       document.getElementById("form").style.display = "block"; 
    }
    else{
        document.getElementById("form").style.display = "none";
    }
}

function cochage(){ //pour afficher toutes les destinations si aucune case filtre n'est cochée
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
        else if (document.getElementById("petitdej").checked == true){
            retournée ='oui'
        }
        else {
            retournée = 'non';
        }
    return retournée
    }
}

function filtrage(){ //filtrer les images sur la page d'accueil
    for (var f of formulaire){ //f parcourt la liste formulaire
        if (cochage()=='oui'){
            if(document.getElementById(f.ref).checked == true){ //si la case est check
                var lieu = f.ref //on récupère le continent associé à la case
                for (var d of destinations){ //d parcourt la liste destinations
                    if (d.continent == lieu){ //si la destination est identitique à la case checkée
                        document.getElementById(d.numero).style.display = "block"; //l'image s'affiche
                    if (d.petitdej == 'oui'){
                        document.getElementById(d.numero).style.display = "block";
                        console.log(d.numero)
                    }
                    }           
                }
            }
            if(document.getElementById(f.ref).checked == false){
                var lieu = f.ref
                for (var d of destinations){
                    if (d.continent == lieu){
                        document.getElementById(d.numero).style.display = "none";
                    if (d.petitdej == 'non'){
                        document.getElementById(d.numero).style.display = "none";
                    }
                    }           
                }
            }  
        }
        else {
            for (d of destinations){
                document.getElementById(d.numero).style.display = "block";
            }
            
        }
    }
}

window.onscroll = function() {function_scrolldown()}; //afficher le bouton quand on est trop bas

function function_scrolldown(){ //apparition ou non du bouton retour haut
    if(document.documentElement.scrollTop > 100){
        document.getElementById("boutonhaut").style.display = "block";
    }
    else{
        document.getElementById("boutonhaut").style.display ="none";
    }
}

function function_none(){ //empêcher le bouton haut d'apparaitre au chargement de la page
    document.getElementById("boutonhaut").style.display="none";
    document.getElementById("form").style.display = "none";
}

function function_top(){ //retour haut de page
    document.documentElement.scrollTop=0;
}
//Fonction météo avec l'utilisation de l'API OpenWeatherMap
var n=0
var appliAPI = function(data) {
    while (n<4){
        for (var d of destinations){
            n+=1
            meteo = d.meteo //meteo prend successivement chaque {{meteo}} 
            meteo.innerHTML = "coucou"
            //var element = d.meteo
            //var zone = element[d.numero]
            console.log(meteo)
        }
        
        //n=n+1
        //zone.innerHTML = "La temperature actuelle est de " + data.main.temp + " °C";
    }
    
        //var zone = element[n]
        //n=n+1
        //element.innerHTML = data.main.temp
}

function appelAPI() {
  //Boucle pour appeler la fonction à chaque ville.
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