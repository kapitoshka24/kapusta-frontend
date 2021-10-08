const userSelector = {
  selectUser: state => state.auth.user,
  selectUserIsLogged: state => state.auth.user.isLogged,
  selectUserError: state => state.auth.user.error,
  selectUserOnVerification: state => state.auth.user.onVerification,
};

export default userSelector;
