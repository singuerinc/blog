const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      sysInfo      = require('./utils/sys-info'),
      env          = process.env,
      express      = require('express');

var app = express();
app.use('/health', function(req, res){ res.sendStatus(200); });
app.use('/info/', function(req, res){
    res.set('Content-Type', 'application/json');
    res.set('Cache-Control', 'no-cache, no-store');
    res.end(JSON.stringify(sysInfo[req.originalUrl.slice(6)]()));
});
app.use('/', express.static('_site'));

http.createServer(app).listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost');