import styled from 'styled-components';


const BackgroundWrapper = styled.div`
  padding: 48px 0 48px 0;
  background-color: rgb(247, 247, 247);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20% 0 20%;
  background-color: rgb(247, 247, 247);
`;

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
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition-property: box-shadow, -ms-transform, -webkit-transform, transform !important;
    transition-duration: 0.2s, 0.25s, 0.25s, 0.25s !important;
    transition-timing-function: ease, ease, ease, ease !important;
    transition-delay: 0s, 0s, 0s, 0s !important;
  }
`;