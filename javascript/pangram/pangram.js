var Pangram = function(str){
  this.string = str.toUpperCase();
};

Pangram.prototype.isPangram = function(){
  var letters = [];
  for(var i = 65; i < 91; i++){
    letters.push(String.fromCharCode(i));
  }

  for(var j = 0; j < this.string.length; j++ ){
    var curChar = this.string[j];
    var isInLetters = letters.indexOf(curChar);
    if(isInLetters > -1){
      letters.splice(isInLetters, 1);
    }
  }

  if(letters.length > 0){
    return false;
  }
  else{
    return true;
  }
};


module.exports = Pangram;
