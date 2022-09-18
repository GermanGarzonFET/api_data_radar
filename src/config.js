module.exports = {

    port: process.env.PORT || 5000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/loginDemo',
    SECRET_KEY: 'secret_key',
    directory:__dirname

}
