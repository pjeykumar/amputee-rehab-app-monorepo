import React from 'react';
import axios from 'axios';
const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null,
      isLoggedIn: false,
    };
  }

  login(formData) {
    const response = '';
    const url = 'http://35.242.176.68/api/users/signin';
    return axios
      .post(url, {})
      .then(function (response) {
        console.log('auth context -> sign in response', response);
        return response;
      })
      .catch(function (error) {
        console.log('auth context -> sign in error', error);
        return error;
      });
  }

  register(formData) {
    // Blank for now
  }

  logout() {
    this.setState({
      token: null,
      isLoggedIn: false,
    });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          login: this.login,
          register: this.register,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const withAuthContext = (Component) => {
  return function contextComponent(props) {
    return <AuthContext.Consumer>{(context) => <Component {...props} {...context} />}</AuthContext.Consumer>;
  };
};
