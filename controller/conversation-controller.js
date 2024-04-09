
import Conversation from '../model/conversation-model.js';


export const addConversation = async (req, res) => {
    const { members } = req.body;
    try {
        const conversation = await Conversation.findOne({
            members: { $all: members }
        });

        if (!conversation) {
            const newConversation = new Conversation({ members: members, messages: [] });
            await newConversation.save();
            return res.status(200).json(newConversation);
        }
        else {
            return res.status(200).json(conversation);
        }
    }
    catch (err) {
        return res.status(500).json(err.message);
    }
}