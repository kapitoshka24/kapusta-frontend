const selectors = {
  getIsLoggedIn: state => state.auth.isLoggedIn,
  getUsername: state => state.auth.user.name,
  getIsFetching: state => state.auth.isFetching,
  getError: state => state.auth.error,
  getEmailVerification: state => state.auth.emailVerification,
  getForgotten: state => state.auth.forgotten,
  getResetPassword: state => state.auth.resetPassword,
};
export default selectors;
