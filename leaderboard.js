
window.onload = function constructTable() {

    var gameResult = [
        {
        	"Game":"MI vs GL",
        	"First":"Bindu John",
        	"Second":"Jomon",
        	"Third":"Shanu"
        },
        {
        	"Game":"KKR vs DC",
        	"First":"Naziya",
        	"Second":"Ashok",
        	"Third":"Blesson"
        }

    ]

var leaderboard =[
    {  "Name":"Shrikanth",
       "Credits":"10"
    },
    {  "Name":"Arun kumar",
       "Credits":"20"
    },
    {  "Name":"Drisya",
       "Credits":"15"
    },
    {  "Name":"Drisya",
       "Credits":"15"
    },
    {  "Name":"Drisya",
       "Credits":"15"
    },
    {  "Name":"Drisya",
       "Credits":"15"
    },
    {  "Name":"Drisya",
       "Credits":"15"
    }
    ]


   /*readTextFile("data.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});*/

	/*let json = require('data.json');
	console.log(json, 'the json obj');*/

  /* $.getJSON( "/data.json", function( data ) {
   	console.log(data);
   });*/
	
	

    var col = [];
        for (var i = 0; i < gameResult.length; i++) {
            for (var key in gameResult[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

    var table = document.getElementById("GameResultTable");
    var tr;

    for (var i = 0; i < gameResult.length; i++) {

            tr = table.insertRow(-1);
             if (i%2 ==0) {
                tr.className = "table-row-even";
            } else {
            	 tr.className = "table-row-odd";
            }
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);

                tabCell.innerHTML = gameResult[i][col[j]];
            }
        }

       //Leader board table

        var col = [];
        for (var i = 0; i < leaderboard.length; i++) {
            for (var key in leaderboard[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

    var table = document.getElementById("LeaderBoardTable");
    var tr;

    for (var i = 0; i < leaderboard.length; i++) {

            tr = table.insertRow(-1);
             if (i%2 ==0) {
                tr.className = "credit-row-even";
            } else {
            	 tr.className = "credit-row-odd";
            }
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.align ="center";
                tabCell.innerHTML = leaderboard[i][col[j]];
            }
        }


       function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
} 


}

