'use strict'
let os = require('os'),
    cluster = require('cluster'),
    app = require('./server'),
    models = require('../models');

if (cluster.isMaster) {

    // Count the machine's CPUs
    let cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log("Worker " + worker.process.pid + " died with code: " + code + ", and signal: " + signal);
        console.log("Starting a new worker");
        cluster.fork();
      });

} else {
    
    app.set('port', process.env.PORT || 5000);

    app.on("error", (error) => {
        if (error.syscall !== "listen") {
          throw error;
        }
  
        const bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;
  
        switch (error.code) {
          case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
          case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
          default:
          throw error;
        }
      });

    app.listen(app.get('port'), function () {
        console.log('server running', cluster.worker.id);
    });
}

