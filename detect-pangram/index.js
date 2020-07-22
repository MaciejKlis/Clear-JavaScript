// A pangram is a sentence that contains every single letter of the alphabet at least once. 
//Should return true -> "The quick brown fox jumps over the lazy dog."
//Should return false ->  "This is not a pangram."


function isPangram(string) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let i = 0; i < alphabet.length; i++) {
    if (string.toLowerCase().includes(alphabet[i]))
      alphabet[i] = true;
  }

  for (let z = 0; z < alphabet.length; z++) {
    if (alphabet[z] !== true)
      return false;
  }

  return true;
}