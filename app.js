const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


//app.use(express.static('html'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/aboutus', function(req, res) {
    res.sendFile(path.join(__dirname+'/aboutus.html'));
})

app.use('/', router);

app.listen(process.env.PORT || 3000);