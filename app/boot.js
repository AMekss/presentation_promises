var cluster = require('cluster');
var http = require('http');
var url = require('url');
var express = require('express');
var app = express();
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

if (cluster.isMaster) {

  cluster.on('online', function(worker) {
    console.log('worker ' + worker.process.pid + ' is up and ready to serve');
  });

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
    cluster.fork();
  });

  // Fork workers.
  for (var i = 0; i < 5; i++) {
    cluster.fork();
  }

} else {

  app.use(express.directory('app/public'));
  app.use(express.static('app/public'));

  app.get('/something_special', function(req, res){
    setTimeout(function(){ res.send(lorem); }, 2000);
  });

  app.get('/letter/:letter', function(req, res){
    console.log('worker ' + cluster.worker.process.pid + ' serving page');
    setTimeout(function(){ res.send(req.params.letter); }, parseInt(Math.random() * 1000, 10));
  });

  app.listen(3001);

}