const Joi = require("joi");

const schema = Joi.object({
    firstname: Joi.string().max(50).default(""),
    username: Joi.string().max(25).required(),
    email: Joi.string().email().required(),
});

const validateUserData = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(422).json(error);
    }
    next();
}

module.exports = { validateUserData };