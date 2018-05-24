function setPropsOnObj(obj){
  obj.x = 7
  obj.y = 8
  obj['onePlus'] = function(num) {
    return num + 1
  }
}

function setPropsOnArr(arr){
  arr.hello = function(){
    return 'Hello!'
  }
  arr.full = 'stack'
  arr[0] = 5
  arr.twoTimes = function(n){
    return 2 * n
  }
}

function setPropsOnFunc(fn){
  fn.year = '20??'
  fn.divideByTwo = function(n){
    return n / 2
  }
  fn.prototype.helloWorld = function(){
    return 'Hello World'
  }
}
