const managerInfo = require("./managerInfo");
const capitalizeName = require("./capitalizeName");

const formattedName = capitalizeName(managerInfo.name);

const upperRole = managerInfo.role.toUpperCase();

const roleLength = managerInfo.role.length;

const searchPosition = managerInfo.role.search("inventory");

console.log("Manager Name:", formattedName);
console.log("Manager Role:", upperRole);
console.log("Role Length:", roleLength);
console.log("Position of 'inventory':", searchPosition);
