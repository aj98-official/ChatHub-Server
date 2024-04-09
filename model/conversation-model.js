import { mongoose } from "mongoose";

const conversationSchema = new mongoose.Schema({
    members: [{
        type: String,
        ref: 'User'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;