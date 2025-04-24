import mongoose from "mongoose";
const schema = mongoose.Schema;

const messageSchema = new schema(
  {
    senderId: {
      type: schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
