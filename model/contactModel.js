const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
    type: String,
    default: null,
  },
  phone: {
    type: Number,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  linkedIn_url:{
    type: String,
    default: null,
  }
});

const Contact = mongoose.model("contactData", contactSchema);
module.export = Contact