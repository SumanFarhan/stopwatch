let hour=0;
let minutes=0;
let seconds=0;
let milliseconds=0;

let timer=false;

function Start(){
    timer=true;
    stopwatch();
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    // let hour=0;
    // let minut=0;
    // let sec=0;
    // let ms=0;

    document.getElementById("hours").innerHTML="00";
    document.getElementById("minutes").innerHTML="00";
    document.getElementById("seconds").innerHTML="00";
    document.getElementById("milliseconds").innerHTML="00";
}

function stopwatch(){
    if (timer == true){
       milliseconds= milliseconds + 1;
    
    if (milliseconds == 100){
        seconds=seconds+1;
        milliseconds=0;
    }
    if(seconds == 60){
        minutes=minutes+1;
        seconds=0;
    }
    if (minutes == 60){
        hour=hour+1;
        minutes=0;
        seconds=0;
    }

    let h=hour;
    let m=minutes;
    let s=seconds;
    let milllis=milliseconds;

    if(hour<10){
        h="0" +h;
    }

    if(minutes<10){
        m="0" +m;
    }
    if(seconds<10){
        s="0" +s;
    }

    if(milliseconds<10){
        milllis="0" +milllis;
    }
    //  if (milllis<100){
    //     milllis="0" +milllis;
    //  }
     document.getElementById("hours").innerHTML=h;
    document.getElementById("minutes").innerHTML=m;
    document.getElementById("seconds").innerHTML=s;
    document.getElementById("milliseconds").innerHTML=milllis;
 
     setTimeout("stopwatch()",10);

}}