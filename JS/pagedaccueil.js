function afficherRech(){
    if (document.getElementById("form").style.display == "none"){
       document.getElementById("form").style.display = "block"; 
    }
    else{
        document.getElementById("form").style.display = "none";
    }
}
function reinitForm(){
    document.getElementById("idvalueform").clear();
}