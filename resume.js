"use strict";
console.log("Name: " + "haylee hunter".toUpperCase());
console.log("Career:Full Stack Engineer");
console.log("");
console.log("");
console.log("My Interests");
console.log("*Paiting");
console.log("*Riding my Bike");
console.log("*Traveling");
console.log("*Music");
console.log("*Paiting");
console.log("");
console.log("My Preious Experience");
var companyName = "Innovate Birmingham";
var jobTitle = "Full Stack Engineer";
var description = "this is a job description text";
function displayPosition(companyName, jobTitle, description) {
    return (jobTitle + " at " + companyName + " - " + description);
}
displayPosition(companyName, jobTitle, description);
function displaySkill(skillName, isCool) {
    if (isCool == true) {
        console.log("BAM: " + skillName);
    }
    else {
        console.log(skillName);
    }
}
