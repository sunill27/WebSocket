const express = require("express");

const app = express();
const PORT = 4000;

const { Server } = require("socket.io");

const server = app.listen(PORT, () => {
  console.log("Server has started at port:", PORT);
});

const io = new Server(server);

io.on("connection", (socket) => {
  // Give Postman time to start listening
  //   setTimeout(() => {
  //     socket.emit("hi", {
  //       message: "Hello from server!",
  //     });
  //   }, 1000);
  //   console.log(socket.id);
  //   console.log("Someone has connected!!");

  //   socket.on("sendData", (data) => {
  //     if (data) {
  //       //To notify all clients:
  //       //   io.emit("response", {
  //       //     message: "Thank you, your data is received!",
  //       //   });

  //       //To notify only the sender:
  //       io.to(socket.id).emit("response", {
  //         message: "Thank you, your data is received!",
  //       });

  //       //To notify only the client who sent the data:
  //       //   socket.emit("response", {
  //       //     message: "Thank you, your data is received!",
  //       //   });
  //     }
  //   });

  //Task:
  socket.on("message", (data) => {
    console.log(data);
    socket.emit("response", {
      message: data,
    });
  });

  //   socket.on("disconnect", () => {
  //     console.log("User is disconnected!!");
  //   });
});
