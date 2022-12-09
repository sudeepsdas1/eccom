const express = require("express"); //here u are demanding for express
const app = express(); //here u are creating a function express in the constapp
const mongoose = require("mongoose"); //requesting for mongoose module
const env = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
mongoose
    .connect(
        "mongodb+srv://sudeepsdas:sudeepmongodb@cluster0.zkx0dj8.mongodb.net/?retryWrites=true&w=majority"
    )
    //MONGO_url is a set where we are saving the password and hence using it
    //
    .then(() => {
        console.log("DB connection sucessful");
    })
    .catch((err) => {
        console.log(err);
    });
app.get("/api/test", (req, res) => {
    res.send("sucessfull"); //app.get is a /api/test is in port localhost5000 and prompts sucessfull
});

// mongoose
// .connect(
//     "mongodb+srv://sudeepsdas:sudeepmongodb@cluster0.zkx0dj8.mongodb.net/shop?retryWrites=true&w=majority"
// )
// //
// .then(() => console.log("DB connection sucessful"))
// .catch(() => {
//     console.log("error");
// });

//here we connected the mongoose where we first created a cluster in mongodb site and then we past
//in database section we use connect and do the further proceedings and copy the url
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(5000, () => {
    //providing a port number for
    //(app.listen is afunction which excepts a port value 5000 and creating a function where the its running )
    console.log("app is running");
}); //creating a call back function for