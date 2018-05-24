function RPNCalculator(){
  this.nums = []
  this.val = 0
}

RPNCalculator.prototype.value = function(){
  return this.val
}

RPNCalculator.prototype.push = function(el){
  this.nums.push(el)
}

RPNCalculator.prototype.plus = function() {
  if (this.nums.length < 2){
     throw 'rpnCalculatorInstance is empty'
  }
  var lastIdx = this.nums.length - 1
  this.val = this.nums[lastIdx] + this.nums[lastIdx-1]
  if(this.nums.length > 2) {
    var newArr = this.nums.slice(0, lastIdx - 1)
    newArr.push(this.val)
    this.nums = newArr
  }
}

RPNCalculator.prototype.minus = function() {
  if (this.nums.length < 2) {
    throw 'rpnCalculatorInstance is empty'
  }
  var lastIdx = this.nums.length - 1
  this.val = this.nums[lastIdx - 1] - this.nums[lastIdx]
  if (this.nums.length > 2) {
    var newArr = this.nums.slice(0, lastIdx-1)
    newArr.push(this.val)
    this.nums = newArr
  }
}

RPNCalculator.prototype.divide = function() {
	if (this.nums.length  < 2) {
		throw 'rpnCalculatorInstance is empty';
	}
	var lastIdx = this.nums.length-1;
	this.val = this.nums[lastIdx-1] / this.nums[lastIdx]
	if (this.nums.length > 2) {
		var newArr = this.nums.slice(0, lastIdx-1)
		newArr.push(this.val)
		this.nums = newArr
		//this.nums = [this.nums[0], this.val]
	}
}

RPNCalculator.prototype.times = function() {
	if (this.nums.length  < 2) {
		throw 'rpnCalculatorInstance is empty';
	}
	var lastIdx = this.nums.length-1;
	this.val = this.nums[lastIdx-1] * this.nums[lastIdx]
	if (this.nums.length > 2) {
		var newArr = this.nums.slice(0, lastIdx-1)
		newArr.push(this.val)
		this.nums = newArr
		//this.nums = [this.nums[0], this.val]
	}
}
