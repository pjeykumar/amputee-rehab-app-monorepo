import React from 'react';

const AuthContext = React.createContext();

export const AuthProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            token: null,
            isLoggedIn: false,
        }
    }

    login(formData) {
        // Blank for now
    }

    register(formData) {
        // Blank for now
    }

    logout() {
        this.setState({
            token: null,
            isLoggedIn: false,
        })
    }

    render() {
        return (
            <AuthContext.Provider value={
                {
                    ...this.state,
                    login: this.login,
                    register: this.register,
                    logout: this.logout,
                }
            }>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export const withAuthContext(Component) {
    return function contextComponent(props) {
		return (
			<AuthContext.Consumer>
				{context => <Component {...props} context={context} />}
			</AuthContext.Consumer>
		)
	}
}