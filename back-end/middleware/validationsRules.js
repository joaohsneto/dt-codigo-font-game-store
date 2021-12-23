const validatePassword = (login, passwordReq) => {
  if (!login) {
    return false;
  }
  const { password } = login;
  
  if (password !== passwordReq) {
    return false;
  }
  return true;
};

module.exports = {
  validatePassword,
};