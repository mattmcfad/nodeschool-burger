
var input = process.argv[2]; 
command(input);

var app = {

	"burgerFile": 'burgerjoints',
	fs: require('fs'),
	"filecontents": "===============\nbqm:0\npriest:0\npnl:0",

	//Read in the votes from burgerFile
	readFile: function(){
		fs.readFile(burgerFile, 'utf8', function (err,data) {
		  if (err) {
		    return console.log(err);
		  }
		 	console.log(data);
		});	
	}, 
		
	//Write a vote to the file
	writeFile: function() {
		fs.writeFile(burgerFile, process.argv[3], 'utf8', function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("this isnt real");
			}
		});
	}, 

	//Clear Database;
	clearFile: function() {
		fs.writeFile(burgerFile, " ", 'utf8', function(err) {
					if (err) {
						console.log(err);
					} else {
						console.log("Cleared the database!");
					}
		});	
	} 
};


//SWITCH STATEMENTS
//Handle command line input

function command(input){
	var cmd = app;
	switch(input){
		case 'read':
			var read = cmd.readFile();
			break;
		case 'write':
			writeFile();
			break;
		case 'clear':
			
			break;
		default: 
			console.log("Please enter \"read\" \"write <burgerjoint>\" or \"clear\" ");
	}
};
