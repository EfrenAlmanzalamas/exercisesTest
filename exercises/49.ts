export function clean(input: string): string {
  if (/[a-zA-Z]/g.test(input))
    throw new Error('Letters not permitted');
  if (/[@:!]/g.test(input))
    throw new Error('Punctuations not permitted');
  let why = input.replace(/[() .+\-]/g, '');
  if (why.length > 11) {
    throw new Error('More than 11 digits');
  }
  else if (why.length < 10) {
    throw new Error('Incorrect number of digits');
  }
  else if (why.length === 11) {
    if (why[0] !== '1') {
      throw new Error('11 digits must start with 1');
    }
    why = why.substring(1);
  }
  let area = why.match(/^[0-9]{3}/)![0];
  if (area[0] === '0') {
    throw new Error('Area code cannot start with zero');
  } else if (area[0] === '1') {
    throw new Error('Area code cannot start with one')
  }
  let exchange = why.match(/[0-9]{7}$/)![0];
  if (exchange[0] === '0') {
    throw new Error('Exchange code cannot start with zero');
  } else if (exchange[0] === '1') {
    throw new Error('Exchange code cannot start with one')
  }
  return input.match(/\(?([2-9]\d{2})\)?[-. ]*?\s?(\d{3})[-. ]*?\s?(\d{4})/g)?.reduce((acc, cur) => {
    return acc + [...cur].filter(val => /[\d]/.test(val)).join('');
  }, '') ?? '';
}