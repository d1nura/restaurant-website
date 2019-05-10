let express = require("express");
let app = express();
let fs = require("fs");

const PORT = 3001;

let content = fs.readFileSync("newsData.json");
let jsonCnt = JSON.parse(content);

app.use(express.static(__dirname + "/assets"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { obj: jsonCnt });
});

app.get("/menuList", (req, res) => {
  res.render("menuList");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/reservations", (req, res) => {
  res.render("reservations");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
