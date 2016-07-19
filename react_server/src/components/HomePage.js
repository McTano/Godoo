import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import InfoSection from './InfoSection';

export default class HomePage extends Component {

  constructor(props) {
    super();
  }
  render() {
    return(
      <div>
        <Nav />
        <Hero
          makeCall={this.props.makeCall}
          switchPage={this.props.switchPage}
          today={this.props.today}
        />
        <InfoSection />
      </div>
    );
  }

}