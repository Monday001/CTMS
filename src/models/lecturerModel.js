import mongoose from "mongoose";

const lecturerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide firstname"],
        unique: true,
    },
    lastname: {
        type: String,
        required: [true, "Please provide lastname"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },   
    isVerified: {
        type: Boolean,
        default: false,
    },
    employeeNumber: String,
})

const Lecturer = mongoose.models.lecturer || mongoose.model("lecturer", lecturerSchema);

export default Lecturer  