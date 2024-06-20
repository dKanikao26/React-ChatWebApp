import express from "express";
import {register, login ,find , findAll} from   '../Controllers/userControllers.js'   ;                                                        "./Controllers/userControllers.js"


const router = express.Router();//  seperate various route from main apllication

router.post("/register" , register );
router.post("/login" , login );
router.get("/find/:userId" ,find );
router.get("/" ,findAll );


export default router;
