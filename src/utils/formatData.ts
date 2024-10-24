export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  // Get day, month, and year
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();

  // Return the formatted date in MM/D/YYYY format
  return `${month}/${day}/${year}`;
};
