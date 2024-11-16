const mongoose = require('mongoose')

function connectDatabase() {
    // uriskeletton: `mongodb+srv://${username}:${password}@${clustername}.l3ob6ss.mongodb.net/${databasename}?retryWrites=true&w=majority&appName=farzi-cluster`
    const mongoUri = ''
    mongoose.connect(mongoUri)
    .then(() => { console.log('Database is connected') })
}

module.exports = {
    connectDatabase
}
