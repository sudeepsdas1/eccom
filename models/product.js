const mongoose = require("mongoose"); //requiring mongoose
const ProductSchema = new mongoose.Schema( //defining the type of dat to be stored
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: String, required: true },
    }, { timestamp: true }
);
module.exports = mongoose.model("User", UserSchema); //exporting for the usage