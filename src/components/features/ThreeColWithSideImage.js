import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {TestId} from "consts/consts.js"
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Innowacyjny produkt", subheading = "Funkcjonalno??ci", description = "Nie korzystasz z miejsca parkingowego w danej chwili? Wynajmij je i zacznij zarabia??!" }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: SupportIconImage,
      title: "B??d?? na bie????co",
      description: "...i otrzymuj powiadomienia o potencjalnych najemcach."
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Analizuj",
      description: "Op??acalno????, czas i korzy??ci." },
    {
      imageSrc: ReliableIconImage,
      title: "Kontroluj",
      description: "Kto i kiedy parkuje na Twoim miejscu." },
    {
      imageSrc: FastIconImage,
      title: "Parkuj",
      description: "Kupuj bilety na post??j bez wychodzenia z samochodu." },
    {
      imageSrc: SimpleIconImage,
      title: "Zarabiaj",
      description: "Na udost??pnianiu swojego miejsca kiedy chcesz i jak d??ugo chcesz."},
    {
      imageSrc: ShieldIconImage,
      title: "Otrzymaj",
      description: "Miejsca gdziekolwiek jeste?? w ca??ej Polsce."
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container id={TestId.Features.Features}>
      <ThreeColumnContainer id={TestId.Features.FeaturesContainer}>
        {subheading && <Subheading id={TestId.Features.Subheader}>{subheading}</Subheading>}
        <Heading id={TestId.Features.Header}>{heading}</Heading>
        {description && <Description id={TestId.Features.Description}>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card id={TestId.Features.Card}>
              <span id={TestId.Features.CardImageContainer} className="imageContainer">
                <img id={TestId.Features.CardImage} src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span id={TestId.Features.CardTextContainer} className="textContainer">
                <span id={TestId.Features.CardTextTitle} className="title">{card.title || "Fully Secure"}</span>
                <p id={TestId.Features.CardTextDescription} className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
