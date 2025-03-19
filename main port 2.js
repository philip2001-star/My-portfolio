document.addEventListener('DOMContentLoaded', (event) => {
  var typedItems = document.querySelector('.typed').getAttribute('data-typed-items').split(', ');
  var typedIndex = 0;
  var typedElement = document.querySelector('.typed');
  var currentCharIndex = 0;
  var currentWord = '';

  function typeText() {
    if (currentCharIndex < typedItems[typedIndex].length) {
      currentWord += typedItems[typedIndex].charAt(currentCharIndex);
      typedElement.textContent = currentWord;
      currentCharIndex++;
      setTimeout(typeText, 150); // Adjust typing speed
    } else {
      setTimeout(deleteText, 2000); // Pause before deleting
    }
  }

  function deleteText() {
    if (currentCharIndex > 0) {
      currentWord = currentWord.slice(0, -1);
      typedElement.textContent = currentWord;
      currentCharIndex--;
      setTimeout(deleteText, 100); // Adjust deleting speed
    } else {
      typedIndex = (typedIndex + 1) % typedItems.length;
      setTimeout(typeText, 500); // Pause before typing next word
    }
  }

  typeText();
});





/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // Convert number to string
  let str = x.toString();
  
  // Reverse the string
  let reversed = str.split('').reverse().join('');
  
  // Check if original and reversed strings are the same
  return str === reversed;
};


