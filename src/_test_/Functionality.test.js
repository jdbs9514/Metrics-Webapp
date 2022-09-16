import { getCryptos, searchCryptos } from '../Redux/Crypto';

it('getCryptos should return a promise', () => {
  expect(getCryptos()).toEqual(expect.any(Function));
});

it('searchCryptos should return a promise', () => {
  expect(searchCryptos()).toEqual(expect.any(Function));
});
