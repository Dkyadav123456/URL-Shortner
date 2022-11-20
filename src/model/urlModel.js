const mongoose = require("mongoose");

//******************************[CREATE-URL-SCHEMA]*******************************//
const urlSchema = new mongoose.Schema(
  {
    urlCode: {
      type: String,
      unique: true,
      required: true,
      lowecase: true,
      trim: true,
    },
    longUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

//*********************[CREATE MODEL FROM SCHEMA AND EXPORT IT ]******************//
module.exports = mongoose.model("Url", urlSchema);
