let fullName = " Sarah Johnson ";
let welcomeMsg = " Welcome to the new platform! Hope you enjoy your day";

let user = {
  fullName: fullName,
  welcomeMsg: welcomeMsg,

displayDetails() {
  let trimmedName = this.fullName.trim();
  let trimmedmsg = this.welcomeMsg.trim();


console.log("First character of name:",trimmedName.charAt(0));

console.log("Total number of characters in welcome message:",trimmedmsg.length);

console.log("First 15 characters (slice):", trimmedmsg.slice(0, 15));
console.log("First 15 characters (substring):", trimmedmsg.substring(0, 15));

console.log("Name in uppercase:", trimmedName.toUpperCase());

console.log("Message in lowercase:", trimmedmsg.toLowerCase());

let nameParts = trimmedName.split(" ");
    console.log("Split name array:", nameParts);

 let lowerMsg = trimmedmsg.toLowerCase();
    let position = lowerMsg.indexOf("welcome");
    console.log("Position of 'welcome':", position);

 let combined = `${trimmedName} says: "${trimmedmsg}"`;
    console.log("Combined message:", combined);
}
}
user.displayDetails();