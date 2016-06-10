var http = require('http');

var options = {
	host: 'localhost',
	port: '3000',
	path: '/index.html'
};

var callback = function(response){
	var body = '';
	response.on('data', function(data){
		body += data;
	});

	response.end('end', function(){
		console.log(body);
	});

	var req = http.request(options, callback);
	req.end();
}
