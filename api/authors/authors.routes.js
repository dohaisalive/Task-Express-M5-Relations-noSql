const express = require("express");
const router = express.Router();
const {
  authorGet,
  postsCreate,
  authorCreate,
  authorUpdate,
  authorDelete,
  fetchAuthor,
} = require("./authors.controllers");

router.param("authorId", async (req, res, next, authorId) => {
  const author = await fetchAuthor(authorId, next);
  if (author) {
    req.author = author;
    next();
  } else {
    const err = new Error("Author Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", authorGet);
router.post("/", authorCreate);
router.delete("/:authorId", authorDelete);
router.put("/:authorId", authorUpdate);
router.post("/:authorId/posts", postsCreate);

module.exports = router;
