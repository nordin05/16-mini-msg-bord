const { Router } = require("express");
const { messages } = require("../messages")

const router = Router();

router.get("/", (req, res) => {
    res.render("form");
});

router.post("/", (req, res) => {
    messages.push({ 
        text: req.body.msg, 
        user: req.body.name, 
        added: new Date() 
    });
    res.redirect("/")
});

module.exports = router;