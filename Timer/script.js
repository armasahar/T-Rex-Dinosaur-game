const HOURS = document.getElementById("hour-input");
const MINUTES = document.getElementById("min-input")
const SECONDS = document.getElementById("sec-input")

const startBtn = document.getElementById("start-btn")

console.log(HOURS, MINUTES, SECONDS, startBtn);

// console.log("hours:", HOURS.value);
// console.log("Minutes:", MINUTES.value);
// console.log("Seconds:", SECONDS.value);


// console.log("hours:", hours);
// console.log("Minutes:", minutes);
// console.log("Seconds:", seconds);

startBtn.addEventListener("click", ()=>{
    
    let hours = +(HOURS.value)
    let minutes = +(MINUTES.value)
    let seconds = +(SECONDS.value)
    
    const timer = setInterval(() =>{
    seconds--

    if(seconds < 0){
        seconds = 59;
        minutes--
    }

    if(minutes < 0){
        minutes = 59;
        hours--;
    }

    if(hours <=0 && minutes <=0 && seconds <=0){
        // timer = null;
        clearInterval(timer);
        console.log("Time's up!")
    //     setTimeout(() =>{
    //     // alarm.play();
    // }, 100)
}

    HOURS.value = hours.toString().padStart(2, "0")
    MINUTES.value = minutes.toString().padStart(2, "0")
    SECONDS.value = seconds.toString().padStart(2, "0")
}, 1000)

console.log(hours, minutes, seconds);
})

// startBtn.onclick = timer;