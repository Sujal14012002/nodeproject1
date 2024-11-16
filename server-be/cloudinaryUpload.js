const { v2: cloudinary } = require('cloudinary')

cloudinary.config({
    cloud_name: 'djrrnckp0',
    api_key: '244685396378533',
    api_secret: 'mm1f2E-gJE4eJPaFsOjQj2h_jKo'
})

async function uploadFileToCloud(bufferData, folderPath) {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: folderPath ?? 'folderName', resource_type: "auto" },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
        stream.end(bufferData);
    });
}

module.exports = {
    uploadFileToCloud
}