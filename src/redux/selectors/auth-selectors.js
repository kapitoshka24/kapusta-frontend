const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsFetching = state => state.auth.isFetching;
const getError = state => state.auth.error;

const selectors = { getIsLoggedIn, getUsername, getIsFetching, getError };
export default selectors;
