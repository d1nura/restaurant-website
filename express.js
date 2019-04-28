let express = require("express");
let app = express();
let fs = require("fs");

const PORT = 3003;

let content = fs.readFileSync("newsData.json");
let jsonCnt = JSON.parse(content);

app.use(express.static(__dirname + "/assets"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { obj: jsonCnt });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
