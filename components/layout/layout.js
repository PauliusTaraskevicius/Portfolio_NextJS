import { Fragment } from "react";
import Meta from "../Meta";
import MainNavigation from "./main-nav";
import Banner from "../ui/banner";
import Services from "../ui/services";

function Layout(props) {
  const { children } = props;
  return (
    <Fragment>
      <Meta />
      <Banner />
      <MainNavigation />
      <Services />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
