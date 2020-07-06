import React, { useState } from 'react';
import useRequest from '../../hooks/use-request';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState('');
  const [user, setUser] = useState({});
  const { response, doRequest } = useRequest();

  const login = async (formData, callback) => {
    await doRequest('http://localhost/api/users/auth', 'post', formData);

    if (response.errors) console.warn('auth context -> sign in error', JSON.stringify(response.errors, null, 2));

    if (response.data) {
      setUserToken('LOGGED IN'); // need to set to JWT from server
      setUser(response.data);
      callback();
    }
    return response;
  };

  const register = async (formData) => {
    // Blank for now
  };

  const logout = async () => {
    setUserToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const withAuthContext = (Component) => {
  return function contextComponent(props) {
    return <AuthContext.Consumer>{(context) => <Component {...props} {...context} />}</AuthContext.Consumer>;
  };
};
