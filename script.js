let milliseconds = 0
let seconds = 0
let minutes = 0
let hours = 0

let timerRef = document.querySelector('.timerDisplay');
//let int=null
let btnStart = document.getElementById('startTimer')
let btnPause = document.getElementById('pauseTimer')
let btnReset = document.getElementById('resetTimer')

btnStart.addEventListener('click', () =>{
    timer = true
    displayTimer()
})

btnPause.addEventListener('click', () =>{
    timer = false
})

btnReset.addEventListener('click', ()=>{
timer = false
hours = 0
minutes = 0
seconds = 0
milliseconds = 0
    document.getElementById('hour').innerHTML= "00"
    document.getElementById('min').innerHTML= "00"
    document.getElementById('sec').innerHTML= "00"
    document.getElementById('milliseconds').innerHTML= "00"
})


/*function start(){
  start= document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int)
    } int = setInterval(displayTimer,1000)
})
return start
}*/

function displayTimer(){
    if (timer){
        milliseconds++;

    if(milliseconds==100){
        milliseconds = 0;
        seconds++
    if(seconds==60){
            seconds=0;
            minutes++
        }if(minutes==60){
            minutes = 0;
            hours++
        }
    }



let hrString = hours
let minString = minutes
let secString = seconds
let millisecondsString = milliseconds

if(hours<10){
    hrString = "0"+ hrString
}

if(minutes<10){
    minString = "0"+minString
}

if(seconds<10){
    secString = "0" + secString
}

if(milliseconds<10){
    millisecondsString = "0" + millisecondsString
}

document.getElementById('hour').innerHTML=hrString
document.getElementById('min').innerHTML=minString
document.getElementById('sec').innerHTML=secString
document.getElementById('milliseconds').innerHTML= millisecondsString
}
setTimeout(displayTimer,10)

}