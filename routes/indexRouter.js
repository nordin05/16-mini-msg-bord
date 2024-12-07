const { Router } = require("express");
const { messages } = require("../messages")

const router = Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = router;