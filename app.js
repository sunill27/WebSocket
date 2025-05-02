const express = require("express");
const app = express();
const PORT = 4000;

//Database:
const dbConfig = require("./database");
dbConfig();

const { Server } = require("socket.io");
const Book = require("./model/bookModel");
const server = app.listen(PORT, () => {
  console.log("Server has started at port:", PORT);
});

const io = new Server(server);

//CRUD using Socket:
io.on("connection", (socket) => {
  console.log("User Connected.");

  //Create Operation:
  socket.on("addBook", async (data) => {
    try {
      if (data) {
        const { bookName, bookPrice, authorName, publication } = data;
        const newBook = await Book.create({
          bookName,
          bookPrice,
          authorName,
          publication,
        });
        io.to(socket.id).emit("response", {
          status: 200,
          message: "Book Created Successfully.",
          data: newBook,
        });
      }
    } catch (error) {
      socket.emit("response", {
        status: 500,
        message: "Something went wrong.",
      });
    }
  });

  //Read Operation:
  socket.on("getBooks", async (data) => {
    try {
      const books = await Book.find();
      socket.emit("response", {
        status: 200,
        message: "Book fetched successfully.",
        data: books,
      });
    } catch (error) {
      socket.emit("response", {
        status: 500,
        message: "Something went wrong.",
      });
    }
  });
});
