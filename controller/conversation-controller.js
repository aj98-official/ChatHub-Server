const mongoose = require('mongoose');
const Conversation = require('./conversation-model');

async function conversationExists(user1Id, user2Id) {
    const conversation = await Conversation.findOne({
        members: { $all: [mongoose.Types.ObjectId(user1Id), mongoose.Types.ObjectId(user2Id)] }
    });

    return conversation !== null;
}