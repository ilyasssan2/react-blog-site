import React from "react";
import Blog from "../components/ProjectsBlog";
import Partners from "../components/Partners";
import Services from "../components/Services";
import SliderHome from "../components/SliderHome";
import Team from "../components/Team";
import Video from "../components/Video";
function Home() {
  document.title = "Home";
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
