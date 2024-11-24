//os module which is a built in module
const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

console.log(os.uptime()); //system uptime : basically how long the system has been running
