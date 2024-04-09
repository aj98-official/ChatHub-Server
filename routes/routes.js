import express from "express";
import { addUser, getUser } from "../controller/user-controller.js";
import { addConversation } from "../controller/conversation-controller.js";


const route = express.Router();

route.post('/users/add', addUser);
route.get('/users', getUser);

route.post('/conversation', addConversation);


export default route;