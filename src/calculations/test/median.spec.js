import {median} from '../median';

describe('median', () => {
  it('returns 0 if you give it an empty array', () => {
    expect(median([])).toBe(0);
  });
  it('calculates median correctly with odd number of elements', () => {
    expect(median([1, 2, 3])).toBe(2);
  });
  it('calculates median correctly with even number of elements', () => {
    expect(median([1, 2])).toBe(1.5);
  });
});
