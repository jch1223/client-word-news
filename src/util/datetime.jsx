exports.formatted = today => {
  return `${today.getFullYear()}-${
    today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()
  }-${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`;
};
