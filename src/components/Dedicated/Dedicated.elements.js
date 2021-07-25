import styled from "styled-components";
import { Link } from 'react-router-dom';

export const DedicatedContainer = styled.div`
  background-color: #f1f1f1;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 576px){
    display: block;
  }
`;

export const DedicatedSubContainer = styled.div`
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px){
    display: block;
    padding: 1rem 0 2rem 0;
  }
`;

export const DedicatedSubContainerRow = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;

    @media screen and (max-width: 576px){
    display: block;
  }
`;

export const DedicatedHeading = styled.p`
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 5px;
  text-align: center;

  @media screen and (max-width: 576px){
    margin-left: 0px;
    font-size: 15px;
  }
`;

export const DedicatedSubheading = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  width: 85%;
  font-size: 24px;



  @media screen and (max-width: 576px){
    width: 100%;
    text-align: center;
    top: -50px;
  }
`;

export const DedicatedParagraph = styled.p`
  margin-top: 20px;
  width: 85%;
  font-size: 18px;
  font-family: Arial;

  @media screen and (max-width: 576px){
    width: 100%;
    font-size: 15px;
    padding-right: 20px;
    text-align: center;
    padding-left: 20px;
    top: -10px;
  }
  
`;