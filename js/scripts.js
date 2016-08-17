
// Back end Logic
// Assigning variables
var inputPhrase = "";
var vowelArray = ["a", "e", "i", "o", "u", "A", "E",
"I", "O", "U"];
var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
var yArray = ["y", "Y"]
var alphabetArray = vowelArray.concat(consonantArray).concat(yArray);
var splitPhrase = [];
var words = "";
var firstChar = "";
var secondChar = "";
var thirdChar = "";
var fourthChar = "";
var displayText = "";
var lastChar = "";
function checkChar(character) {
  return character === firstChar;
}
function checkChar2(character) {
  return character === secondChar;
}
function checkChar3(character) {
  return character === thirdChar;
}
function checkChar4(character) {
  return character === fourthChar;
}
function checkCharLast(character) {
  return character === lastChar;
}

var splitSentence = function(input){
  splitPhrase = input.split(" ");
  for (var i = 0; i < splitPhrase.length; i++){
    words = splitPhrase.slice(i, i+1).toString();

    firstChar = words.charAt(0);
    secondChar = words.charAt(1);
    thirdChar = words.charAt(2);
    fourthChar = words.charAt(3);
    lastChar = words.charAt(words.length-1);

    if (alphabetArray.some(checkChar) && alphabetArray.some(checkCharLast)) {
      // this is where we will put functions to check for stuff now that we proved first letter is an alphabet character
      if (words.length === 1){
        displayText += words+"ay ";
      }
      else if (vowelArray.some(checkChar)) {
        displayText += words+"ay ";
      }
      else if ((firstChar === "q" || firstChar === "Q") && (secondChar === "u" || secondChar === "U")) {
        displayText += words.substring(2, words.length)+words.substring(0,2)+"ay ";
      }
      else if ((secondChar === "q" || secondChar === "Q") && (thirdChar === "u" || thirdChar === "U")){
        displayText += words.substring(3, words.length)+words.substring(0,3)+"ay ";
      }
      else if (consonantArray.some(checkChar) && vowelArray.some(checkChar2)) {
        displayText += words.substring(1, words.length)+words.substring(0,1)+"ay ";
      }
      else if (consonantArray.some(checkChar) && consonantArray.some(checkChar2) && vowelArray.some(checkChar3)) {
        displayText += words.substring(2, words.length)+words.substring(0,2)+"ay ";
      }
      else if (consonantArray.some(checkChar) && consonantArray.some(checkChar2) && consonantArray.some(checkChar3) && vowelArray.some(checkChar4)) {
        displayText += words.substring(3, words.length)+words.substring(0,3)+"ay ";
      }
      else if (yArray.some(checkChar) && vowelArray.some(checkChar2)){
        displayText += words.substring(1, words.length)+words.substring(0,1)+"ay ";
      }
      else if (yArray.some(checkChar)) {
        displayText += words+"ay ";
      }
    }
  }
}

// Front end Logic
$("form#pigLatin").submit(function(event) {
  event.preventDefault();
  inputPhrase = $("#sentence").val();
  splitSentence(inputPhrase);
  $("#output").text(displayText);
});
