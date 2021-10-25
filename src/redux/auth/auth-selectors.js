const getStateAuth = state => state.auth;

const getErrorSelector = state => getStateAuth(state).error;
const getIsLoggedIn = state => getStateAuth(state).isLoggedIn;
const getUserName = state => getStateAuth(state).user.name;

const authSelectors = {
  getStateAuth,
  getIsLoggedIn,
  getUserName,
  getErrorSelector,
};

export default authSelectors;
