const  Conversatation  = require("../models/conversatationmodel");
const Message = require("../models/messagemodel")


exports.sendMessage = async (req,res) =>{
    console.log("zzzzz")
    try {

        const {message} = req.body;
        console.log(message)
        const {id:reciverId} = req.params; 
        
        console.log(reciverId);

        const senderId = req.user._id;

        console.log(senderId)


        let conversation = await Conversatation.findOne({
            particepents : { $all : [senderId , reciverId]}
        })
        
        console.log(conversation)

        if(!conversation){
            conversation = await Conversatation.create({
                particepents:[senderId , reciverId]
            })
        }



        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        })


        if(newMessage){
            conversation.messages.push(newMessage._id);
        }


        await Promise.all([conversation.save() , newMessage.save()])


        return res.status(200).json({
            sucess:true,
            newMessage ,
            message,
        })
        

        
    } catch (error) {
        console.log("error in sendMessage controller",error.message);

        return res.status(500).json({
            sucess:false,
            message:"error in sendMessage controller"
        })
    }
}


exports.getMessages = async (req,res) =>{
    try {

        const {id : userChatId} = req.params

        const senderId = req.user._id;

        const conversation = await Conversatation.findOne({
            particepents : {$all : [senderId , userChatId]},
        }).populate("messages")



        if(!conversation){
            return res.status(200).json([]);
        }

    

        console.log(conversation.messages)

        res.status(200).json(conversation.messages)

        
    } catch (error) {
        console.log("error in getMessages controller",error.message);

        return res.status(500).json({
            sucess:false,
            message:error.message,
        })
    }
}