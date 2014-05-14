fs = require('fs');
var input = process.argv[2];
var burgerFile = 'burgerjoints';
command(input);


var readFromFile = fs.readFile(burgerFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
 	console.log(data);
});	


function command(input){
	switch(input){
		case 'read':
			readFromFile();
			break;
		case 'write':
			break;
		case 'clear':
			break;
	}
};