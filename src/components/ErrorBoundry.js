import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = {
      hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="Error">Opps!!!! that is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
