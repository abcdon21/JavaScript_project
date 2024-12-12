const display=document.getElementById("display");
let timer=null;//holds the value of set interval
let startTime=0;
let elapsedTime=0;
let isRunning=false;
 
function start(){
    if(!isRunning)
    {
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);//calling update function after every milisecond
       isRunning=true;//watch is running
    }

}
function stop(){
    if(isRunning){
        clearInterval(timer);//stops
        elapsedTime=Date.now-startTime;
        isRunning=false;//watch has stopped
        }

}
function reset()
{  
    clearInterval(timer);
    startTime=0;
     elapsedTime=0;
     isRunning=false;
     display.textContent="00:00:00:00";


}
function update()
{
const currentTime=Date.now();
elapsedTime=currentTime-startTime;

let hours=Math.floor(elapsedTime/(1000*60*60));//converting milisecond to hours
let min=Math.floor(elapsedTime/(1000*60)%60);//converting milisecond to minutes
let sec=Math.floor(elapsedTime/(1000%60));//converting milisecond to seconds
let mili=Math.floor(elapsedTime%1000/10);//converting milisecond to hours
hours=hours.toString().padStart(2,0);
min=min.toString().padStart(2,0);
sec=sec.toString().padStart(2,0);
mili=mili.toString().padStart(2,0);
display.textContent=`${hours}:${min}:${sec}:${mili}`;
}