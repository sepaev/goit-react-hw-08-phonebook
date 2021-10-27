const getStateAuth = state => state.auth;

const getErrorSelector = state => getStateAuth(state).error;
const getIsLoggedIn = state => getStateAuth(state).isLoggedIn;
const getUserSelector = state => getStateAuth(state).user;
const getUserName = state => getUserSelector(state).name;

const authSelectors = {
  getStateAuth,
  getIsLoggedIn,
  getUserName,
  getUserSelector,
  getErrorSelector,
};

export default authSelectors;
