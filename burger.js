
var app = {

	"burgerFile": 'burgerjoints',
	fs: require('fs'),
	"fileContents": "===============\nbqm:0\npriest:0\npnl:0",

	//Read in the votes from burgerFile
	readFile: function(){
		this.fs.readFile(this.burgerFile, 'utf8', function (err,data) {
		  if (err) {
		    return console.log(err);
		  }
		 	console.log(data);
		 	return data;
		});	
	}, 

	//analyze file, find voted for burgerjoint, increment vote by 1
	alterFile: function(fileCont) {
		console.log(fileCont);
		var fileContents = fileCont;
		var vote =  process.argv[3];

		//analyze file, find the burger joint, increment vote by 1.
		
		//seperate each line of the file
		var str = fileContents.split('\n');

		fileContents = "===============\n";
		//find the line with corresponding burger joint
		for (var i = 1; i < str.length; i++) {
			//get the index of the line with vote in fileContents
			var line = str[i].indexOf(vote);
			if (line != -1){
				//get the line;
				var update = str[i];
				//get the current total number of votes, convert to number
				var inc = Number(update.substr(update.indexOf(':')+1));
				//increment vote count by 1.
				inc++;
				//build new line
				update = vote + ":" + inc;
				//update vote
				str[i] = update;
			}
			fileContents = fileContents + str[i] + "\n"
		}
		return fileContents;
	},
		
	//Write a vote to the file
	writeFile: function(towrite) {
		this.fs.writeFile(this.burgerFile, towrite, 'utf8', function(err) {
			if (err) {
				console.log(err);
			} else if (input === "write") {
				console.log("Your vote for " + process.argv[3] + " has been cast!");
			}
			else 
				console.log("database has been reset!");
		});
	}, 

	//Clear and Reset Database;
	clearFile: function() {
		this.writeFile(this.fileContents);
	} 
};


var input = process.argv[2]; 
command(input);


//Handle command line input
function command(input){
	switch(input){
		case 'read':
			app.readFile();
			break;
		case 'write':
			app.writeFile(app.alterFile(app.readFile()));
			break;
		case 'clear':
			app.clearFile();
			break;
		default: 
			console.log("Please enter \"read\" \"write <burgerjoint>\" or \"clear\" ");
	}
};
