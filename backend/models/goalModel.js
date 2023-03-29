import mongoose from "mongoose";

// Create a schema for the goals
const goalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // This is the id of the user
        required: true,
        ref: "User" // This is the name of the model that we are referencing
    },
    text: {
        type: String,
        required: [true, "Please add some text"],
    }
}, {
    timestamps: true
})

export default mongoose.model("Goal", goalSchema);