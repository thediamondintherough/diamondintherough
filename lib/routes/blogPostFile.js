let express = require('express'),
    cloudinary = require('cloudinary');

    console.log(process.env.cloud_name);

    
let router = express.Router(),
    Blog = require('../../models').Blog,
    User = require('../../models').User;

router.post('/file', (req, res) => {
    console.log('isnide ddsdsd')
    const fileUrl = req.body.fileUrl;
    cloudinary.uploader.upload(fileUrl, 
    function(result) {
        console.log(result)
    });
});

module.exports = router;