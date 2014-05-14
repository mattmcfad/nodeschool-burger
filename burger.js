fs = require('fs');
var input = process.argv[2];
var burgerFile = 'burgerjoints'; 
command(input);

var app = {
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
/*
function command(input){
	switch(input){
		case 'read':
			readFromFile();
			break;
		case 'write':
			var writeToFile = fs.writeFile(burgerFile, process.argv[3], 'utf8', function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Your vote for " + process.argv[3] + " was cast!");
				}
			});
			break;
		case 'clear':
			var clearFile = fs.writeFile(burgerFile, " ", 'utf8', function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Cleared the database!");
				}
			});
			break;
	}
};
*/

function command(input) {
	if (input === "read") {
		// var readFromFile = fs.readFile(burgerFile, 'utf8', function (err,data) {
		// 		  if (err) {
		// 		    return console.log(err);
		// 		  }
		// 		 	console.log(data);
		// 		});	
		app.readFile();
		
	} else if(input === "write") {
		var writeToFile = fs.writeFile(burgerFile, process.argv[3], 'utf8', function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Your vote for " + process.argv[3] + " was cast!");
				}
		});
	} else if (input ==="clear") {
		var clearFile = fs.writeFile(burgerFile, " ", 'utf8', function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Cleared the database!");
				}
			});
	} 
	else {
		console.log("Please enter \"read\" \"write <burgerjoint>\" or \"clear\" ");
	}
}