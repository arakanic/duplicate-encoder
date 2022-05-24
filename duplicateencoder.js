// This function converts a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
function duplicateEncode(word) {
    return word
      .toLowerCase()
      .split("")
      .map(function(letter, index, arr) {
          return arr.indexOf(letter) == arr.lastIndexOf(letter) ?
            "(" : ")"
        })
      .join("")
  }