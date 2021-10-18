const selectors = {
  getIsLoggedIn: state => state.auth.isLoggedIn,
  getUsername: state => state.auth.user.name,
  getUserPicture: state => state.auth.user.picture,
  getIsFetching: state => state.auth.isFetching,
  getError: state => state.auth.error,
  getEmailVerification: state => state.auth.emailVerification,
};
export default selectors;
