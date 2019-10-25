/*
Import
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
    const jwt = require('jsonwebtoken');
//

/*
Definition
*/
    const MySchema = new Schema({
        email: { unique: true, type: String },
        password: String,
    });
//

/*
Methode
*/
    MySchema.methods.generateJwt = (identity) => {
        // set expiration
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 59);

        const jwtObj = {
            _id: identity._id,
            expireIn: '10s',
            exp: parseInt(expiry.getTime() / 100, 10)
        };

        // JWT creation
        return jwt.sign(jwtObj, process.env.JWT_SECRET )
    };
//

/*
Export
*/
    module.exports = mongoose.model('identity', MySchema);
//