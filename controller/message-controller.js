import Conversation from '../model/conversation-model';
import { Message } from '../models/message-model';


// Controller to add a new message
const addMessage = (req, res) => {
    const { content, sender } = req.body;
    const newMessage = new Message({ content, sender, ConversationId });
    newMessage.save();
    res.json({ message: 'Message added successfully', data: { content, sender } });
};

// Export the controllers for usage in other files
module.exports = {
    getMessageById,
    addMessage,
};