import { Fragment, useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../ui/theme";
import { GlobalStyles } from "../ui/global";

import { motion } from "framer-motion";

import Meta from "../Meta";
import MainNavigation from "./main-nav";
import ParticlesBackground from "../ui/particles/ParticlesBackground";

function Layout(props) {
  const { children } = props;
  const [theme, setTheme] = useState("light");
  const [visible, setVisible] = useState(false);
  
  const [height, setHeight] = useState("100%");

  useEffect(() => {
    const handleResize = (e) => {
      setHeight(window.document.body.scrollHeight);
      setVisible(true);
    };

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      handleResize();
    }, 500);
    // cleanup this component
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
            }}
          >
            <ParticlesBackground height={height} />
          </motion.div>
        ) }

        <MainNavigation toggleTheme={toggleTheme} theme={theme} />
        <main>{children}</main>
      </ThemeProvider>
    </Fragment>
  );
}

export default Layout;
