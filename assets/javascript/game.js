
window.onload = function static(){
    document.getElementById("hidden").style.visibility="hidden";
}

var words = [
    "Sanchez",
    "Squanchy",
    "birdperson",
    "plumbus",
    "morty"
];

function startGame(){

    document.getElementById("hidden").style.visibility="visible";
    document.getElementById("pick").innerHTML = "Pick a letter!";
    
    //var word = words[i];
    var underscores = [];
    var word = words[Math.floor(Math.random() * words.length)];

    for (var i = 0; i < word.length; i++) {
        underscores[i] = "_ " ;
        
        }

        document.getElementById("guessBox").innerHTML = underscores.join("");
    }
    
    
    
    






