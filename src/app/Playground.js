

'use strict';

import React, { Component } from 'react';
import {
    View,
} from 'react-native';

class Playground extends Component {
  static stateTypes = {
    content: Array<ReactElement>
  };

  constructor() {
    super();
    const content = [];
    const define = (name: string, render: Function) => {
      content.push(<Example key={name} render={render} />);
    };
    // var Module = require('F8PageControl');
    var Module = require('F8Header');
    // var Module = require('./tabs/schedule/AddToScheduleButton');
    // var Module = require('./rating/Header');
    // $FlowFixMe: doesn't understand static
    Module.__cards__(define);
    this.state = {content};
  }

  render() {
    return (
      <View style={{backgroundColor: '#336699', flex: 1,}}>
        {this.state.content}
      </View>
    );
  }
}

class Example extends Component {
  state = {
    inner: null
  };

  render() {
    const content = this.props.render(this.state.inner, (inner) => this.setState({inner}));
    return (
      <View>
        {content}
      </View>
    );

  }
}

export default Playground;