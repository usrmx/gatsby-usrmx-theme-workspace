export const getFormattedDateString = (dateString: string): string =>
  new Date(dateString).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
