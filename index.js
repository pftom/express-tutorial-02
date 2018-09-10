const path = require("path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => res.render("index", { info: "Node" }));

app.listen(3000, () => {
  console.log("App is listening on port 3000 ...");
});
