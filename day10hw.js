const fs = require("fs");

const introStream = fs.createReadStream("intro.txt");
const conclusionStream = fs.createReadStream("conclusion.txt");

let introData = Buffer.alloc(0);
let conclusionData = Buffer.alloc(0);

introStream.on("data", (chunk) => {
  introData = Buffer.concat([introData, chunk]);
});

introStream.on("end", () => {
  conclusionStream.on("data", (chunk) => {
    conclusionData = Buffer.concat([conclusionData, chunk]);
  });

  conclusionStream.on("end", () => {
    const mergedData = Buffer.concat([introData, Buffer.from("\n\n"), conclusionData]);

    const writeStream = fs.createWriteStream("full_report.txt");
    writeStream.write(mergedData);

    writeStream.end(() => {
      console.log("Merging complete!");
    });
  });
});

introStream.on("error", (err) => console.log("Error reading intro.txt:", err));
conclusionStream.on("error", (err) => console.log("Error reading conclusion.txt:", err));