import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://craftmyplate:craftyourplate@cluster0.im2xg.mongodb.net/craftmyplate').then(()=>console.log("db connected"))
}

