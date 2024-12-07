const express = require("express");
const app = express();
const path = require("node:path");


// View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Routes
const indexRouter = require("./routes/indexRouter");

// Middleware
app.use("/", indexRouter)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});