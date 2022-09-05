const jwt = require('jsonwebtoken');

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secretOrPrivateKey) {
    const token = jwt.sign(payload, secretOrPrivateKey)
    console.log('CREATE TOKEN:', token)
    return token
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secretOrPrivateKey, expiresIn) {
    const token = jwt.sign(payload, secretOrPrivateKey, { expiresIn })
    console.log('CREATE TOKEN w/EXPIRY:', token)
    return token
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, secretKey) {
    try {
        const decodedToken = jwt.verify(token, secretKey)
        console.log('DECODED TOKEN:', decodedToken)
        return decodedToken
    } catch (e) {
        return false
    }
}

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken
}
