export const getTimeLeftInYearInMilliseconds = () => {
    const now = new Date();
    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
    return endOfYear.getTime() - now.getTime();
}

export const getFreeTimeLeftInYearInMilliseconds = () => {
    const totalMsLeft = getTimeLeftInYearInMilliseconds();
    const freeMsLeft = totalMsLeft * (8 / 24);
    return freeMsLeft;
};;


export const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];