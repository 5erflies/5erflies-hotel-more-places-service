import React from 'react';
import MorePlacesEntry from './morePlacesEntry.jsx';
import styled from 'styled-components';
import { Header, NavBar, PrevButton, NextButton, Wrapper } from './style.jsx';

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
    if (this.state.pageNum === 0) {
      let firstPage = this.props.places.slice(0, 4);
      return (
        <div>
          <Header>More places to stay
          <NavBar> {this.state.pageNum + 1} / 3    <PrevButton onClick={this.prevArrowClick}>&lt;</PrevButton><NextButton onClick={this.nextArrowClick}>&gt;</NextButton></NavBar></Header>
        <Wrapper>
          {firstPage.map( (place) =>
            <MorePlacesEntry key={place.propertyId} place={place} />
          )}
        </Wrapper>
        </div>
      )
    } else if (this.state.pageNum === 1) {
      let secondPage = this.props.places.slice(4, 8);
      return (
        <div>
        <Header>More places to stay
          <NavBar> {this.state.pageNum + 1} / 3    <PrevButton onClick={this.prevArrowClick}>&lt;</PrevButton><NextButton onClick={this.nextArrowClick}>&gt;</NextButton></NavBar></Header>
        <Wrapper>
          {secondPage.map( (place) =>
            <MorePlacesEntry key={place.propertyId} place={place} />
          )}
        </Wrapper>
        </div>
      )
    } else if (this.state.pageNum === 2) {
      let thirdPage = this.props.places.slice(8);
      return (
        <div>
          <Header>More places to stay
          <NavBar> {this.state.pageNum + 1} / 3    <PrevButton onClick={this.prevArrowClick}>&lt;</PrevButton><NextButton onClick={this.nextArrowClick}>&gt;</NextButton></NavBar></Header>
        <Wrapper>
          {thirdPage.map( (place) =>
            <MorePlacesEntry key={place.propertyId} place={place} />
          )}
        </Wrapper>
        </div>
      )
    }
  }
}

export default MorePlaces;