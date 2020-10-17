// start by grabbing elements from the html, defining them in JS
var today= document.getElementById("currentDay");
today.textContent = moment().format('dddd, MMM Do'); //todays date displayed in heading
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

//theschedule object holds an array of our variables, along with integers that correspond to each variables military time value
// these arrays are ordered so the object at [i] in both arrays corresponds with eachother
var schedule = { 
    times: [nineAM, tenAM, elevenAM, twelveAM, onePM, twoPM, threePM, fourPM, fivePM], 
    timeInts: [9, 10, 11, 12, 13, 14, 15, 16, 17]
};

//this function sets the class of a text block based on time, so the text block receives CSS stylings of that class
function ScheduleColor() {
    for (var i= 0; i < schedule.times.length; i++) {
        if (schedule.timeInts[i] < moment().format('H')) { //moment 'H' returns an integer of the current time in military format (ex: 15 for 3pm)
           schedule.times[i].className = "past";
        } else if (schedule.timeInts[i] == moment().format('H')) { 
            schedule.times[i].className = "present"; 
        } else {
            schedule.times[i].className = "future";
        }
    }
}

//function ran upon opening page. Pulls data from local storage and and sets textbox value to value of the saved item
function main() {
    for (var i= 0; i < schedule.times.length; i++) {
        var content= schedule.times[i];
        var savedItem = localStorage.getItem(content.id);
        content.value = savedItem;
    }
    
    ScheduleColor();
}

//each button was assigned a value attribute identical to the id of its corresponding textbox
//on click, we target the textbox we want with the value of the button and set the key equal to the button value/ text id
$(savebtn).on("click", function() {
    var userInput= document.getElementById(this.value);
    localStorage.setItem(this.value, userInput.value);
});


// wasn't in instructions but added clear button for convenience 
$(clearbtn).on("click", function() {
    localStorage.clear();
    location.reload();
});

main();