var inputPhrase = "";


// Back end Logic
var vowelArray = ["a", "e", "i", "o", "u", "A", "E",
"I", "O", "U"];
var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
var alphabetArray = vowelArray.concat(consonantArray);

var test = function(input){
var splitPhrase = inputPhrase.split("");
};


// Front end Logic
$("form#pigLatin").submit(function(event) {
  inputPhrase = $("#sentence").val();

alert(test(inputPhrase));


});
