export const formatDateToHumanDate = (date: string) => {
  const tempDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(tempDate);

  return formattedDate;
};
