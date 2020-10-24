var destinations = [
    {
        "pays" : "Etats-Unis",
        "prix1": 600,
        "image":"../Images/EU.png",
        "hauteur" : 211,
        "largeur" : 375,
        "numero":0
    },
    {
        "pays" : "Danemark",
        "prix1": 300,
        "image":"../Images/DAN.jpg",
        "hauteur" : 211,
        "largeur" : 375,
        "numero":1
    },
    {
        "pays" : "Canada",
        "prix1": 500,
        "image":"../Images/CAN.jpg",
        "hauteur" : 211,
        "largeur" : 375,
        "numero":2
    },
    {
        "pays" : "Japon",
        "prix1": 650,
        "image": "../Images/JAP.jpg",
        "hauteur" : 211,
        "largeur" : 375,
        "numero":3
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
        "id":"idvalueform",
        "ref":"Europe",
    },
    {
        "type":"checkbox",
        "nom":"lieu",
        "id":"idvalueform",
        "ref":"Asie",
    },
    {
        "type":"checkbox",
        "nom":"lieu",
        "id":"idvalueform",
        "ref":"Amérique",
    },
    {
        "type":"checkbox",
        "nom":"lieu",
        "id":"idvalueform",
        "ref":"Afrique",
    },
    {
        "type":"checkbox",
        "nom":"lieu",
        "id":"idvalueform",
        "ref":"Océanie",
    },
    {
        "type":"text",
        "nom":"voyageurs",
        "id":"idvalueform",
        "ref":"Nombre de voyageurs",
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

function test_function(){
    document.getElementById("titre").innerHTML="Site de voyage";
}

function v_function(){
    document.getElementById("p02").innerHTML=voyages[1].pays;
}

function afficherRech(){
    if (document.getElementById("form").style.display == "none"){
       document.getElementById("form").style.display = "block"; 
    }
    else{
        document.getElementById("form").style.display = "none";
    }
}

function reinitForm(){
    document.getElementById("idvalueform").value="";
}

window.onscroll = function() {function_scrolldown()};

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