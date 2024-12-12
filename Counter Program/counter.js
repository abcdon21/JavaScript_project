const decbtn=document.getElementById("decbtn");
const resbtn=document.getElementById("resbtn");
const incbtn=document.getElementById("incbtn");
const countelabel=document.getElementById("countelabel");
let count=0;

incbtn.onclick=function(){
    count++;
    countelabel.textContent=count;
}

decbtn.onclick=function(){
    count--;
    countelabel.textContent=count;
}

resbtn.onclick=function(){
    count=0;
    countelabel.textContent=count;
}
