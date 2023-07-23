import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type:String,
            trim: true,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            trim: true,
            default: ""
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Product', productSchema);