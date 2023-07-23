import mongoose from "mongoose";
import User from "./user.model.js";

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type:String,
            trim: true,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Task', taskSchema);