import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';



class Page extends Component {
  // constructor() {
  //   super();
  // }



  render() {
    return (
      <div>
      <div>
        <AboutMe/>
        </div>
        <div>
        <Portfolio/>
        </div>
      </div>

    );
  }
}

export default Page;
