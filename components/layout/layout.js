import { Fragment } from "react";
import Meta from "../Meta";
import MainNavigation from "./main-nav";
import Footer from "./footer";

function Layout(props) {
  const { children } = props;
  
  return (
    <Fragment>
      <Meta />
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
