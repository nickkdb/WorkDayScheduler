var today= document.getElementById("currentDay");
today.textContent = moment().format('dddd, MMM Do'); 
var nineAM= document.getElementById("nine");
var tenAM= document.getElementById("ten");
var elevenAM= document.getElementById("eleven");
var twelveAM= document.getElementById("twelve");
var onePM= document.getElementById("one");
var twoPM= document.getElementById("two");
var threePM= document.getElementById("three");
var fourPM= document.getElementById("four");
var fivePM= document.getElementById("five");
var savebtn = document.querySelectorAll("button");
var clearbtn= document.getElementById("clear");

var schedule = {
    times: [nineAM, tenAM, elevenAM, twelveAM, onePM, twoPM, threePM, fourPM, fivePM], 
    timeInts: [9, 10, 11, 12, 13, 14, 15, 16, 17]
};

function ScheduleColor() {
    for (var i= 0; i < schedule.times.length; i++) {
        if (schedule.timeInts[i] < moment().format('H')) {
           schedule.times[i].className = "past";
        } else if (schedule.timeInts[i] == moment().format('H')) {
            schedule.times[i].className = "present";
        } else {
            schedule.times[i].className = "future";
        }
    }
}

function main() {
    for (var i= 0; i < schedule.times.length; i++) {
        var content= schedule.times[i];
        var savedItem = localStorage.getItem(content.id);
        content.value = savedItem;
    }
    
    ScheduleColor();
}

$(savebtn).on("click", function() {
    var userInput= document.getElementById(this.value);
    localStorage.setItem(this.value, userInput.value);
});

$(clearbtn).on("click", function() {
    localStorage.clear();
    location.href= "index.html";
});

main();