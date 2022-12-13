import { useState, useEffect } from "react";

import Transition from "../components/ui/transition";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Loader from "../components/ui/loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);

    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.147.0/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <>
      {loading ? (
        <Transition>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Transition>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
