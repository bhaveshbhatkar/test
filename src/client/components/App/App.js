import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import HomePage from 'components/Home/HomePage';



export class App extends React.Component {

  static propTypes = {
  };
  state = { visible: true };
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
        <div>

        </div>
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(App);
