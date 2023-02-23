const express = require("express");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const instructorsRouter = require("./routers/instructor")
const coustomersRouter = require("./routers/coustomer")

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(instructorsRouter)
app.use(coustomersRouter)

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
  // console.log(inst);
});
