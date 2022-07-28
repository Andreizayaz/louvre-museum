type getTimeType = (time: number) => {
  seconds: string;
  minutes: string;
  hours: string;
};

const getZero = (value: number) => (value < 10 ? `0${value}` : `${value}`);

export const getTime: getTimeType = (time) => {
  const date = new Date(time * 1000);

  const seconds = date.getUTCSeconds();
  const minutes = date.getUTCMinutes();
  const hours = date.getUTCHours();

  return {
    seconds: getZero(seconds),
    minutes: getZero(minutes),
    hours: getZero(hours)
  };
};
