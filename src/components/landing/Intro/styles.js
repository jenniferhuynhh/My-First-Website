import styled from 'styled-components';
import backgroundPic from 'assets/images/background2.jpg';

export const Wrapper = styled.div`
  height: 100vh;
  border-bottom: 0 !important;
  background-image:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
    url(${require(`assets/images/background2.jpg`)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 5.3em;
    text-align: center;
    font-family: "Playfair Display";
    color: #FFFFFF;
    margin-top: 15%;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h2 {
    font-size: 1.1em;
    font-family: "Overpass Mono";
    font-weight: lighter;
    text-align: center;
    color: #FFFFFF;
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;
