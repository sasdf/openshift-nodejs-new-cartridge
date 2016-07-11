var express = require('express');
var app = express();

app.set('ip', process.env.IP || '0.0.0.0')
app.set('port', process.env.PORT || 8080)

app.get('/', function(req, res){
    res.send('Hello World')
})

app.listen(app.get('port'), app.get('ip'), function(){
    console.log('App listening at ' + app.get('ip')+':' + app.get('port'))
})
