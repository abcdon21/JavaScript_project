


function rolldice()
{ 
const numOfDice = document.getElementById("numOfDice").value;
const diceResult = document.getElementById("diceResult");
const diceImages=document.getElementById("diceImages");
const values=[];//to store dice rolls
const images=[];

for(let i=0; i<numOfDice;i++)//to genrate number of dice rolled
{
const value= Math.floor(Math.random()*6)+1;//to get random number between 1-6
values.push(value);
images.push(`<img src="DICE_IMAGES/${value}.jpg" alt="dice ${value}">`);
}
diceResult.innerHTML=`dice: ${values.join(',')}`;
diceImages.innerHTML=images.join(' ');

}