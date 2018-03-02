var fs = require('fs');
var colors = require('colors');
var statMode = require('stat-mode');
var directory = '.'

fs.readdir(directory, function(err, filelist) {
	if(err) {
		console.log('Error reading directory', directory);
		console.log(directory);
		return;
	}
	console.log('\nCurrent directory contains the following files:'.red);
	filelist.forEach(function(file) {
		console.log(file.yellow);
		fs.appendFile('./dircontent.txt', file+'\n', function(err) {
			if(err) throw (err);
			fs.readFile('./dircontent.txt', 'utf-8', function(err, data) {
				console.log(file.yellow);		
			});
		});
	});
	console.log('\nContent of the folder saved in file: '.red);
});