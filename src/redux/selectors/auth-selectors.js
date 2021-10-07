const userSelector = {
  selectUser: state => state.auth.user,
  selectUserIsLogged: state => state.auth.user.isLogged,
  selectUserError: state => state.auth.user.error,
};

export default userSelector;
