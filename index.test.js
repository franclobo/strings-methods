const Word = require('./index');
let phrase = "This is an example.";
let word = new Word();

describe('Word', () => {
  it('should return the length of the last word', () => {
    expect(word.last_word(phrase)).toBe(7);
  });

  it('should return the length of the second word', () => {
    expect(word.second_word(phrase)).toBe(2);
  });

  it('should return the length of the n-esima word', () => {
    expect(word.n_word(phrase, 0)).toBe(4);
  });
});
