const mongoose = require("mongoose");

const productScheeme = mongoose.Schema(
  {
    name: {
      type: String,
      required:[true,"please insert your name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product =mongoose.model("product",productScheeme)
module.exports= Product;