var countDownBatman = new Date("Oct 3, 2025 00:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var today = new Date().getTime();
var timeleft = countDownBatman - today;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = days  + " Days  "  
document.getElementById("hours").innerHTML = hours + " Hours " 
document.getElementById("mins").innerHTML = minutes + " Minutes "  
document.getElementById("secs").innerHTML = seconds + " Seconds " 
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);