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
const newRouter   = require("./routes/newRouter")

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use("/", indexRouter)
app.use("/new", newRouter)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});