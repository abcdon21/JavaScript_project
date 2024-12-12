

const display=document.getElementById("display");

function appendToDisplay(input){
    display.value +=input;
}

function clearDisplay(){
display.value=" ";
}

function calculate(){
   try{ display.value=eval( display.value);//eval is a built in calculator function

}
catch(error){
    display.value="ERROR";

}
}
