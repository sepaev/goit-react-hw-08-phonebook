const getStateAuth = state => state.auth;

const getIsLoggedIn = state => getStateAuth(state).isLoggedIn;
const getUserName = state => getStateAuth(state).user.name;

const authSelectors = {
  getStateAuth,
  getIsLoggedIn,
  getUserName,
};

export default authSelectors;
