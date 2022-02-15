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
      </TextContainer>
      <TextContainerSmall>
        You can know the type of Pokemon, its strengths, disadvantages and
        abilities
        <h5>Reusable Button</h5>
      </TextContainerSmall>

      <ImageContainer>
        <img
          src={banner}
          alt=""
          style={{ width: 'inherit', height: 'inherit' }}
        />
      </ImageContainer>
    </Container>
  );
}

export default Home;

const TextContainer = styled.div`
  color: #000000;
  font: 'Karla';
  font-size: 50px;
  line-height: 64px;
  letter-spacing: 2px;
  padding-left: 1.4em;
  flex-grow: 2;
  width: 7em;
`;
const TextContainerSmall = styled.p`
  color: #000000;
  font: 'Karla';
  font-size: 23px;
  line-height: 32px;
  letter-spacing: 1px;
  padding-left: 3em;
  width: 17em;
  flex-grow: 1;
`;
const ImageContainer = styled.p`
  height: 31em;
  width: 36em;
  flex-grow: 2;
`;
const Container = styled.div`
  padding-top: 3em;
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  display: flex;
  flex-flow: column wrap;
  height: 31em;

  > * {
    flex: 1 1 33%;
  }
`;
