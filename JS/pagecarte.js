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

function findPos(el) { //récupère la position de la souris au clic
	var x = y = 0;
	if(el.offsetParent) {
		x = el.offsetLeft;
		y = el.offsetTop;
		while(el = el.offsetParent) {
			x += el.offsetLeft;
			y += el.offsetTop;
		}
	}
	return {'x':x, 'y':y};
}
			
window.onload = function(){ //récupération des coordonées de la souris au clic
    for (var d of destinations){
        mondiv = document.getElementById();
	    mondiv.onclick = function(e) {//event au clic
            var ev = e || window.event;
            var pos = findPos(this);//on réupère la position
            var diffx = ev.clientX - pos.x;//récupère abscisse
            var diffy = ev.clientY - pos.y;//récupère ordonnée
            console.log(diffx,diffy)
            if (63 <diffx<261 && 61<diffy<313){
                console.log('Amérique')
            }
            else{
                console.log('Pas Amérique')
            }
        }
    }
}