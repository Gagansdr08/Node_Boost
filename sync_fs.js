const { readFileSync, writeFileSync, write } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `This is a result of a file operation: ${first}, ${second}`,
  { flag: "a" }
);
