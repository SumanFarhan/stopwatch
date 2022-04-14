function Start(){
let hours;
let minutes;
let seconds;
for (hours=0;hours<=24;hours++){
document.getElementById("hours").innerHTML=hours;
}
for (minutes=0;minutes<=60;minutes++){
    document.getElementById("minutes").innerHTML=minutes;
    }
    for (seconds=0;seconds<=60;seconds++){
        document.getElementById("seconds").innerHTML=seconds;
        }
}
function reset(){
let hours=00;
let minutes=00;
let seconds=00;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;
}