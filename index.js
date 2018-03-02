var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

// fs.stat('./happy.jpg', function(err, stats) {
// 	var statMode = new StatMode(stats);
// 	console.log(statMode.toString());
// });

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisem'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nNowa paczka danych', function(err) {
		if(err) throw (err);
		console.log('Zapisano!'.blue);
		fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
			console.log('Dane po zapisie'.blue);
			console.log(data);
		});
	});
});

