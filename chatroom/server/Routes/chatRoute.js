import {CreateChat,findUserChats,findChat} from '../Controllers/chatControllers.js';
import express from "express";
const router = express.Router();




router.post("/" ,CreateChat);
router.post("/:userId" ,findUserChats);
router.post("/find/:firstId/:secondId" ,findChat);

export default router;
