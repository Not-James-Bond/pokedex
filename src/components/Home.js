import React from 'react';
import styled from 'styled-components';
import banner from './img/Banner.svg';

function Home() {
  return (
    <Container>
      <TextContainer>
        <span style={{ font: 'Karla', fontWeight: 'bold' }}>Find</span> all your
        favorite{' '}
        <span style={{ font: 'Karla', fontWeight: 'bold' }}>Pokemon</span>
        <TextContainerSmall>
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
          <p>
            <LoginButton>Google</LoginButton>
          </p>
        </TextContainerSmall>
      </TextContainer>

      <ImageContainer>
        <Img src={banner} alt="" />
      </ImageContainer>
    </Container>
  );
}

export default Home;

const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    align-self: center;
    max-width: 85%;
    margin-left: 8vw;
  }
`;
const Container = styled.div`
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  /* background-size: cover; */
  display: flex;
  flex-direction: row;
  height: 92vh;
  padding-top: 3em;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-size: contain;
    padding-bottom: 3em;
    min-height: 52em;
  }
  @media screen and (max-width: 426px) {
    min-height: 38em;
  }
`;
const TextContainer = styled.div`
  color: #000000;
  font-family: 'Karla', sans-serif;
  font-size: 4vw;
  line-height: 10vh;
  letter-spacing: 2px;
  margin-left: 9vw;
  margin-right: 12vw;
  max-width: 30vw;

  @media screen and (max-width: 768px) {
    order: 2;
    flex-flow: column nowrap !important;
    align-self: center;
    text-align: center;
    letter-spacing: 4px;
    line-height: 12vh;
    height: 100em;
    max-width: 46vw;
    font-size: 7vw;
  }
  @media screen and (max-width: 426px) {
    line-height: 10vh;
    font-size: 10vw;
    max-width: 80vw;
    margin-right: 0vw;
    text-align: center;
  }
`;
const TextContainerSmall = styled.p`
  color: #000000;
  font-family: 'Karla', sans-serif;
  font-size: 2vw;
  line-height: 5vh;
  letter-spacing: 0.07vw;
  margin-top: 6vh;

  @media screen and (max-width: 768px) {
    align-self: center;
    font-weight: 600;
    margin-top: 2vh;
    padding-bottom: 12vh;
  }
  @media screen and (max-width: 426px) {
    font-weight: 500;
    line-height: 5vh;
    max-width: 70vw;
    text-align: center;
    font-size: 4vw;
  }
`;
const LoginButton = styled.button`
  margin-top: 5vh;
  background: #73d677;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4vw;
  line-height: 3.5vh;
  padding: 2vh 4vw;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 3vh;
    padding: 2vh 8vw;
  }
  @media screen and (max-width: 426px) {
    padding: 2vh 25vw;
    font-size: 3.4vw;
  }
`;
const ImageContainer = styled.figure`
  align-self: right;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    align-self: center;
    order: 1;
  }
`;
