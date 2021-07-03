import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styled from "styled-components";
import tw from "twin.macro";
import { TestId } from "consts/consts.js";
//eslint-disable-next-line
// import { css } from "styled-components/macro";

// import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import ParkingCarWoman from "images/parking-car-woman.png";

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

const campaingUrl =
  "https://zaparkowani.us6.list-manage.com/subscribe/post?u=7fb419f7281b19ea1c8379e21&amp;id=d254eed284";

const SubscribeForm = ({ status, message, subscribe }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    subscribe({
      EMAIL: email,
    });
  };

  if (status === "success") {
    return (
      <div>
        <div style={{ width: 60, height: 60, margin: "40px auto" }}>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            style={{ enableBackground: "new 0 0 50 50" }}
            xmlSpace="preserve"
          >
            <circle style={{ fill: "#6415FF", cx: "25", cy: "25", r: "25" }} />
            <polyline
              style={{
                fill: "none",
                stroke: "#FFFFFF",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              points="
   38,15 22,33 12,25 "
            />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
        Dziękujemy! Oczekuj naszej wiadomości.
      </div>
    );
  }

  return (
    <div>
      <div style={{ position: "relative " }}>
        <input
          id={TestId.Hero.EmailInput}
          type="text"
          name="email"
          placeholder="Podaj Adres E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button id={TestId.Hero.EmailButton} onClick={handleSubmit}>
          Zapisz się
        </button>
      </div>
      {status === "error" ? (
        <div style={{ marginTop: 10 }}>Wystąpił błąd, sprawdź adress email</div>
      ) : null}
    </div>
  );
};

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
              Gotowy do <span tw="text-primary-500">współpracy</span>? Zostaw
              nam swój adres e-mail, a poinformujemy{" "}
              <span tw="text-primary-500">Cię</span> gdy tylko będziemy gotowi!
            </Paragraph>
            <Actions id={TestId.Hero.Actions}>
              <MailchimpSubscribe
                url={campaingUrl}
                render={({ status, message, subscribe }) => (
                  <SubscribeForm
                    status={status}
                    message={message}
                    subscribe={subscribe}
                  />
                )}
              />
            </Actions>
            {/*            <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip>*/}
          </LeftColumn>
          <RightColumn id={TestId.Hero.RightColumn}>
            <IllustrationContainer id={TestId.Hero.IllustrationContainer}>
              <img
                id={TestId.Hero.IllustrationImage}
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                src={ParkingCarWoman}
                alt="Car vector created by macrovector - www.freepik.com"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 id={TestId.Hero.FirstDecoratorBlob} />
      </Container>
    </>
  );
};
