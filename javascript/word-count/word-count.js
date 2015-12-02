var countWords = function(input){
  var words = input.trim().replace(/\n|\t|\s{2,}/g, " ").split(/(\s+)/);
  var counts = {};

  for(var i = 0; i < words.length; i++){
    var word = words[i];
    if(word !== " "){
      if(counts[word] > 0 ){
        counts[word]++;
      }
      else {
        counts[word] = 1;
      }
    }
  }
  return counts;
};

module.exports = countWords;
