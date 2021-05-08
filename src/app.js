const express = require("express");
const app = express();
port = process.env.PORT || 8000;

const router = require("./routers/men");

app.use(express.json());
app.use(router);

require("../src/db/conn");

app.listen(port, () => {
  console.log(`connection Successful with port no ${port}`);
});
