const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log('FILE-INFO: ', file)  
      cb(null, './public/uploads/users')
    },
    filename: (req, file, cb) => {
      const fileName =  `${Date.now()}-img${path.extname(file.originalname)}`
      cb(null, fileName)
    }
  })
  
  const upload = multer({ storage: storage });

  module.exports = upload;