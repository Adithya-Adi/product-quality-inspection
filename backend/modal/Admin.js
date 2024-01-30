import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    userName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
);

const AdminModal = mongoose.model("Admin", adminSchema);

export default AdminModal;