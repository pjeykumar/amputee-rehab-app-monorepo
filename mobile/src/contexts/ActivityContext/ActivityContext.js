import React from 'react';

const ActivityContext = React.createContext();

export const ActivityProvider = () => {
  const addActivity = () => {
    // Blank for now
  };

  const editActivity = (activity) => {
    // Blank for now
  };

  return (
    <ActivityContext.Provider value={{ ...this.state, addActivity: this.addActivity, editActivity: this.editActivity }}>
      {this.props.children}
    </ActivityContext.Provider>
  );
};

export const withActivityContext = (Component) => {
  return function contextComponent(props) {
    return (
      <ActivityContext.Consumer>{(context) => <Component {...props} context={context} />}</ActivityContext.Consumer>
    );
  };
};
