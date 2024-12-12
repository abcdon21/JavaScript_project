const minnum=1;
const maxnum=100;
const answer= Math.floor(Math.random()*(maxnum-minnum+1)) + minnum;//equation to genrate rndom number between a range

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`guess a number between ${minnum}-${maxnum}`);//to take the input
   guess=Number(guess);
    
if(isNaN(guess)) //if enterd value is not a number
    {
    window.alert(`enter a valid number`);

}
else if(guess<minnum || guess>maxnum)
 {  window.alert(`enter a valid number`);
  }
    else{
        attempts++;
        if(guess<answer){
            window.alert(`TOO LOW TRY AGAIN`);
           }
           else if(guess>answer){
            window.alert(`TOO HIGH TRY AGAIN`);
           }
           else{
            window.alert(`correct answer is ${answer}. It took you ${attempts} attempts`);
            running=false;   
        }
    }
}