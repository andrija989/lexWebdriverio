module.exports = {
  randomString() {
    return Math.random()
      .toString()
      .substring(2, 16);
  },

  randomStringFourDigits() {
    return Math.random()
      .toString()
      .substring(2, 6);
  },

  randomEmail() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 11) + '@gmail.com'
    );
  },
};
