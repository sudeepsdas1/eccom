// app.get("/api/test", () => {
//     console.log("sucessfull");  //app.get is a /api/test is in port localhost5000 and prompts sucessfull
// });

//to use this in structured way we are creating a route in which we will create certain routes

const router = require("express").Router();
// router.get("/userposttest", (req, res) => {
//     res.send("user sucessfull");
// });
module.exports = router;