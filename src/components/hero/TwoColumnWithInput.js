import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {TestId} from "consts/consts.js"
//eslint-disable-next-line
// import { css } from "styled-components/macro";

// import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import ParkingCarWoman from "images/parking-car-woman.png"

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

export default ({ roundedHeaderButton }) => {
  return (
    <>
      {/* <Header roundedHeaderButton={roundedHeaderButton} /> */}
      <Container id={TestId.Hero.Hero}>
        <TwoColumn id={TestId.Hero.TwoColumns}>
          <LeftColumn id={TestId.Hero.LeftColumn}>
            <Heading id={TestId.Hero.Header}>
              Startujemy już <span tw="text-primary-500">wkrótce</span>!
            </Heading>
            <Paragraph id={TestId.Hero.Paragraph}>
              Gotowy do <span tw="text-primary-500">współpracy</span>? Zostaw nam swój adres e-mail, a poinformujemy <span tw="text-primary-500">Cię</span> gdy tylko będziemy gotowi!
            </Paragraph>
            <Actions id={TestId.Hero.Actions}>
              <form name="contact" method="POST" data-netlify="true">

              <input id={TestId.Hero.EmailInput} type="text" name="email" placeholder="Podaj Adres E-mail" />
              <button id={TestId.Hero.EmailButton} type="submit">Zapisz się</button>
              </form>
            </Actions>
{/*            <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip>*/}
          </LeftColumn>
          <RightColumn id={TestId.Hero.RightColumn}>
            <IllustrationContainer id={TestId.Hero.IllustrationContainer}>
              <img id={TestId.Hero.IllustrationImage} tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={ParkingCarWoman} alt="Car vector created by macrovector - www.freepik.com" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 id={TestId.Hero.FirstDecoratorBlob} />
      </Container>
    </>
  );
};
