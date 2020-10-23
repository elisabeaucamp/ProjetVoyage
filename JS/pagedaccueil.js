var voyages = [
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
        "pays" : "CAN",
        "prix1": 500,
        "image":"../Images/CAN.jpg",
        "hauteur" : 211,
        "largeur" : 375,
        "numero":2
    },
    {
        "pays" : "JAP",
        "prix1": 650,
        "image": "../Images/JAP.jpg",
        "hauteur" : 211,
        "largeur" : 375,
        "numero":3
    },
];

var template = document.querySelector("#listedestination");
for (const v of voyages){
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