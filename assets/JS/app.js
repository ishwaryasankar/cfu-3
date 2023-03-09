
/*get the number of characters*/
// function charLength() {

//     let charLength = document.getElementById('length').value;
//     document.getElementById('result').innerHTML = charLength;
//     return charLength;

// }

// document.getElementById('length').addEventListener('change', charLength)

function generatePassword() {
    var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      resultValue = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      resultValue += charset.charAt(Math.floor(Math.random() * n)).toUpperCase();
    }
    document.getElementById("password__result").value = resultValue;
  }      