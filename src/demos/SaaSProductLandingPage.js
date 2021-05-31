import React from "react";
import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
//import MainFeature from "components/features/TwoColWithButton.js";
//import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/not-used/pricing/ThreePlans.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/not-used/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
// import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
// import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
// import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
// import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
// import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Zaparkowani</Subheading>}
        heading={
          <>
            Jedyny taki produkt w <HighlightedText>Polsce</HighlightedText>.
          </>
        }
      />
      <FeatureWithSteps/>
      {/* <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      /> */}
      {/* <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$17.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
          },
          {
            name: "Business",
            price: "$37.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["60 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["90 Templates", "27 Landing Pages", "37 Internal Pages", "Personal Assistance"]
          }
        ]}
      />
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      /> */}
      <FAQ
        subheading={<Subheading>FAQs</Subheading>}
        heading={
          <>
            Czy masz jakieś <HighlightedText>pytania</HighlightedText>?
          </>
        }
        faqs={[
          {
            question: "W jakich miastach produkt będzie dostępny?",
            answer:
            "Na początku planujemy uruchomienie produktu w każdym dużym mieście wojewódzkim. Następnym krokiem będzie wprowadzenie produktu do reszty miast - tak by był dostępny w całej Polsce."
          },
          {
            question: "Dla kogo jest ten produkt?",
            answer:
            "Produkt jest skierowany do osób, które posiadają miejsca parkingowe i chciałby je wynająć, a także do osób, które szukają miejsca parkingowego do wynajęcia krótko bądź długo terminowo"
          },
          {
            question: "W jaki sposób będę mógł wynająć miejsce parkingowego?",
            answer:
            "Jeśli wyrazisz chęć wynajęcia danego miejsca parkingowego - wyślemy powiadomienie do właściciela, następnie pozostaje uiścić opłatę za postój na tym miejscu."
          },
          {
            question: "Czy będę miał dostęp do statystyk mojego miejsca parkingowego?",
            answer:
            "Tak, będziemy przygotowywać specjalny panel, w którym będzie można śledzić statystyki dla konkretnego miejsca parkingowego np. ile osób parkowało, ile dane miejsce przyniosło przychodu itd."
          },
          {
            question: "W jaki sposób zostanę poinformowany o osobie zainteresowanej wynajęciem mojego miejsca parkingowego?",
            answer:
            "Będziemy informować o zainteresowaniu Twoim miejscem drogą mailową, SMSową i notyfikacjami w aplikacji."
          },
          {
            question: "Czy produkt będzie płatny? Jeśli tak, to jakie metody płatności będą dostępne?",
            answer:
            "Pierwsze trzy miesiące korzystania będą darmowe. Następnie planujemy wprowadzić subskrypcje, za którą będzie można zapłacić kartą kredytową, blikiem bądź przelewem bankowym."
          }
        ]}
      />
      {/*<GetStarted/>*/}
      {/*<Pricing/>*/}
      <Footer />
    </AnimationRevealPage>
  );
}
