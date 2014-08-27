/*
 * Creates human readable text representation of a given file size.
 * Simplified and pure javascript
 *
 * Forked from:
 * https://github.com/pencil/HumanReadableFileSize.js
 *
 * Copyright (c) 2012 "Pencil" Nils Caspar (www.nilscaspar.ch)
 * Licensed under the MIT, GPL, and BSD licenses.
 */


// fileSize is in bytes
// decimals is number of decimal places (Default 1)
function fileSize (fileSize, decimals) {
	var prefixes = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
	var base = 1000;
	decimals = (decimals === undefined) ? 1 : decimals;
	var index = (!fileSize ? 0 : Math.floor(Math.log(fileSize) / Math.log(base)));
	
	index = Math.min(index, prefixes.length - 1);
	fileSize = fileSize / Math.pow(base, index);
	fileSize = Math.round(fileSize * Math.pow(10, decimals)) / Math.pow(10, decimals);
	return fileSize + ' ' + prefixes[index] + 'B';
}