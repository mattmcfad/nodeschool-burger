

var fileContents= "===============\nbqm:0\npriest:0\npnl:0";
var vote = "pnl"


//analyze file, find the burger joint, increment vote by 1.
		var str = fileContents.split('\n');

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
			console.log(str[i]);
		}

