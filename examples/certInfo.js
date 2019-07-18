const node_openssl = require('../index.js');
var fs = require('fs');

var options = {
	binpath: 'C:/Program Files/OpenVPN/bin/openssl.exe'
}

var openssl = new node_openssl(options);

fs.readFile('./cert1.crt', function(err, contents) {
	openssl.getCertInfo(contents, function(err, attrs, cmd) {
		if(err) {
			console.log(err);
		} else {
			console.log(attrs);
		}
	});
});