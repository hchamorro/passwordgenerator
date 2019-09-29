var pw = "";
var letter = [
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
  "z"
];
var pwLen = prompt("How long do you want your password?");
function showNewPassword() {
  for (var i = 0; i < pwLen; i++) {
    var number = Math.floor(Math.random() * letter.length);
    pw = pw + letter[number];
  }
  pwBox.innerHTML = pw;
}
genBtn.addEventListener("click", showNewPassword);
/* first event */
// change this pw into a dynamic random pw
//document.write(pw);
