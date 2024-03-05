import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        email:{ 
            type: String,
            required: true,
            unique: true 
        },
        password:{ 
            type: String,
            required: true 
            },
        profileProfile:{
             type: String, 
            },
        description:{
            type: String,
        },
     },
        { 
            timestamps: true 
        }
);

export default mongoose.model("User", UserSchema);