function repeat(str, rep) {
	var newStr = "";
	if (rep < 1) {
		return newStr;
	}
	for (var i=1; i<=rep; i++) {
		newStr += str;
	}
	return newStr;
}

function sum(arr) {
	// var sum = 0;
	// arr.forEach(function(el){
	// 	sum += el;
	// });
	var sum = arr.reduce(function(acc, val) { return acc + val }, 0)
	return sum;
}

function join(arr, el) {
	// var newStr =""
	// if (el !== undefined) {
	// 	newStr = arr.join(el);
	// } else {
	// 	newStr = arr.join("");
	// }
	var newStr = "";
	for (var i=0; i<arr.length; i++) {
		if (el !== undefined) {
			if (i !== arr.length-1) {
				newStr += arr[i];
				newStr += el;
			} else {
				newStr += arr[i];
			}
		} else {
			newStr += arr[i]
		}
	}

	return newStr;
}

function gridGenerator(num) {
	var newStr = "";
	var lineStr = "";
	for (var i=1; i<=num; i++) {
	    lineStr = "";
	    for (var j=1; j<num; j++) {
	        if (i % 2 === 0) {
	               lineStr += " ";
	            if (lineStr.length < num) {
	               lineStr += "#";
	            }
	        } else if (i % 2 !== 0) {
	            lineStr += "#";
	            if (lineStr.length < num) {
	                lineStr += " ";
	            }
	        }
	    }
	    newStr += lineStr;
	    newStr += "\n";
	}
	return newStr;
}

// function paramify(obj) {
// 	var newStr = "";
//     var keyStr = "";
//     var counter = 0;
//     var numOfProps = 0;
//     for (var i in obj) {
//         if (obj.hasOwnProperty(i)) {
//            numOfProps += 1;
//         }
//     }
//     if (numOfProps === 0) {
//         return "";
//     }
// 	for (var key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			keyStr = "";
// 			keyStr = key + "=" + obj[key];
//             counter++;
//             if (counter >= 1 && counter < numOfProps) {
//                 keyStr += "&";
//             }
// 		}
// 		newStr += keyStr;
// 	}
// 	return newStr;
// }

// function paramify(obj) {
// 	var newStr = "";
// 	var objKeys = Object.keys(obj);
// 	objKeys.sort();
// 	if (objKeys.length > 0) {
// 		objKeys.forEach(function(el){
// 			var keyStr = "";
// 			keyStr = el + "=" + obj[el];
// 			if (objKeys.length > 1 && objKeys.indexOf(el) !== objKeys.length-1) {
// 				keyStr += "&";
// 			}
// 			newStr += keyStr;
// 		})
// 	} else {
// 		return "";
// 	}
// 	return newStr;
// }

function paramify(obj) {
	var newStr = "";
    //var keyStr = "";
    var arrOfProps = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
           arrOfProps.push(i);
        }
    }
    arrOfProps.sort();
    if (arrOfProps.length === 0) {
        return "";
    }
    arrOfProps.forEach(function(el){
        var keyStr = "";
        keyStr = el + "=" + obj[el];
        if (arrOfProps.length > 1 && arrOfProps.indexOf(el) !== arrOfProps.length-1) {
            keyStr += "&";
        }
        newStr += keyStr;
    })
	return newStr;
}

function paramifyObjectKeys(obj) {
	var newStr = "";
	var objKeys = Object.keys(obj);
	objKeys.sort();
	if (objKeys.length > 0) {
		objKeys.forEach(function(el){
			var keyStr = "";
			keyStr = el + "=" + obj[el];
			if (objKeys.length > 1 && objKeys.indexOf(el) !== objKeys.length-1) {
				keyStr += "&";
			}
			newStr += keyStr;
		})
	} else {
		return "";
	}
	return newStr;
}

function renameFiles(arr) {
	// loop through an array
	// add each member of an array into na hashTable
	// if an element is already defined in hashTable
	// add (1) to it
	// if an element already has (1) or any other number (n) increment it by 1
	var hashTable = {};
    var fileArr = [];
    var newFile;
	for (var i=0; i<arr.length; i++) {
        newFile = arr[i];
        if (hashTable[newFile] !== undefined) {
            var counter = 1;
            while (hashTable[newFile] !== undefined) {
                if (newFile.indexOf("(") !== -1) {
                   newFile = newFile.substr(0,newFile.indexOf("(")) + "(" + counter + ")";
                } else {
                   newFile = newFile + "(" + counter + ")";
                }
                //console.log(newFile);
                counter++;
            }
        }
        hashTable[newFile] = newFile;
        fileArr.push(newFile);
    }
	return fileArr;
}
