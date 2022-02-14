import { getParsedDate } from './getTime.js';

describe('getParsedDate 함수 테스트', () => {
  test('get Formatted date 2022-01-21', () => {
    const isoDateEx = '2022-01-21T10:32Z';
    expect(getParsedDate(isoDateEx)).toBe('2022-01-21');
  });
  test('연,일,월 1개라도 들어가지 않으면 false', () => {
    const falsyDateEx = '2022-01';
    expect(getParsedDate(falsyDateEx)).toBe('2022-01-21');
  });
});
