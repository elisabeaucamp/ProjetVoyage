function authentification(){
    var eb = ['elisabeaucamp','eb'];
    var ap = ['amandinepiccinai', 'ap'];
    var gm = ['gregorymorel','gm'];
    listeuser = [eb,ap,gm];
    var login = document.getElementById("login").value;
    var mdp = document.getElementById("mdp").value;
    for (var i in [0,1,2]){
        if (login == listeuser[i][0] && mdp == listeuser[i][1]){
            document.location.href = "../HTML/pagedaccueil.html"
            var retournée = 'oui'
        }
        else {
            alert("Identifiants incorrects")
        }
    }
    return retournée
}