const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const routes = require("./routes/routes");

app.use(express.json());
app.use(cors());

const db =
  "mongodb+srv://hemanth:kumar@cluster0-xhozu.mongodb.net/test?retryWrites=true&w=majority";
const connect = mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// app.use("/", (req, res) => {
//   res.send("Hello");
// });

app.use("/", routes);

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
