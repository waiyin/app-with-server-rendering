// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render () {
        return (
            <div>
                { React.cloneElement(this.props.children, { data: this.props.data }) }
            </div>
        );
    }
}

/*
    Connecting to the Redux store:
    http://redux.js.org/docs/basics/UsageWithReact.html#implementing-container-components
*/

const mapStateToProps = ({ apiData }) => {
console.log('apidata------------------',apiData)
return {
  data:apiData
}
}

export default connect(mapStateToProps)(App);
