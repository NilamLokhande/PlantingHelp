const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ngoSchema = mongoose.Schema(
    {
      ngo_name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required:true,
      },
      location: {
        type: String,
        required: true,
      },
      domain: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );


  module.exports = mongoose.model("User", ngoSchema);