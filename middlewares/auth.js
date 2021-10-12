const jwt = require('jsonwebtoken');
const User = require('../models/users');
const secret = 'my-Own-Secret';

//authenticate user/protect routes
const authenticateUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
               return res.status(500).json({message: 'You are not authenticated'});
            } else {
                next()
            }
        })
    } else {
        return res.status(500).json({message: 'Please login first'});
    }
};


module.exports = { authenticateUser };
