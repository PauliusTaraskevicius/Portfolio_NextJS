import { Fragment } from "react";
import Meta from "../Meta";
import MainNavigation from "./main-nav";
import Banner from "../ui/banner";
import Services from "../ui/services";
import Skills from "../ui/skills";
import Footer from "./footer";

import ParticlesBackground from "../ui/particles/ParticlesBackground";

function Layout(props) {
  const { children } = props;

  return (
    <Fragment>
      <Meta />
      <ParticlesBackground />
      <MainNavigation />
      {/* <Banner /> */}
      <main>{children}</main>
      {/* <Skills />
      <Services /> */}
      {/* <Footer /> */}
    </Fragment>
  );
}

export default Layout;
