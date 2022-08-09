const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();

router.get("/", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
  });

  blog
    .save()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  var query = { _id: req.params.id };
  var newValues = {
    $set: {
      title: req.body.title,
      snippet: req.body.snippet,
      body: req.body.body,
    },
  };

  Blog.updateOne(query, newValues)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
