const data = require("./db.json");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;
server.use(middlewares);

server.listen(port, () => {
  console.log("Running in Port 4000");
});
