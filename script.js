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

var schedule = {
    sched: [nine, ten, eleven, twelve, one, two, three, four, five], 
    times: [9, 10, 11, 12, 13, 14, 15, 18, 19]
}


    for (var i= 0; i < 9; i++) {
        if (schedule.times[i] < moment().format('H')) {
           schedule.sched[i].style.background = "rgba(128, 128, 128, 0.432)";
        } else if (schedule.times[i] == moment().format('H')) {
            schedule.sched[i].style.background = "LightCoral";
        }
    }

$(btn).on("click", function() {
    var ff= document.getElementById(this.value);
    localStorage.setItem(this.value, ff.value);
});

function open() {
    for (var i= 0; i < schedule.sched.length; i++) {
        var text= schedule.sched[i];
        var item = localStorage.getItem(text.id);
        text.value = item;
    }
}

open();






