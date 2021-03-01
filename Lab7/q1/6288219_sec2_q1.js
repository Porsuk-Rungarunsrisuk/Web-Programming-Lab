/* Import express, path, body-parser  */
const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");

/* Router Module for handling routing */
const router = express.Router();
app.use("/", router); 

/* --- Your code goes here --- */

router.get("/form-group", function (req, res) {
    console.log(req.method);
    console.log(req.query);
    const name = req.query.name;
    const email = req.query.email;
    const messages = req.query.messages;
    console.log('Form submitted by '+ name);
    res.send(`<p><h1 style = "bold">Greeting <span style = "background-color: #CBC3E3">${name}</span> </h1></p> 
    <br>The following message has been received:<span style = "background-color: #00FFFF">${messages}</span></br> 
      we will contact you via <span style = "background-color: #A6D609">${email}</span>`);
});
router.get("/", function (req, res) {
    console.log('Accessed Contact Us');
    res.sendFile(path.join(__dirname + '/contact_us.html'));
});
router.post("/submit-form",function (req, res){
    console.log(req.method);
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const messages = req.body.messages;
    res.send(`Greeting ${name} The following message has been received:${messages} we will contact you via ${email}`);
});
/* --- ------------------- --- */

/* Server listening */
app.listen(3030, function () {
    console.log("Server listening at Port 3030");
});