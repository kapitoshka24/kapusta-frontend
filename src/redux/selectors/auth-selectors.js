const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getSession = state => state.session;
const getIsFetching = state => state.auth.isFetching;
const getError = state => state.auth.error;

const selectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetching,
  getSession,
  getError,
};
export default selectors;
