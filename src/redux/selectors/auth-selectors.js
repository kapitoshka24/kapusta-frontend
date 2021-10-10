const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsFetching = state => state.auth.isFetching;

const selectors = { getIsLoggedIn, getUsername, getIsFetching };
export default selectors;
