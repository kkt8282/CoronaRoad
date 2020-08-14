let express = require('express');
// const ChromeLauncher = require('chrome-launcher');
let app = express();
let router = require('./router/main')(app);
let port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});