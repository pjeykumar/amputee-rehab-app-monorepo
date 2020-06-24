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

  async login(formData) {
    const url = 'http://localhost/api/users/signin';
    let response = null;
    let errors = null;
    try {
      console.log(formData);
      response = await axios.post(url, formData);
      console.log(response.headers['set-cookie'][0]);
    } catch (error) {
      console.log('auth context -> sign in error', JSON.stringify(error.response.data.errors, null, 2));
      errors = error.response.data.errors;
    }

    return { response, errors };
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
