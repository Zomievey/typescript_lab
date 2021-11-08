
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
displayPosition("Innovate Birmingham", "Full Stack Engineer");
displayPosition("text", "text", "text");

function displayPosition(companyNAme, jobTitle, description) {
    console.log(jobTitle + " at " + companyName + " - " + description);
}

function displaySkill(skillName, isCool) {
    if (isCool == true) {
        console.log("BAM: " + skillName);
    } else { 
        console.log(skillName); 
    }
}

displaySkill()
 