let express = require("express");
let app = express();
let fs = require("fs");
let favicon = require("serve-favicon");

let content = fs.readFileSync("newsData.json");
let jsonCnt = JSON.parse(content);

app.use(express.static(__dirname + "/assets"));
app.use(favicon(__dirname + "/assets/pics/grapes.svg"));
//const PORT = 3000;

app.set("view engine", "pug");
let port = process.env.PORT || 5500;

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

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => console.log(`listening on ${port}`));
