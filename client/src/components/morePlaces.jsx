import React from 'react';
import MorePlacesEntry from './morePlacesEntry.jsx';
import styled from 'styled-components';

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


const Header = styled.h2`
  font-weight: 400;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

const NavBar = styled.div`
  display: inline;
  float: right;
  padding: 5px 0 5px 0;
  font-weight: 100;
  font-size: 16px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

const PrevButton = styled.button`
  border: 1px solid rgba(0,0,0,0.08);
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-weight: 200;
  font-size: 16px;
  height: 30px;
  width: 30px;
  margin-right: 5px;
  border-radius: 50%;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition-property: box-shadow, -ms-transform, -webkit-transform, transform !important;
    transition-duration: 0.2s, 0.25s, 0.25s, 0.25s !important;
    transition-timing-function: ease, ease, ease, ease !important;
    transition-delay: 0s, 0s, 0s, 0s !important;
  }
`;

const NextButton = styled.button`
  border: 1px solid rgba(0,0,0,0.08);
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-weight: 200;
  font-size: 16px;
  height: 30px;
  width: 30px;
  margin-left: 5px;
  border-radius: 50%;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
  cursor: pointer

  &:hover {
    transform: scale(1.1);
    transition-property: box-shadow, -ms-transform, -webkit-transform, transform !important;
    transition-duration: 0.2s, 0.25s, 0.25s, 0.25s !important;
    transition-timing-function: ease, ease, ease, ease !important;
    transition-delay: 0s, 0s, 0s, 0s !important;
  }
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
clear: both;
`;

export default MorePlaces;