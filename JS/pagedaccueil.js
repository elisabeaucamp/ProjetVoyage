var destinations = [
    {
        "pays" : "Etats-Unis",
        "prix1": 600,
        "image":"../Images/EU.png",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":0,
        "continent": "Amérique"
    },
    {
        "pays" : "Danemark",
        "prix1": 300,
        "image":"../Images/DAN.jpg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":1,
        "continent":"Europe"
    },
    {
        "pays" : "Canada",
        "prix1": 500,
        "image":"../Images/CAN.jpg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":2,
        "continent":"Amérique"
    },
    {
        "pays" : "Japon",
        "prix1": 650,
        "image": "../Images/JAP.jpg",
        "hauteur" : 275,
        "largeur" : 500,
        "numero":3,
        "continent":"Asie"
    },
];

var template = document.querySelector("#listedestinations");
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
    n=0
    if (n%2==0){
        document.getElementById("titre").innerHTML="Site de voyage";
        n=n+1;
    }
    else{
        document.getElementById("titre").innerHTML="e-line vacances, réservez vos vacances en un clic ";
        n=n+1;   
    } 
}

function afficherRech(){ //fonction qui affiche ou non les filtres
    if (document.getElementById("form").style.display == "none"){
       document.getElementById("form").style.display = "block"; 
    }
    else{
        document.getElementById("form").style.display = "none";
    }
}

function filtrage(){ //filtrer les images sur la page d'accueil
    for (var f of formulaire){ //f parcourt la liste formulaire
        if(document.getElementById(f.id).checked == true){ //si la case est check
            var lieu = f.ref //on récupère le continent associé à la case
            for (var d of destinations){ //d parcourt la liste destinations
                if (d.continent == lieu){ //si la destination est identitique à la case checkée
                    document.getElementById(d.numero).style.display = "block"; //l'image s'affiche
                }           
            }
        }
        if(document.getElementById(f.id).checked == false){
            var lieu = f.ref
            for (var d of destinations){
                if (d.continent == lieu){
                    document.getElementById(d.numero).style.display = "none";
                }           
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
}

function function_top(){ //retour haut de page
    document.documentElement.scrollTop=0;
}