import React from 'react';
import MorePlacesEntry from './morePlacesEntry.jsx';
import styled from 'styled-components';
import { Header, NavBar, ArrowButton, CardWrapper } from './style.jsx';

class MorePlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0
    }

    this.nextArrowClick = this.nextArrowClick.bind(this);
    this.prevArrowClick = this.prevArrowClick.bind(this);
  }

  nextArrowClick() {
    this.setState({ pageNum: (this.state.pageNum + 1) % 3 });
  }

  prevArrowClick() {
    this.setState({ pageNum: (this.state.pageNum - 1) % 3 });
    if (this.state.pageNum <= 0) {
      this.setState({ pageNum: 2 });
    }
  }

  render() {
    let currentPage = this.props.places.slice(0, 4);
    if (this.state.pageNum === 0) {
      currentPage = this.props.places.slice(0, 4);
    } else if (this.state.pageNum === 1) {
      currentPage = this.props.places.slice(4, 8);
    } else if (this.state.pageNum === 2) {
      currentPage = this.props.places.slice(8);
    }
    return (
      <div>
        <Header>More places to stay
        <NavBar> {this.state.pageNum + 1} / 3    <ArrowButton onClick={this.prevArrowClick}>&lt;</ArrowButton><ArrowButton onClick={this.nextArrowClick}>&gt;</ArrowButton></NavBar></Header>
      <CardWrapper>
        {currentPage.map( (place) =>
          <MorePlacesEntry key={place.propertyId} place={place} />
        )}
      </CardWrapper>
      </div>
    )
  }
}






export default MorePlaces;