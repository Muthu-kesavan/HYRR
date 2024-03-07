import Post from "../model/Post.js";

export const getFeed = async (req, res, next) => {
  try {
    const feeds = await Post.find({
    });
    res.status(200).json(feeds);
  } catch (err) {
    console.log("Error");
  }
};