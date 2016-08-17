
// Back end Logic
var inputPhrase = "";
var vowelArray = ["a", "e", "i", "o", "u", "A", "E",
"I", "O", "U"];
var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
var alphabetArray = vowelArray.concat(consonantArray);
var splitPhrase = [];

var splitSentence = function(input){
  splitPhrase = input.split(" ");
  for (var i = 0; i < splitPhrase.length; i++){
  console.log(splitPhrase.slice(i, i+1));
}

}




// Front end Logic
$("form#pigLatin").submit(function(event) {
  event.preventDefault();
  inputPhrase = $("#sentence").val();
  splitSentence(inputPhrase);
});
