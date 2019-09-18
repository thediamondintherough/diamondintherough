let express = require('express'),
  router = express.Router(),
  User = require('../../models').User;


router.post('/register', function (req, res) {
  if (req.body.password !== req.body.passwordConfirm) {
    res.status(400).json({ message: 'Passwords must match' });
  } else {
    User.findOne({ username: req.body.username })
      .then(function (existingUser) {
        if (existingUser) {
          res.status(400).json({ message: 'User already exists' });
        } else {
          const user = new User(req.body)
          console.log(user);
          user.setPassword(req.body.password)
          user.save().then(function (newUser) {
            res.status(200).json({ message: 'registration succesful' });
          });
        }
      });
  }
});

router.post('/login', function (req, res) {
  console.log('Register');
  User.findOne({ username: req.body.username })
    .then(function (user) {
          if (!user) {
            return res.status(401).json({ error: 'User does not exist' });
          }

          if (!user.comparePassword(req.body.password)) {
            return res.status(401).json({ error: 'Password incorrect' });
          }
          else{
            res.json({ success: true, token: user.generateJWT(), username: user.username });
          }
    });
});

router.get('/logout', function (req, res) {
  req.session.destroy(function () {
    res.status(200).json({ message: 'logout successful' });
  });
});

module.exports = router;