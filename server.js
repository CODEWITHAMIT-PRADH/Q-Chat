const express = require("express");
const http = require("http");
const cors = require("cors");
const connectDB = require("./config/db");
const socketInit = require("./socket/socket");

connectDB();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
app.use("/api/chat", require("./routes/chat"));
app.use("/api/status", require("./routes/status"));

socketInit(server);

server.listen(5000, () => {
  console.log("Q Chat backend running on port 5000");
});
