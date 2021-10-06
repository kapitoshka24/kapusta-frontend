const userSelector = {
  selectUser: state => state.auth.user,
  selectUserError: state => state.auth.user.error,
};

export default userSelector;
