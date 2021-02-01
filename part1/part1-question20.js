function printDate() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setTimeout(printDate, 1000);