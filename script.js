//your JS code here. If required.
let para = document.querySelector("#timer");

function timeshow() {
    const d = new Date();
    let month = d.getMonth();
    let day = d.getDay();
    let year = d.getFullYear();

    let hrs = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    if (min < 10) {
        min = '0' + min;
    }
    let datetime = `${month}/${day}/${year}`;
    let time = converttime(hrs, min, sec)

    para.innerHTML = `${datetime}, ${time}`;
}

function converttime(hrs, min, sec) {
    if (hrs == 0) {
        return `12:${min}:${sec} AM`;
    } else if (hrs > 12) {
        return `${hrs - 12}:${min}:${sec} PM`;
    } else if (hrs == 12) {
        return `12:${min}:${sec} PM`;
    } else {
        return `${hrs}:${min}:${sec} AM`;
    }
}

// Call the timeshow function every second
setInterval(timeshow, 1000);