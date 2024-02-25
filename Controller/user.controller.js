const userService = require("../Services/users.service");
const userServiceInstance = new userService();

const isDuplicate = async (body) => {
    try {
        const docs = await userServiceInstance.findAll();
        const duplicateDoc = docs.find((elem) => (elem.username===body.username  || elem.email === body.email));
        if(duplicateDoc) {
            return true;
        }
        return false;
    }
    catch(error) {
        throw error;
    }
}

const postUser = async (req, res) => {
    try {
        if( await isDuplicate(req.body) ) {
            return res.status(409).json({ message: "Failed to create new user", reason: "Already Exists in DB" })
        }
        console.log(req.body);
        const userDocument = await userServiceInstance.create(req.body);
        res.status(200).json(userDocument);
    }
    catch(error) {
        // res.status(500).send(error.message);
        res.status(500).send(error);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUserDocs = await userServiceInstance.findAll();
        if(allUserDocs.length) {
            res.status(200).json(allUserDocs);
        }
        else {
            res.status(404).json({message: "No Users found"});
        }
    }
    catch(error) {
        res.status(500).send(error.message);
    }
}

const getUsersByUsername = async (req, res) => {
    const { username } = req.params;
    try {
        const allUserDocs = await userServiceInstance.findAll();
        const requiredData = allUserDocs.find((elem) => (elem.username === username));
        if(requiredData) {
            res.status(200).json(requiredData);
        }
        else {
            res.status(404).json({ message: "User not found!", username });
        }
    }
    catch(error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    postUser,
    getAllUsers,
    getUsersByUsername
}