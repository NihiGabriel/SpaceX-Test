import React from 'react';
import { Button } from '../../globalStyles';

import {
  FooterContainer,
  FooterRow,
  FooterLine,
  FooterLinetwo,
  FooterLinethree,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLabel,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitleOne,
  FooterLinkTitleTwo,
  FooterLinkTitleFour,
  FooterLinkTitleThree,
  FooterLink,
  FooterLinkTwo,
  FooterLinkThree,
  FooterLinkFour,
  SocialMedia,
  SocialMediaWrap,
  FooterLogo,
  FooterLogoImg,
  WebsiteRights,
} from './Footer.elements';

import footerlogo from '../../images/spacex.svg'

function Footer() {
  return (
    <FooterContainer> 
      <FooterRow>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems data-aos-anchor-easing='ease-in-out' data-aos-delay='50 '  data-aos="zoom-in">
              <FooterLinkTitleTwo>CONTACT</FooterLinkTitleTwo>
              <FooterLinkFour to='/'>+32 484 26 77 94</FooterLinkFour>
              <FooterLinkFour to='/'>+32 484 26 77 94</FooterLinkFour>
              <FooterLinkFour to='/'>info@spacex.com</FooterLinkFour>
            </FooterLinkItems>
            <FooterLine/>
            
            <FooterLinkItems data-aos-anchor-easing='ease-in-out' data-aos-delay='50 '  data-aos="zoom-in">
              <FooterLinkTitleOne> ABOUT</FooterLinkTitleOne>
              <FooterLinkThree to='/'>About Us</FooterLinkThree>
              <FooterLinkThree to='/'>Careers</FooterLinkThree>
              <FooterLinkThree to='/'>Shop</FooterLinkThree>
            </FooterLinkItems>
            <FooterLinetwo/>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems data-aos-anchor-easing='ease-in-out' data-aos-delay='50 '  data-aos="zoom-in">
              <FooterLinkTitleThree>SOCIAL MEDIA</FooterLinkTitleThree>
              <FooterLinkTwo to='/'>Facebook</FooterLinkTwo>
              <FooterLinkTwo to='/'>Twitter</FooterLinkTwo>
              <FooterLinkTwo to='/'>Vimeo</FooterLinkTwo>
            </FooterLinkItems>
            <FooterLinethree/>
            <FooterLinkItems data-aos-anchor-easing='ease-in-out' data-aos-delay='50 '  data-aos="zoom-in">
              <FooterLinkTitleFour>ROCKETS</FooterLinkTitleFour>
              <FooterLink to='/'>Falcon Heavy</FooterLink>
              <FooterLink to='/'>Falcon 9</FooterLink>
              <FooterLink to='/'>Falcon 1</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        
        <FooterSubscription>
          <FooterSubHeading>
            GET UPDATES
          </FooterSubHeading>
          <FooterSubText>Subscribe and get updates about our rocket launches and everything around SpaceX</FooterSubText>
          <FooterLabel>Email</FooterLabel>
          <Form>
            <FormInput name='email' type='email' placeholder='example@impact.org' />
            <Button fontBig>OK</Button>
          </Form>
        </FooterSubscription>
     
      </FooterRow>
      
      <SocialMedia>
        <SocialMediaWrap>
          
          <WebsiteRights>© 2019 SPACE EXPLORATION TECHNOLOGIES CORP.</WebsiteRights>

          <FooterLogo to='/'>
          <FooterLogoImg src={footerlogo} />
            
          </FooterLogo>

        </SocialMediaWrap>
      </SocialMedia>
      
    </FooterContainer>
  );
}

export default Footer;
