const express = require('express');
const app = express();

//app.use(express.static('html'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
})

app.listen(process.env.PORT || 3000);