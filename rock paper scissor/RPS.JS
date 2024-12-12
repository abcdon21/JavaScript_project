const choices=["rock","paper","scissors"];
const playerOfDisplay=document.getElementById("playerOfDisplay");
const computerOfDisplay=document.getElementById("computerOfDisplay");
const resultOfDisplay=document.getElementById("resultOfDisplay");
const playerscore=document.getElementById("playerscore");
const computerscore=document.getElementById("computerscore");
let playerscores=0;
let computerscores=0;

var textcolor="";

function playGame(playerChoice){
    // console.log(textcolor)
   
  
    const computerChoice=choices[Math.floor(Math.random()*3)];
    
 
    let result="";
    console.log(computerChoice)
    
    if(playerChoice===computerChoice){
        result="IT'S A TIE";
    }
    else{
        switch(playerChoice){
         case"rock":
           result= (computerChoice=="scissors")? "YOU WIN!":"YOU LOOSE!";
           break;
           case"paper":
           result= (computerChoice=="rock")? "YOU WIN!":"YOU LOOSE!";
           break;
           case"scissors":
           result= (computerChoice=="paper")? "YOU WIN!":"YOU LOOSE!";
           break;

        }
    }
    switch(result){
        case "YOU WIN!":

            resultOfDisplay.classList.add("greenText");
            resultOfDisplay.classList.remove("redText");
            resultOfDisplay.classList.remove("pinktext");

            textcolor="greenText";
            playerscores++;
            playerscore.textContent=playerscores;
            break;
            case "YOU LOOSE!":
                resultOfDisplay.classList.add("redText");
                resultOfDisplay.classList.remove("greenText");
                resultOfDisplay.classList.remove("pinktext");

                textcolor="redText"
                computerscores++;
                computerscore.textContent=computerscores;
                break;
            default:
                resultOfDisplay.classList.add("pinktext");
                resultOfDisplay.classList.remove("redText");
                resultOfDisplay.classList.remove("greenText");
                
    }
    playerOfDisplay.textContent=`PLAYER:${playerChoice}`;
    computerOfDisplay.textContent=`COMPUTER:${computerChoice}`;
    resultOfDisplay.textContent=result;

}

