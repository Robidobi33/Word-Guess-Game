var words = [
    "Sanchez",
    "Squanchy",
    "birdperson",
    "plumbus",
    "morty"
];

function startGame(){

    //var word = words[i];
    var underscores = [];
    var word = words[Math.floor(Math.random() * words.length)];

    for (var i = 0; i < word.length; i++) {
        underscores[i] = "_ " ;
    }
    
    document.getElementById("guessBox").innerHTML = underscores.join("");

    


}





