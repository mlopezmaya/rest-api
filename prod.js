module.exports = {
    jwtSecret: proccess.env.jwtSecrete,
    mongoURI: proccess.env.mongoURI,
    redisHOST: process.env.redisHOST,
    redisPORT: process.env.redisPORT,
    redisPassword: process.env.redisPassword,
    port: process.env.PORT 
};