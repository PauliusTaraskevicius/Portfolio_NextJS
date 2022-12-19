import { Fragment, useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../pages/theme";
import { GlobalStyles } from "../../pages/global";

import Meta from "../Meta";
import MainNavigation from "./main-nav";
import ParticlesBackground from "../ui/particles/ParticlesBackground";

function Layout(props) {
  const { children } = props;
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <Fragment>
      <Meta />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ParticlesBackground />
        <MainNavigation toggleTheme={toggleTheme} theme={theme} />
        <main>{children}</main>
      </ThemeProvider>
    </Fragment>
  );
}

export default Layout;
