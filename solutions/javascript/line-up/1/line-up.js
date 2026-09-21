//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  let s = ""
  if(num>10 && num%100==11 || num%100==12 || num%100==13) s=num+'th';
  else if(num%10===1) s=num+'st';
  else if(num%10===2) s=num+'nd';
  else if(num%10===3) s=num+'rd';
  else s=num+'th';
  return `${name}, you are the ${s} customer we serve today. Thank you!`;
};
