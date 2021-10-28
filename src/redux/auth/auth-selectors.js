const getStateAuth = state => state.auth;

const getErrorSelector = state => getStateAuth(state).error;
const getIsLoggedIn = state => getStateAuth(state).isLoggedIn;
const getUserSelector = state => getStateAuth(state).user;
const getisFetchingUserSelector = state => getStateAuth(state).isFetchingUser;
const getUserName = state => getUserSelector(state).name;

const authSelectors = {
  getStateAuth,
  getIsLoggedIn,
  getUserName,
  getUserSelector,
  getisFetchingUserSelector,
  getErrorSelector,
};

export default authSelectors;
