function isPalindrome(phrase) {
  let phraseSplited = phrase.split('');
  let phraseReversed = phraseSplited.reverse();
  let phraseJoined = phraseReversed.join('');
  if (phrase === phraseJoined){
    return true;
  }
  return false;
}

console.log(isPalindrome('asa'))
