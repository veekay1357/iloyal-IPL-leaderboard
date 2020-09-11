
window.onload = function constructTable() {

       


    /*readTextFile("data.json", function(text){
     var data = JSON.parse(text);
     console.log(data);
 });*/

	/*let json = require('data.json');
	console.log(json, 'the json obj');*/

    $.getJSON( "http://localhost:8085/js/data.json", function(gameResult) {
            console.log(gameResult);
     

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
        if (i % 2 == 0) {
            tr.className = "table-row-even";
        } else {
            tr.className = "table-row-odd";
        }
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            if (j == 0) {
                let id = JSON.stringify(gameResult[i][col[0]]);
                let name = JSON.stringify(gameResult[i][col[2]]);
                let url = JSON.stringify(gameResult[i][col[3]]);
                tabCell.innerHTML = "<a style=\"text-decoration: underline;color:blue;\" onclick='gameidClicked(" + id+","+name+","+url + ")'>" + gameResult[i][col[0]] + "</a>";
            }
            else if (j ==1) {
            
            	tabCell.innerHTML = gameResult[i][col[j]];
            	
            } else if (j == 2) {
                let id = JSON.stringify(gameResult[i][col[0]]);
                let name = JSON.stringify(gameResult[i][col[2]]);
                let url = JSON.stringify(gameResult[i][col[4]]);
                tabCell.innerHTML = "<a style=\"text-decoration: underline;color:blue;\" onclick='gameNameClicked(" + id+","+name+","+url + ")'>" + gameResult[i][col[j]] + "</a>";
            }
            else if (j == 3) {
                tabCell.innerHTML = gameResult[i][col[5]];
            }
            else if (j == 4) {
                tabCell.innerHTML = gameResult[i][col[6]];
            }
            else if (j == 5) {
                tabCell.innerHTML = gameResult[i][col[7]];
            }
        }
    }
   });
   
    //Leader board table
	$.getJSON( "http://localhost:8085/js/leaderboard_data.json", function( lb_data ) {
            console.log(lb_data);
    
    var col = [];
    for (var i = 0; i < lb_data.length; i++) {
        for (var key in lb_data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.getElementById("LeaderBoardTable");
    var tr;

    for (var i = 0; i < lb_data.length; i++) {

        tr = table.insertRow(-1);
        if (i % 2 == 0) {
            tr.className = "credit-row-even";
        } else {
            tr.className = "credit-row-odd";
        }
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.align = "center";
            tabCell.innerHTML = lb_data[i][col[j]];
        }
    }
 });

    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }


}

