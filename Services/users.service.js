const userModel = require("../Models/userModel");

class userService {
    findAll = async () => {
        const userDocs = await userModel.find({});
        return userDocs;
    }

    create = async (userDoc) => {
        const newUserDoc = new userModel(userDoc);
        const data = await newUserDoc.save();
        return data;
    }
}

module.exports = userService;