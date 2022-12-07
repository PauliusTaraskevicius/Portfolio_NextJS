import { Fragment } from "react";
import Meta from "../Meta";
import MainNavigation from "./main-nav";
import ParticlesBackground from "../ui/particles/ParticlesBackground";
import Footer from "./footer";

function Layout(props) {
  const { children } = props;

  return (
    <Fragment>
      <Meta />
      <MainNavigation />
      <ParticlesBackground>
        <main>{children}</main>
      </ParticlesBackground>
      <Footer />
    </Fragment>
  );
}

export default Layout;
