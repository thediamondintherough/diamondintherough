require('dotenv').config({ silent: true});

var Configs = (function () {
    function Configs() {
        this.host = process.env.HOST;
        this.port = 587;
        this.user = process.env.FROM_EMAIL;
        this.password = process.env.PASS;
        this.databaseUri = process.env.DATABASE_URI || "mongodb://localhost:27017/thediamondintherough";
    }
    return Configs;
}());

exports.default = new Configs;