const jwt = require('jsonwebtoken')

const config = process.env;

const verifyToken = (req, res, next) => {

    let token = req.body.token || req.query.token || req.headers['authorization'];

    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        // The JWT token is typically sent in the format "Bearer token" 
        //in the authorization header, and this step is responsible for removing "Bearer" so that only the token remains.
        token = token.replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    }
    catch (err) {
        return res.status(401).send('Invalid token');
    }

    return next();

}

module.exports = verifyToken;