/*jslint node: true, sloppy: true, vars: true, indent: 2 */
/*global require: false, exports: false */

// require section;
var http = require('http'),
    connect = require('connect'),
    events = require('events'),
    Core = require('../core.js'),
    Service = Object.create(events.EventEmitter.prototype);

// Starts application server;
Service.start = function () {
  this.initializeHttpServer();
  this.httpServer.listen(this.port);
  this.emit('start');
};

Service.initializeHttpServer = function () {
  var self = this;

  this.httpServer = connect();
  this.httpServer.use(connect.cookieParser('keyboard cat'));
  this.httpServer.use(connect.session({ cookie: { maxAge: 60000 }}));
  this.httpServer.use(connect.json());
  this.httpServer.use(connect.urlencoded());
  this.httpServer.use(connect.multipart());

  this.httpServer.use(function (req, resp) {
    var requestHandler = Core.HttpEngine.createRequestHandler();
    requestHandler.handle(self, req, resp);
  });
};

// Stops application server;
Service.stop = function () {
  this.emit('stop');
};

//
// Exposed public api;
//

// Service class factory method. Used to instantiate Service objects;
//
// port - Port to listen on;
exports.createService = function (port) {
  var object = Object.create(Service);
  object.port = port || 3000;

  return object;
};
