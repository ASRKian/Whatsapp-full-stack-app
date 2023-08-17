import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
    url: 'mongodb://0.0.0.0:27017/user',
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (req, file) => {
        const match = ['image/png', 'image/png'];

        if (match.indexOf(file.mimeType) === -1) {
            return `${Date.now()}-file-${file.originalname}`
        }
        return {
            bucketName: 'photos',
            fileName: `${Date.now()}-file-${file.originalname}`
        }
    }
})

export default multer({ storage })