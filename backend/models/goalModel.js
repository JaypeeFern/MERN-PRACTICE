import mongoose from "mongoose";

// Create a schema for the goals
const goalSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please add some text"],
    }
}, {
    timestamps: true
})

export default mongoose.model("Goal", goalSchema);