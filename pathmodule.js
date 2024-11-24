//Path modules

const path = require("path");
console.log(path.sep);

//Output: \ (Windows) or / (Mac/Linux)

const join = path.join(__dirname, "/content", "//subfolder", "test.txt"); // the path module will correct any mistakes in the separators
console.log(join);

const base = path.basename(join);
console.log(base);
//Output: test.txt

const resolve = path.resolve(__dirname, "content", "subfolder");
console.log(resolve);
