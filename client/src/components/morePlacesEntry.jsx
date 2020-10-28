import React from 'react';
import styled from 'styled-components';
import { starImg, heartImg, Card, ImageContainer, Image, SuperHost, SuperHostCon, StarImg, HeartImg, NumRatings, Description, Price } from './style.jsx';

let MorePlacesEntry = (props) => {
  switch(props.place.isSuperHost) {
    case true:
      return (
        <Card>
          <ImageContainer>
            <SuperHost><SuperHostCon>SUPERHOST</SuperHostCon></SuperHost>
            <HeartImg src={heartImg} />
            <a href={`?propertyId=${props.place.propertyId}`}><Image src={props.place.img} /></a>
          </ImageContainer>
          <div className="property-description">
            <div>{props.place.propertyType} • {props.place.numOfRooms} beds</div>
            <div><StarImg src={starImg} /> {props.place.rating} <NumRatings>({props.place.numOfRatings})</NumRatings></div>
            <Description>{props.place.description}</Description>
            <div><Price>${props.place.price}</Price> / night</div>
          </div>
        </Card>
      )
      break;
    case false:
      return (
        <Card>
          <ImageContainer>
            <HeartImg src={heartImg} />
            <a href={`?propertyId=${props.place.propertyId}`}><Image src={props.place.img} /></a>
          </ImageContainer>
          <div className="property-description">
            <div>{props.place.propertyType} • {props.place.numOfRooms} beds</div>
            <div><StarImg src={starImg} /> {props.place.rating} <NumRatings>({props.place.numOfRatings})</NumRatings></div>
            <Description>{props.place.description}</Description>
            <div><Price>${props.place.price}</Price> / night</div>
          </div>
        </Card>
      )
      break;
    default:
      return null;
  }
}

//test

export default MorePlacesEntry;