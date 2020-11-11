import React from "react";
import Blog from "../components/Blog";
import Partners from "../components/Partners";
import Services from "../components/Services";
import SliderHome from "../components/SliderHome";
import Team from "../components/Team";
import Video from "../components/Video";
function Home() {
  return (
    <>
      <SliderHome />
      <Services />
      <Video />
      <Team />
      <Blog />
      <Partners />
    </>
  );
}

export default Home;
