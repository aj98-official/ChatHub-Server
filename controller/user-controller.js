
import user from "../model/user-model.js";

export const addUser = async (req, res) => {
    try{
       let exist = await user.findOne({sub: req.body.sub});
       if(exist){
          res.status(200).json({msg: 'user already exists'});
          return;
       }

       const newUser = new user(req.body);
       await newUser.save();
       return res.status(200).json(newUser);
    }
    catch(err){
        return res.status(500).json(err.message);
    }
} 

export const getUser = async (req, res) => {
      try{
        let users = await user.find({});
        return res.status(200).json(users);
      }
      catch(err){
        return res.status(500).json(err.message);
      }
}