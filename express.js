let express = require("express");
let app = express();

const PORT = 3001;

app.use(express.static(__dirname + "/assets"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
