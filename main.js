const user = require("./userInfo");
const formatName = require("./formatName");

const formattedName = formatName(user.name);

const hobbyUpper = user.hobby.toUpperCase();

const hobbyLength = user.hobby.length;

console.log("User Name:", formattedName);
console.log("Hobby (Uppercase):", hobbyUpper);
console.log("Hobby Length:", hobbyLength);
