const mongoose = require("mongoose"),
      jwt = require('jsonwebtoken'),
      crypto=require('crypto');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email:String,
    firstName:String,
    lastName:String,
    salt: {type: String, required: true },
    hash: {type: String, required: true }
});

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512,'sha512').toString('hex');
}



UserSchema.methods.comparePassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512,'sha512').toString('hex')
  return this.hash === hash;
}

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 5);
  return jwt.sign({
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000)
  }, process.env.SECRET)
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;