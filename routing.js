const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});
