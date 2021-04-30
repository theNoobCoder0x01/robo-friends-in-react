import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }        

    render() {
        return this.state.hasError ? (
            <>
                <h1 className="tc f1"> Ooopps... Something went wrong... </h1>
                <h3 className="tc"> Please check again later. </h3>
            </>
        ) : (
            <>
                {this.props.children}
            </>
        );
    }
}

export default ErrorBoundary;