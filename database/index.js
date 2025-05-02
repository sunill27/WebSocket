const mongoose = require("mongoose");

async function dbConfig() {
  await mongoose.connect(
    "mongodb+srv://sunilchand675:MlCBDfU24ZfmDwtl@cluster0.cvbawnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Database Connected!");
}

module.exports = dbConfig;
