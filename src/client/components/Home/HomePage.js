import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage, FormattedRelative} from 'react-intl';


import styles from './HomePage.scss';

export class HomePage extends React.Component {
  static propTypes = {

  };

  static defaultProps = {
    serversLastUpdate: null
  };

  componentDidMount() {

  }

  render() {
    const {} = this.props;

    return (
      <section style={{padding: 20}}>
        Home Page bhavesh
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
