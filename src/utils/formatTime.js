export const formatTime = (sec) => {
  if(typeof sec !== 'number' || sec < 0 ){
    return null;
  } else {

    const formatNumber = (number) => {
      let result = Math.floor(number); 
      if (result <=9) {result = ('0' + result).slice(-2);}
      return result;};

    const seconds = formatNumber(sec % 60);
    const minutes = formatNumber((sec/60)%60);
    const hours = formatNumber(sec/3600);

    return hours + ':' + minutes + ':' + seconds;
  }
};