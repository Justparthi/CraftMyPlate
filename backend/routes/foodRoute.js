import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine 
const Storage = multer.diskStorage({
  destination: "uploads", // specify the destination folder for storing files
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`); // Use Date.now() to avoid file name conflicts
  }
});

// Initialize multer with the Storage engine
const upload = multer({ storage: Storage });

foodRouter.post("/add", upload.single("image"), addFood); // Use the upload middleware for file handling

foodRouter.get("/list",listFood)

foodRouter.post("/remove", removeFood);

export default foodRouter;
