import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {useState,useEffect} from 'react'

class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.test.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }

export default Test
