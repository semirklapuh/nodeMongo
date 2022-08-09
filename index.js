const express = require("express");
const blogRouter = require("./routes/blog");
const moongose = require("mongoose");
const Blog = require("./models/blog");

const PORT = process.env.PORT || 4000;

const app = express();

const uri =
  "mongodb+srv://mongo:mongo123@cluster0.gsq4gdj.mongodb.net/blog?retryWrites=true&w=majority";
moongose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    (result) => console.log("Connected to db..."),
    app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))
  )
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/v1/blog", blogRouter);
