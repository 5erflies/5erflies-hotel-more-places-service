import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  padding: 48px 0 48px 0;
  background-color: rgb(247, 247, 247);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20% 0 20%;
  background-color: rgb(247, 247, 247);
`;

export const Header = styled.h2`
  font-weight: 400;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

export const NavBar = styled.div`
  display: inline;
  float: right;
  padding: 5px 0 5px 0;
  font-weight: 100;
  font-size: 16px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

export const ArrowButton = styled.button`
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

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  clear: both;
`;

export let starImg = "https://hackreactor5erfliesmoreplaces.s3-us-west-1.amazonaws.com/Star-Image.png";

export let heartImg = "https://hackreactor5erfliesmoreplaces.s3-us-west-1.amazonaws.com/airbnb-heart.png";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 0px 10px;
  flex: {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.333%;
  };
  max-width: 33.333%;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-weight: 400;
  font-size: 16px;
  margin: 0 10px 0 10px;
  min-width: 0;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  @media screen and (min-width: 1440px) {
    height: 178px;
    width: 267px;
  }
  @media screen and (min-width: 1024px) {
    height: 201px;
    width: 301px;
  }
  @media screen and (min-width: 600px) {
    height: 144px;
    width: 216px;
  }
  @media screen and (max-width: 600px) {
    height: 129px;
    width: 193px;
  }
  border-radius: 8px;
  position: relative;
  z-index: 0;
`;

export const SuperHost = styled.div`
  position: absolute;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  background-color: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 10px;
  color: rgb(34, 34, 34);
  z-index: 1;
`;

export const SuperHostCon = styled.span`
  margin: 10px;
  font-weight: bold;
  font-size: 14px;
`;

export const HeartImg = styled.img`
  height: 14px;
  width: 16px;
  position: absolute;
  bottom: 88%;
  left: 92%;
  z-index: 1;
`;

export const StarImg = styled.img`
  height: 14px;
  width: 14px;
  line-height: 0px;
`;

export const NumRatings = styled.span`
  color: grey
`;

export const Description = styled.div`
  display: flex;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`;

export const Price = styled.span`
  font-weight: bold;
`;

