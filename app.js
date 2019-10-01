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
let specialCharacter = ["!", "#", "$", "&", "8"];
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let pwLen = prompt("How long do you want your password?");
let pwNum = confirm("Do you want a numbers?");

function showNewPassword() {
  if (pwNum === true) {
    for (let i = 0; i < pwLen; i++) {
      let addNum = Math.floor(Math.random() * number.length);
      let letterLength = Math.floor(Math.random() * letter.length);
      pw = pw + number[addNum] + letter[letterLength];
    }
  } else {
    for (let i = 0; i < pwLen; i++) {
      let letterLength = Math.floor(Math.random() * letter.length);
      pw = pw + letter[letterLength];
    }
  }

  pwBox.innerHTML = pw;
}
genBtn.addEventListener("click", showNewPassword);
/* first event */
// change this pw into a dynamic random pw
//document.write(pw);
