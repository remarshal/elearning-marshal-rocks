import mongoose from 'mongoose'
import { Schema } from mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 32,
    },
    newletter: {
        type: Boolean,
    },
    photo: {
        type: String,
        default: "/user-avatar.png"
    },
    role: {
        type: [String],
        default: ["Subscriber"],
        enum: ["Subscriber", "Instructor", "Admin"],
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
},
{timestamps: true}
);

export default mongoose.model("User", userSchema)