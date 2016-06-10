express = require('express.io');
app = express().http().io();

//Broadcast all draw clicks
app.io.route('drawClick', function(req){
	req.io.broadcast('draw', req.data);
});

app.io.route('clearClick', function(req){
	req.io.broadcast('clearCanvas');
});

//Send client html
app.get('/', function(req, res){
	res.sendfile(__dirname + '/client.html')
});

app.listen(3000);
