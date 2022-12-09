const mongoose = require("mongoose") //requiring mongoose
const ProductSchema = new mongoose.Schema( //defining the type of dat to be stored
    {
        userId: { type: String, required: true, unique: true },
        Product: [{
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1;
            },
        }, ],
    }, { timestamp: true }
)
module.exports = mongoose.model("User", UserSchema); //exporting for the usage