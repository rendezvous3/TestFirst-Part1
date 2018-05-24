function concatString() {
  var newStr = ""
  for (var i = 0; i<arguments.length; i++) {
    newStr += arguments[i]
  }
  return newStr
}

function yourFunctionRunner() {
  var newStr = ""
  for(var i = 0; i < arguments.length; i++) {
    newStr += arguments[i]()
  }
  return newStr
}

function makeAdder(num) {
  return function(add){
    return num + add
  }
}

// function once(fn, context) {
// 	var result;

// 	return function() {
// 		if(fn) {
// 			result = fn.apply(context || this, arguments);
// 			fn = null;
// 		}

// 		return result;
// 	};
// }

function once(fn){
  return function() {
    if(fn) {
      fn.call(this, [this.num])
      fn = null
    }
  }
}


function createObjectWithClosures() {
	return {
		oneIncrementer: function() {
			this.value = this.value || 0
			this.value += 1;
		},
		tensIncrementer: function() {
			this.value = this.value || 0
			this.value += 10;
		},
		setValue: function(num) {
			this.value = num;
		},
		getValue: function() {
			return this.value;
		}
	}
}

function guestListFns(gArr, sCode) {
	var funcArr = [];
	for (var i=0; i<gArr.length; i++) {
		funcArr.push(function(el){
			return function(code){
				if (code === 404) {
					return gArr[el];
				} else {
					return 'Secret-Code: Invalid';
				}
			};
		}(i))
	}
	return funcArr;
}

function generateGuestList(gNFunctions, sCode) {
	var guestList = [];
	for (var i=0; i<gNFunctions.length; i++) {
		guestList.push(gNFunctions[i](sCode));
	}
	return guestList;
}
