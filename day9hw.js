const fs = require("fs");
const path = require("path");

let buf1 = Buffer.from("Node.js buffers are powerful", "utf-8");

let prefix = Buffer.alloc(buf1.length + 5); 
prefix.write("FAST ");                     
buf1.copy(prefix, 5);                      
buf1 = prefix;                             

console.log("Modified buf1:", buf1.toString());

let buf2 = Buffer.from(" and flexible!", "utf-8");

let finalBuffer = Buffer.concat([buf1, buf2]);

let finalString = finalBuffer.toString();

console.log("Final Output:", finalString);

let filePath = path.join(__dirname, "buffer_output.txt");

fs.writeFileSync(filePath, finalString);

console.log("File saved at:", filePath);
