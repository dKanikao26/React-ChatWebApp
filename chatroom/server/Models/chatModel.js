import mongoose from "mongoose"; // Import Mongoose library
//import user from './Models/userModel.js'; // Import user model (though it is not used in this snippet)

// Define a new schema for a chat with timestamps
const ChatSchema = new mongoose.Schema(
    {
        members: Array, // Define the 'members' field as an array
    },
    {
        timestamps: true // Enable timestamps to automatically create 'createdAt' and 'updatedAt' fields
    }
);

// Create a model based on the schema
const Chat = mongoose.model('Chat', ChatSchema);

// Export the model
export default Chat;
