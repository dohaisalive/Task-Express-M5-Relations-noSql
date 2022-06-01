const express = require("express");
const router = express.Router();
const { fetchPostsWithTag, tagsCreate } = require("./tags.controllers");

router.param("tagId", async (req, res, next, tagId) => {
  const tag = await fetchAuthor(tagId, next);
  if (tag) {
    req.tag = tag;
    next();
  } else {
    const err = new Error("Tag Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", fetchPostsWithTag);
router.post("/", tagsCreate);

module.exports = router;
