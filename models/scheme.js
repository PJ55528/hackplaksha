import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
    title: String,
    description: String,
    },
    { timestamps: true ,
    }
);

const Scheme = mongoose.models.Scheme || mongoose.model("Scheme", topicSchema);

export default Scheme;