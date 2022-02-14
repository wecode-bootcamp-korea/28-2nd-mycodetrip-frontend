export const getParsedTime = isoDate =>
  new Date(isoDate).toLocaleTimeString('en', {
    timeStyle: 'short',
    hour12: false,
    timeZone: 'UTC',
  });

export const getFlightTime = (isoDate1, isoDate2) => {
  let [flightHour, flightMinute] = getParsedTime(
    new Date(isoDate2) - new Date(isoDate1)
  ).split(':');

  const isHourLessThan12 = flightHour[0] === '0';
  flightHour = isHourLessThan12 ? flightHour.substring(1) : flightHour;

  const formattedFlightTime = `${flightHour}시간 ${flightMinute}분`;
  return formattedFlightTime;
};

const dayOfWeekSet = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};

export const getKORFormattedDate = (isoDate, withinYear = false) => {
  const givenDate = new Date(isoDate);
  const [year, month, day] = givenDate.toLocaleDateString().split('.');
  const dayOfIsoDate = dayOfWeekSet[givenDate.getDay()];

  const formattedDate = `${month}월 ${day}일 (${dayOfIsoDate})`;
  return withinYear ? `${year}년 ` + formattedDate : formattedDate;
};

export const getParsedDate = isoDate => {
  const givenDate = new Date(isoDate);
  const [year, month, date] = givenDate
    .toLocaleDateString()
    .split('.')
    .map(date => date.trim());

  return `${year}-${month < 10 ? `0${month}` : month}-${date}`;
};
