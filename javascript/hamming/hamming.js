var compute = function(left, right){
  if(left.length !== right.length){
    throw Error("DNA strands must be of equal length.");
  }
  var count = 0;
  for(var i = 0; i < left.length; i ++){
    if(left[i] !== right[i]){
      count++;
    }
  }
  return count;
};

module.exports = compute;
