const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookName: {
    type: String,
  },
  bookPrice: Number,
  authorName: String,
  publication: String,
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
