const mongoose = require("mongoose"); //requiring mongoose
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema( //defining the type of dat to be stored
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    }, { timestamp: true }
);

UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
module.exports = mongoose.model("User", UserSchema); //exporting for the usage