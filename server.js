var express = require('express');
var app = express();
var path = require("path");
var server = require('http').createServer(app);
var port = process.env.PORT || 3000


app.set('views', './views');
app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/public'));

process.env.PWD = process.cwd();
app.set('views', path.join(process.env.PWD, 'public'));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.get('/', function(req, res){
  res.render('index')
});


app.get('/work', function(req, res){
res.render('work')
})

app.listen(port, function(){
  console.log('Server started on http://localhost:3000');
})