import dayjs from "dayjs";

const getLong = (start: string, end: string) => {
  const startDate = dayjs(start, "DD MMMM YYYY");
  const endDate = end === "now" ? dayjs() : dayjs(end, "DD MMMM YYYY");

  // Calculate the difference in years
  const years = endDate.diff(startDate, "year");

  // Calculate the difference in months, considering years
  const months = endDate.diff(startDate, "month") % 12;

  return `${years} years ${months} months`;
}
export default getLong;