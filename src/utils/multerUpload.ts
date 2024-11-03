import multer, { StorageEngine } from "multer";
import path from "path";

// Configure multer storage with TypeScript types
const createMulterUpload = (destination: string = "uploads/"): multer.Multer => {
    const storage: StorageEngine = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, destination);
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Unique timestamped filename
        },
    });

    return multer({ storage });
};

export default createMulterUpload;
