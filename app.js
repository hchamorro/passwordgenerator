let pw = "";
let letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
let specialCharacter = ["!", "#", "$", "&", "*", "%", "^", "*"];
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let pwLen = prompt("How long do you want your password?");
let pwNum = confirm("Do you want a numbers?");
let pwChar = confirm("Do you want a special character?");

function chanceSymbol(arr) {
  return Math.floor(Math.random() * arr.length);
}

function showNewPassword() {
  if (8 > pwLen > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  if (pwChar === true && pwNum === true) {
    for (let i = 0; i < pwLen; i++) {
      let addNum = chanceSymbol(number);
      let addLetter = chanceSymbol(letter);
      let addChar = chanceSymbol(specialCharacter);
      pw = pw + number[addNum] + letter[addLetter] + specialCharacter[addChar];
    }
  } else if (pwNum === true && pwChar !== true) {
    for (let i = 0; i < pwLen; i++) {
      let addNum = chanceSymbol(number);
      let addLetter = chanceSymbol(letter);
      pw = pw + number[addNum] + letter[addLetter];
    }
  } else if (pwChar === true && pwNum !== true) {
    for (let i = 0; i < pwLen; i++) {
      let addChar = chanceSymbol(specialCharacter);
      let addLetter = chanceSymbol(letter);
      pw = pw + specialCharacter[addChar] + letter[addLetter];
    }
  } else {
    for (let i = 0; i < pwLen; i++) {
      let addLetter = chanceSymbol(letter);
      pw = pw + letter[addLetter];
    }
  }

  var trimmedString = pw.substring(0, pwLen);
  pwBox.innerHTML = trimmedString;
}

function copyClipboard() {
  var elm = document.getElementById("pwBox");
  // for Internet Explorer

  if (document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
    alert("Copied password to clipboard");
  } else if (window.getSelection) {
    // other browsers

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    alert("Copied password to clipboard");
  }
}
/* first event */
// change this pw into a dynamic random pw
//document.write(pw);
