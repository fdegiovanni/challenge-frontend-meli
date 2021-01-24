const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

function createServer(){
    var server = express();

    //middleware
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());
    server.use(cors());
  
    server.options(process.env.FRONTEND_URL, cors());

    //controllers

    //Routes import
    const addHomeRoutes = require('./routes/home');
    const addItemRoutes = require('./routes/item');
    
    //Routes add
    server = addHomeRoutes(server, express);
    server = addItemRoutes(server, express);

    return server;
}


module.exports = createServer;