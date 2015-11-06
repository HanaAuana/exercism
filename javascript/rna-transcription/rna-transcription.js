var rnaTranscriber = function(){};

rnaTranscriber.prototype.toRna = function(str){
  var nucelotides = str.split('');
  var swapped = nucelotides.map(function(item){
    switch(item){
      case 'G':
        return 'C';
      case 'C':
        return 'G';
      case 'T':
        return 'A';
      case 'A':
        return 'U';
    }
  });
  return swapped.join('');
};

rnaTranscriber.prototype.toDna = function(str){
  var nucelotides = str.split('');
  var swapped = nucelotides.map(function(item){
    switch(item){
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      case 'A':
        return 'T';
      case 'U':
        return 'A';
    }
  });
  return swapped.join('');
};

module.exports = rnaTranscriber;
