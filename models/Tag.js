const { model, Schema } = require("mongoose");

const TagSchema = new Schema({
  name: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

module.exports = model("Tag", TagSchema);
