let express = require("express");
let app = express();
let fs = require("fs");

let content = fs.readFileSync("newsData.json");
let jsonCnt = JSON.parse(content);

app.use(express.static(__dirname + "/assets"));

const PORT = 3000;

app.set("view engine", "pug");
<<<<<<< HEAD:index.js
app.set("port", process.env.PORT);
=======
app.set("port",process.env.PORT)
>>>>>>> 6ba9601cb73cbea806a00401f42234ad14d9efdd:index.js

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

<<<<<<< HEAD:index.js
app.listen(app.get("port"), () => console.log(`listening on ${PORT}`));
=======
app.listen(app.get("port"), () =>
  console.log(`listening on port ${app.get("port")}`)
);
>>>>>>> 6ba9601cb73cbea806a00401f42234ad14d9efdd:index.js
