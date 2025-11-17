import { UserType } from "@/utils/types";
import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new Schema<UserType>({
    name: String,
    age: Number,
    
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema)