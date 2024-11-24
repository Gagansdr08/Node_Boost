//global variables , the variables that can be accessed anywhere in the application
//require=funtion to use module
//module=info about current module
//process=info about where the program is being executed
//__dirname=info about the directory where the program is being executed
//__filename=info about the file where the program is being executed
console.log(__dirname);
setInterval(() => {
  console.log("Hello");
}, 1000); //this is 1000ms=1sec
