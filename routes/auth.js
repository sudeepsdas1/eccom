// const router = require("express").Router(); //asking for express
const express = require("express");
const router = express.Router();
const User = require("../models/user"); //in the user route
const bcrypt = require("bcryptjs");
// const { json } = require("express");
//REGISTER
const jwt = require("jsonwebtoken");
router.post("/register", async(req, res) => {
    const { username, email, password } = req.body;

    try {
        hashedPassword = await bcrypt.hash(password, 10);
        //to accept the username emialand pswd
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save(); //using async and await
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = User.findOne({ username });
    if (!user) {
        res.status(400).json({ message: "user invalid" });
    }
    const matchedPassword = User.comparePassword(password);
    if (!matchedPassword) {
        res.status(400).json({ message: "username or password incorrect" });
    }
    const token = generateToken(user);
    res.status(200).json({
        username: user.username,
        password: user.password,
        email: user.email,
        token: token,
    });
});

function generateToken(user) {
    const payload = {
        userid: user.id,
        username: user.username,
    };
    const options = {
        expiresIn: "1h",
    };
    const token = jwt.sign(payload, secrets.jwtSecret, options);

    return token;
}

module.exports = router;

//mistake was that u didnt mentioned the module.exports = router;   as erreor shown in index.js