/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import MorePlaces from './morePlaces.jsx';
import styled from 'styled-components';
import { BackgroundWrapper, Wrapper } from './style.jsx'

let query = window.location.search || "?propertyId=0";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: [],
    },

    this.setProperty = this.setProperty.bind(this);
    this.getProperty = this.getProperty.bind(this);
  }

  componentDidMount() {
    this.getProperty();
  }


  getProperty() {
    axios.get(`/morePlaces/${query}`)
      .then(this.setProperty)
      .catch(console.log);
  }

  setProperty(property) {
    this.setState({ property: property.data });
    console.log(this.state.property)
  }

  render() {
    return (
      <BackgroundWrapper>
        <Wrapper>
          <MorePlaces places={this.state.property} />
        </Wrapper>
      </BackgroundWrapper>
    )
  }
}




export default App;
