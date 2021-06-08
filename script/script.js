jQuery(document).ready(function(){

    $("#btn-envoyer").click(function(){
        let psvalue = document.getElementById('passWord').value;
        let letter = psvalue.split('');
        let psvaluelength = letter.length;
        let number = 0;
        
        for(let i = 0; i < psvaluelength; i++){
            let testletter = letter [i];
            testletter = parseInt(testletter);
            if(isNaN(testletter)){
                continue;
            } else {
                number++;
            }
        }
    
        if (number >= 2){
            window.location.pathname("../index.html");
        } else {
            $("#passWord").css("background-color", "DarkSalmon");
            $("#passWord").css("color", "white");
            alert("Le mdp doit contenir au moins 2 chiffres !");
        }
    })



});