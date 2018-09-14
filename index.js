const path = require("path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/explore", (req, res) => res.render("explore", { info: "Node" }));
app.get("/docs", (req, res) => res.render("docs", { info: "Node" }));
app.get("/discussion", (req, res) =>
  res.render("discussion", { info: "Node" })
);

app.listen(3000, () => {
  console.log("App is listening on port 3000 ...");
});
