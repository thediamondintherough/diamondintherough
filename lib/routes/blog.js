const express = require('express'),
    router = express.Router(),
    loginRequired = require('../middleware/loggedinUser'),
    Blog = require('../../models').Blog,
    User = require('../../models').User;

/* GET blog listing. */
router.get('/', (req, res, next) => {
    Blog.find().then(posts => {
       
    }).catch(err =>{
        res.send(500, err);
    });
});

/* POST create article. */
router.post('/', loginRequired, (req, res, next) => {
    
    Blog.create(req.body).then(post => {
        res.send(post);
    }).catch(err => {
        if(err){
            throw err
        }
    }).catch(err => {
        res.send(500, err);
    });
});

/* Create a new article form. */
router.get('/', (req, res, next) => {
    res.send('it works');
})

/* Edit article form. */
router.get("/:id/edit", (req, res, next) => {
    Blog.findById(req.params.id).then(post => {
        if(post){

        }else{
            res.send(404);
        }
    }).catch(err =>{
        res.send(500, err);
    });
});

/* GET individual article. */
router.get("/:id", (req, res, next)=> {
    Blog.findById(req.params.id).then(post => {
        if(post) {

        } else {
            res.send(404);
        }
    }).catch(err => {
        res.send(500, err);
    });
});

/* UPDATE: PUT update article. */
router.put('/:id', (req, res, next) => {
    Blog.findById(req.params.id).then( post => {
        if(post){
            Blog.update({_id: req.params.id}, req.body, (err, response) =>{
                if (err) {
                    return res.send('Error updating Blog');
                } else {
                    return res.send('Blog updated successfully!!!');
                }
            });
        } else {
            res.send(404);
        }
    }).then( post => {
        res.redirect("", + post.id);
    }).catch( err => {
        if(err.name === "SequelizeValidationError"){
            let post = Blog.build(req.body);
            post.id = req.params.id;
        } else {
            throw err
        }
    }).catch( err => {
        res.send(500, err);
    });
});

/* DESTROY: Delete individual article. */
router.delete('/:id', (req, res, next) =>{
    Blog.remove({_id: req.params.id}, (err, response) => {
        console.log('deleeeeeee', err)
        console.log('22222deleeeeeee', response)
        if (err) {
            res.send('Error deleting file');
        } else {
            res.send('Successfully deleted the Shit');
        }
    });

});


module.exports = router;