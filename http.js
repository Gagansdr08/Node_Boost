const http = require("http");

const server = http.createServer((req, res) => {
  if (req == "/") {
    res.end("Welcome my man");
  }
  if (req == "/about") {
    res.end("About this page which is empty!");
  }
  res.end(
    `<h1>Oopps! 404 not found</h1>
        <a href="/">Back</a>`
  );
  //   res.write("Welcome to our home page");
  //   res.end;
});
server.listen(3000);
