
// Back end Logic
// Assigning variables
var inputPhrase = "";
var vowelArray = ["a", "e", "i", "o", "u", "A", "E",
"I", "O", "U"];
var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
var alphabetArray = vowelArray.concat(consonantArray);
var splitPhrase = [];
var words = "";
var firstChar = "";
function checkChar(character) {
  return character === firstChar;
}
function checkChar2(character) {
  return character === secondChar;
}



var splitSentence = function(input){
  splitPhrase = input.split(" ");
  for (var i = 0; i < splitPhrase.length; i++){
    words = splitPhrase.slice(i, i+1).toString();

    firstChar = words.charAt(0);
    secondChar = words.charAt(1);

    if (alphabetArray.some(checkChar)) {
      // this is where we will put functions to check for stuff now that we proved first letter is an alphabet character
      if (words.length === 1){
        alert(words+"ay");
      }
      else if (vowelArray.some(checkChar)) {
        alert(words+"ay");
      }
      else if (consonantArray.some(checkChar) && vowelArray.some(checkChar2)) {
        alert(words.substring(1, words.length)+words.substring(0,1)+"ay");
      }


      else{
        alert("not a single letter");
      }
    } else {
      alert("it didn't work");
    }
  }
}




// Front end Logic
$("form#pigLatin").submit(function(event) {
  event.preventDefault();
  inputPhrase = $("#sentence").val();
  splitSentence(inputPhrase);

});
