var hour = 0;
var minute = 0;
var second = 0;
var counter = 0;
var time = false;
function start() {
    time = true;
    stopwatch()
    
}
function st0p() {
    time = false;
}
function reset() {
    time = true
    hour = 0;
    minute = 0;
    second = 0;
    counter = 0;

    document.getElementById("hr").innerHTML = "00"
    document.getElementById("min").innerHTML = "00"
    document.getElementById("sec").innerHTML = "00"
    document.getElementById("count").innerHTML = "00"
 stopwatch()
}
function stopwatch() {
    if (time == true) {
        counter++ 
        setTimeout(stopwatch, 1) 
        document.getElementById("count").innerHTML = counter;

    if(counter == 100){
        second++
        document.getElementById("sec").innerHTML = second;
        counter= 0
    }
    if(second == 60){
        minute++
        document.getElementById("min").innerHTML = minute
        second = 0
    }
    if(minute == 60){
        hour++
        document.getElementById("hr").innerHTML = hour
        minute = 0
    }
    if(hour<10){
        document.getElementById("hr").innerHTML = "0" + hour
    }
    if(minute<10){
        document.getElementById("min").innerHTML = "0" + minute
    }
    if(second<10){    
    document.getElementById("sec").innerHTML = "0" + second
    }

}

}
    