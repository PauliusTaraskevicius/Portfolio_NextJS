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
  }, []);

  return (
    <>
      {loading ? (
        // <Transition>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        // </Transition>
        <Loader />
      )}
    </>
  );
}

export default MyApp;
