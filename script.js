var current= document.getElementById("currentDay");
current.textContent = moment().format('dddd, MMM Do'); 
var nine= document.getElementById("nine");
var ten= document.getElementById("ten");
var eleven= document.getElementById("eleven");
var twelve= document.getElementById("twelve");
var one= document.getElementById("one");
var two= document.getElementById("two");
var three= document.getElementById("three");
var four= document.getElementById("four");
var five= document.getElementById("five");
var btn = document.querySelectorAll("button");
var clearbtn= document.getElementById("clear");

var schedule = {
    sched: [nine, ten, eleven, twelve, one, two, three, four, five], 
    times: [9, 10, 11, 12, 13, 14, 15, 16, 17]
};

function ScheduleColor() {
    for (var i= 0; i < 9; i++) {
        if (schedule.times[i] < moment().format('H')) {
           schedule.sched[i].className = "past";
        } else if (schedule.times[i] == moment().format('H')) {
            schedule.sched[i].className = "present";
        } else {
            schedule.sched[i].className = "future";
        }
    }
}

function main() {
    for (var i= 0; i < schedule.sched.length; i++) {
        var text= schedule.sched[i];
        var item = localStorage.getItem(text.id);
        text.value = item;
    }
    
    ScheduleColor();
}

$(btn).on("click", function() {
    var ff= document.getElementById(this.value);
    localStorage.setItem(this.value, ff.value);
});

$(clearbtn).on("click", function() {
    localStorage.clear();
    location.href= "index.html";
});

main();