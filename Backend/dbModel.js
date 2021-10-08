import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

//collection
export default mongoose.model("tiktokvideos", postSchema);
