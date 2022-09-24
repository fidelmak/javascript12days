var a_hour = window.prompt("Enter hour")
var a_minute = window.prompt("Enter minute")
var a_second = window.prompt("Enter seconds")
document.querySelector('.alarm').textContent="NOT YET";
function current_date(){
    const d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    document.querySelector('.current_time').textContent = hours + ":" + minutes + ":" + seconds
    document.querySelector('.alarm_time').textContent = a_hour + ":" + a_minute + ":" + a_second
    if((a_hour==hours)&&(a_minute==minutes)&&(a_second==seconds)){
        document.querySelector(".alarm").textContent = "Time is over please"
        }
    setTimeout(current_date, 1000)

    }
current_date()
