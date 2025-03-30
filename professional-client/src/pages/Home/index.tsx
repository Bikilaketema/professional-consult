import { lazy } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import IntroContent from "../../content/IntroContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { hero } from "../../assets"; // Adjust the path to the correct location of the hero asset

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const AboutBlock = lazy(() => import("../../components/AboutBlock"));
const ServicesBlock = lazy(() => import("../../components/ServicesBlock"));

const Home = () => {
  interface LocationState {
    scrollToId?: string;
  }

  const location = useLocation<LocationState>();

  useEffect(() => {
    if (location.state && location.state.scrollToId) {
      const element = document.getElementById(location.state.scrollToId) as HTMLDivElement;
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon={hero}
        id="intro"
      />

      <AboutBlock
        id="about" />

      <ServicesBlock
        id="services" />

      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
