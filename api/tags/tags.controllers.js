const Tag = require("../../models/Tag");

exports.fetchPostsWithTag = async (req, res, next) => {
  try {
    const tags = await Tag.find({}, "-createdAt -updatedAt").populate(
      "posts",
      "name"
    );
    res.json(tags);
  } catch (error) {
    next(error);
  }
};

exports.tagsCreate = async (req, res, next) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    next(error);
  }
};
