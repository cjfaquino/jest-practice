const isAlpha = (ch) =>
  typeof ch === 'string' && ch.length === 1 && /[A-Za-z]/.test(ch);

const caesarCipher = (key, str) => {
  // split into array of charCodes
  const code = str.split('').map((letter) => letter.charCodeAt(0));

  // create array of shifted chars
  const newChars = code.map((num) => {
    if (num + key > 122 || (num + key > 90 && num < 97)) {
      // eslint-disable-next-line no-param-reassign
      num -= 26;
    }

    // return shifted letter
    const newCh = String.fromCharCode(num + key);
    if (isAlpha(newCh)) return newCh;

    // keep spaces and punctuations
    return String.fromCharCode(num);
  });

  // join final array
  return newChars.join('');
};

module.exports = caesarCipher;
