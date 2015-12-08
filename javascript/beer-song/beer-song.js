var Beer = function(){};

Beer.prototype.verse = function(which){
  if(which === 0){
    return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
  }
  else if(which === 1){
    return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
  }
  else if(which === 2){
    return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
  }
  else{
    return which+" bottles of beer on the wall, "+which+" bottles of beer.\nTake one down and pass it around, "+(which-1)+" bottles of beer on the wall.\n";
  }
};

Beer.prototype.sing = function(start, end){
  var song = [];
  end = end || 0;
  for(var i = start; i >= end; i--){
    song.push(this.verse(i));
  }
  return song.join('\n');
};

module.exports = Beer;
