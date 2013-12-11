// app.js
function readingTime(words) {
    var mins = words / 180;

    if (mins < 1) {
        return "1";
    }
    return Math.round(mins);
}

