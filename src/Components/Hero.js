
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "../Components/components/wraper";
import Title from "../Components/components/Title";
import Subtitle from "../Components/components/Subtitle";

const bogliasco = "https://www.niftyinterio.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-23-at-19.05.13.jpeg";
const countyClare = "https://www.niftyinterio.com/wp-content/uploads/2020/10/10..jpg";
const craterRock = "https://www.niftyinterio.com/wp-content/uploads/2021/07/Nift-Image-website-9.jpg";
const giauPass = "https://www.niftyinterio.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-23-at-19.05.11.jpeg";

export default function BasicSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Basic Setup</Title>
          <Subtitle>
            Check out the documentation for more advanced examples.
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
