import React from 'react';

class ErrorBoundary extends React.Component {
    constructor (){
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(err, errInfo){
        console.log(err);
        this.setState({hasError : true})
    }

    render(){
        if (this.state.hasError === true){
            return (
            <>
            <h1>Ooooppssss ... !</h1>
            </>

            )
        }
        return this.props.children
    }
}

export default ErrorBoundary