import ChatModel from '../Models/chatModel.js'
// endpoint to createchat 
//endpoint to getall chat of a user
// find chat between two user

//1

/* The $all operator in MongoDB is used to match documents where a field contains all the specified elements in an array. This operator is particularly useful when you want to ensure that an array field in your document contains multiple specific values, regardless of the order in which they appear */
export const CreateChat = async(req,res)=>{
    
    try{
        const{first_id, second_id} = req.body;
    const  chat =await  ChatModel.findOne({
        menbers :{ $all:[first_id , second_id]}//$all check documet that has both first_id and secomd_id
    });
    if(chat) return res.status(200).json(chat);

    
       const newchat = new ChatModel({
            members:[first_id , second_id]
        })
        const response = await newchat.save();
        res.status(200).json(response);



    }catch(error){
        console.log(error);
        res.status(500).json(error);

    }    

}
export const findUserChats = async(req,res)=>{
    const userId = req.params.userId;
    try {
        const chats = ChatModel.findOne({
            menbers:{$in : [userId]}
        })
        res.status(
            200
        ).json(chats);


    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }

}
export const findChat = async(req,res)=>{
    const {firstId, secondId} = req.params;
    try {
        const chat = ChatModel.findOne({
            menbers:{$all : [firstId ,secondId]}
        })
        res.status(
            200
        ).json(chat);


    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }

}