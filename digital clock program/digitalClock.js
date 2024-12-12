function updateClock()
{
    const now=new Date();//TO GET CURRENT DATE
    let hours= now.getHours();//TO GET HOURS IN 2 DIGIT
    const meridim = (hours>=12?"PM":"AM");
    const ampm=document.getElementById("ampm");
    ampm.innerHTML=meridim;
    hours=hours%12||12;
    hours=hours.toString().padStart(2,0);//to get 2 digits theres is a method in string so we are first going to convert to string
    const minutes=now.getMinutes().toString().padStart(2,0);//to get minutes
    const seconds=now.getSeconds().toString().padStart(2,0);//padstar(2,0)means pad first two characters with '0'
    const timeString=`${hours}:${minutes}:${seconds}`;//arranging min seconds hour
    document.getElementById("clock").textContent=timeString;//changing current div content to timestring
}
updateClock();
setInterval(updateClock,1000);//calls the function repeateadly after every 1000s