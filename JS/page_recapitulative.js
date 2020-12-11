function getUrl () {
    var str = document.location.href;
    var url = new URL(str);
    var lastname = url.searchParams.get("lastname");
    var firstname = url.searchParams.get("firstname");
    var email = url.searchParams.get("email");
    var tel = url.searchParams.get("tel");
    var datedepart = url.searchParams.get("datedepart");
    var datearrivee = url.searchParams.get("datearrivee");
    var nbadulte = url.searchParams.get("nbadulte");
    var nbenfant = url.searchParams.get("nbenfant");
    var ptitdej = url.searchParams.get("ptitdej");

    document.getElementById("nom").innerHTML=lastname;
    document.getElementById("prenom").innerHTML=firstname;
    document.getElementById("email").innerHTML=email;
    document.getElementById("numero").innerHTML=tel;
    document.getElementById("départ").innerHTML=datedepart;
    document.getElementById("arrivée").innerHTML=datearrivee;
    document.getElementById("nbadulte").innerHTML=nbadulte;
    document.getElementById("nbenfant").innerHTML=nbenfant;
    document.getElementById("petitdej").innerHTML=petitDej(ptitdej);
}

function petitDej(ptitdej){
    console.log("coucou");
    if(ptitdej=="on"){
        console.log("if");
        return "Option Petit déjeuner"
    }else{
        console.log("else");
        return null
    }
}
/*
lastname=Piccinali&firstname=Amandine&email=amandine.piccinali%40gmail.com&
tel=0695111006&datedepart=2020-12-11&datearrivee=2020-12-26&nbadulte=2&nbenfant=0&ptitdej=on&submit=Envoyer*/