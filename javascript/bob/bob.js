//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var shout = /^[^a-z\xDF-\xFF]*[A-Z]+[^a-z\xDF-\xFF]*$/;
  var question = /\?$/;

  // Shouting
  if(shout.test(input)){
    return 'Whoa, chill out!';
  }
  // Question
  else if(question.test(input)){
    return 'Sure.';
  }
  // Silence
  else if(input.trim() === ""){
    return 'Fine. Be that way!';
  }
  // Default
  else{
    return 'Whatever.';
  }
};

module.exports = Bob;
