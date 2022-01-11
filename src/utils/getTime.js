export const getParsedTime = isoDate =>
  new Date(isoDate).toLocaleTimeString('en', {
    timeStyle: 'short',
    hour12: false,
    timeZone: 'UTC',
  });

export const getFlightTime = (isoDate1, isoDate2) => {
  return getParsedTime(new Date(isoDate2) - new Date(isoDate1));
};
