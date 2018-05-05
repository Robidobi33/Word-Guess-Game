
var words = [
    "sanchez","portal","rick","squanchy","birdperson","plumbus","morty","beth","pickle","meeseeks","galactic",
    "snowball","anatomy","microverse","poopybutthole","scaryterry","wubalubadubdub","schwifty","fleeb"
];

var score = 0;

function startGame(){
    
    
    document.getElementById("scoreBox").style.visibility = "visible";
    document.getElementById("lives").style.visibility = "visible";
    document.getElementById("chosen").style.visibility = "visible";
    document.getElementById("pick").innerHTML = "Press a letter key!";
    document.getElementById("start").innerHTML = "Quit";
    document.getElementById('start').onclick = function refresh(){
        location.reload();
        
    };//refresh

    var underscores = [];
    var word = words[Math.floor(Math.random() * words.length)];
    var guess;
    var pos;
    var wrongGuess = 10;
    var rightGuess = 0;
    var lettersGuessed = [];
    var found = false;

    document.getElementById("lives").innerHTML = "Lives: " + wrongGuess;
    document.getElementById("scoreBox").innerHTML = "Score: " + score;
    document.getElementById("chosen").innerHTML = "Chosen Letters: ";

    for (var i = 0; i < word.length; i++) {
        underscores[i] = "_ " 

        document.onkeypress = function(event){
            guess = event.key;
            pos = word.indexOf(guess);
            found = false;
            console.log(word);  
            console.log(lettersGuessed);
            console.log(lettersGuessed.length);

            for (var i = 0; i < lettersGuessed.length; i++) {
    
                if(lettersGuessed[i] === guess){
                 found = true;

                }//end for
            }//end for

            if(found === false){

                lettersGuessed.push(guess);

                document.getElementById("chosen").innerHTML = "Chosen Letters: " + lettersGuessed.join(" ");

                if(pos >= 0){
                    
                    for(i=pos;i<word.length;i++){
                        underscores[pos] = guess;
                        pos = word.indexOf(guess,i++);
                        if (pos !== -1){i=pos; rightGuess++}
                    }//for loop
                
                    document.getElementById("guessBox").innerHTML = underscores.join("");
                    
                    }else{wrongGuess--; document.getElementById("lives").innerHTML = "Lives: " + wrongGuess; 
                
                    }//end else

                    if (rightGuess === word.length){
                        document.getElementById("pick").innerHTML = "Riggity riggity wrecked, son!";
                        score++;
                        document.getElementById("scoreBox").innerHTML = "Score: " + score;
                        var delay = setTimeout(startGame, 1000);
                       
            
                    }//end if

                    
                    if (wrongGuess === 0){
                        document.getElementById("pick").innerHTML = "Existence is pain";
                        score = 0;
                        var delay = setTimeout(startGame, 1000);
                        
                
                    }//end if
                    
                    console.log(wrongGuess);

            }//end if found
                    
                
        }//end event

    }//end for loop
            document.getElementById("guessBox").innerHTML = underscores.join("");

}//startGame

      











    
    
    






