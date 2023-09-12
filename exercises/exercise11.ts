export function isPangram(sentence: string): boolean {
  // throw new Error('Remove this statement and implement this function')

  const splitSentence = sentence.toLowerCase()
  .replace(/\s+/g, '')
  .replace(/[^a-z0-9]/gi, '')
  .split('');

  const reducedSentence = splitSentence.filter((item,index)=> splitSentence.indexOf(item) === index);

  return reducedSentence.length === 26;
  
}

isPangram('the quick brown fox jumps over the lazy dog');
