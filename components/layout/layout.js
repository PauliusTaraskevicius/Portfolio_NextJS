import { Fragment } from "react";
import Meta from "../Meta";
import MainNavigation from "./main-nav";
import Banner from "../ui/banner";
import Services from "../ui/services";
import Skills from "../ui/skills";
import Footer from "./footer";

function Layout(props) {
  const { children } = props;
  return (
    <Fragment>
      <Meta />
      <Banner />
      <MainNavigation />
      <Services />
      <Skills />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
