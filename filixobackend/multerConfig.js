const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Import UUID

let storage = multer.diskStorage({
    destination: './uploads',
    filename: function(req, file, cb) {
        const uniqueSuffix = uuidv4(); // Generate UUID
        const extension = path.extname(file.originalname); // Get file extension
        cb(null, file.fieldname + '-' + uniqueSuffix + extension); // Unique filename with UUID
    }
});

module.exports = multer({ storage: storage });
