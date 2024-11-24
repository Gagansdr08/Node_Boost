const _ = require("lodash");
const arr = [1, [2, [3, [4]]]];
const newitem = _.flattenDeep(arr);
console.log(newitem);
