const socketIO = require("socket.io");

module.exports = (server) => {
  const io = socketIO(server, { cors: { origin: "*" } });

  io.on("connection", socket => {
    socket.on("sendMessage", msg => {
      io.emit("receiveMessage", msg);
    });

    socket.on("disconnect", () => {});
  });
};
