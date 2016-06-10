express = require('express.io');
app = express().http().io();

//Broadcast all draw clicks
app.io.route('ready', function(req){
	req.io.broadcast('draw', req.data);
});

//Send client html
app.get('/', function(req, res){
	res.sendfile(__dirname + '/client.html')
});

app.listen(3000);
