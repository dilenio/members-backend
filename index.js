const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

// PORT MUST BE 3000
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on PORT: ${PORT}`);
});
