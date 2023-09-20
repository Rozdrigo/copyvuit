const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://0.0.0.0:27017/vuit")
}

main();

module.exports = mongoose;
