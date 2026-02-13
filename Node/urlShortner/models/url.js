const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
      unique: true,
      required: true,
      index: true
    },

    redirectUrl: {
      type: String,
      required: true
    },

    visitHistory: [
      {
        timestamp: {
          type: Number
        }
      }
    ],
    createdBy : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'users', 
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Url", UrlSchema);
