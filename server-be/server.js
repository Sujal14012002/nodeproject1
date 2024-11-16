const express = require('express')
const { connectDatabase } = require('./dbConnection')
const User = require('./user');
const Movie = require('./movie');
const bodyParser = require('body-parser');
const fileUploadMiddleWare = require('express-fileupload');
const { v2: cloudinary } = require('cloudinary')

const server = express()
const PORT = 1337


server.use(express.json())
server.use(fileUploadMiddleWare())

server.get('/user', async (request, response, next) => {
    const users = await User.find();
    console.log({ users });

    // [{name: 'Yash'}, {name: 'Priyam'}, {name: 'WebMaster'}]
    response.status(200).json({ data: users })
})

server.post('/create-user', (request, response, next) => {
    const { name, age } = request.body;
    const users = new User({
        name: name,
        age: age
    })
    users.save();
    response.status(200).json({ message: "data created" })
})

server.post('/insert-movie', async (request, response, next) => {
    console.log({ files: request.files.image.data, body: request.body });
    cloudinary.config({ 
        cloud_name: 
        api_key: 
        api_secret: 
    });

    async function uploadFile(bufferData){
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: 'video', resource_type: 'auto' }, 
                (error, result) => {
                    if (error) {
                        reject(error)
                    }
                    else {
                        resolve(result)
                    }
                }
            )
            stream.end(bufferData)
        })
    }

    try {
        const videoUpload = await uploadFile(request.files.video.data)
        console.log({videoUpload});
    } catch (error) {
        console.log({error})
    }

    response.status(200).json({ message: "Movie added successfully" })
})

server.get('/movies', async (request, response, next) => {
    const movies = await Movie.find();
    console.log({ movies });

    // [{name: 'Yash'}, {name: 'Priyam'}, {name: 'WebMaster'}]
    response.status(200).json({ data: movies })
})

connectDatabase()

server.listen(PORT, () => {
    console.log(`Server is listening on port 1337`)
})