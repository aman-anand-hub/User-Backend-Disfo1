const API_KEY= process.env.API_KEY;

const verifyAuth = (req, res, next) => {
    const { key } = req.headers;
    if(key !== API_KEY) {
        res.status(403).send({message: "Unauthorised Access"});
    }
    next();
}

module.exports = { verifyAuth };