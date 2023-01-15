const express = require('express')
, routes = require('./routes')
, path = require('path')
, fileupload = require('express-fileupload')
, app = express()
, mysql = require('mysql')
, bodyParser = require('body-parser');