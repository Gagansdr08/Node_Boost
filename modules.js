//MODULES
//every file in node is a module(by default)
const firstfunc = (name) => {
  console.log(`Hello there:${name}`);
};

const names = require("./utils");
console.log(names.n1);

module.exports = firstfunc;
// require("./7_tut");
