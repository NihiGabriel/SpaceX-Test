import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeroVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;

`

export const HeroContainer = styled.div`
  min-height: 100vh;

  display: grid;
  place-items: center;

  @media screen and (max-width: 576px){
    min-height: 60vh;

  }

`;

export const HeroParagraph = styled.p`
  color: #fff;
  font-size: 60px;
  text-align: center;

  
  @media screen and (max-width: 576px) {
    font-size: 30px;
    text-align: center;
    margin-left: 0px;
    padding-bottom: 50px;
}
`;