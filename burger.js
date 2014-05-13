fs = require('fs')
fs.readFile(process.argv[2], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
 	read(data);
});	


function read(input){
	switch(input){
		read:
			 
			break;
		write:
			break;
		clear:
			break;
	}
};