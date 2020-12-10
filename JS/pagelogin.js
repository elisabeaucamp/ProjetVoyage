function authentification(){ //fonction authentification
    var eb = ['elisabeaucamp','eb']; //on crée un login et un mdp par utilisateur
    var ap = ['amandinepiccinai', 'ap'];
    var gm = ['gregorymorel','gm'];
    listeuser = [eb,ap,gm]; //on les mets dans une liste (liste de listes)
    var login = document.getElementById("login").value; //on récupère login entré
    var mdp = document.getElementById("mdp").value;//et mdp entré
    for (var i in [0,1,2]){//on fait varier i de 1 à 3 car 3 users
        if (login == listeuser[i][0] && mdp == listeuser[i][1]){//si il est trouvé
            document.location.href = "../HTML/pagedaccueil.html"//retour page accueil
            var retournée = 'oui'
        }
        else {
            alert("Identifiants incorrects")//si non : message d'alerte
        }
    }
    return retournée
}