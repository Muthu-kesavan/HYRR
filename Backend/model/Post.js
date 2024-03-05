import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  profileAvatar: {
    type: String,
    required: true
  }
}
  );
  
  export default mongoose.model("Post", PostSchema);
