import { useState, useEffect } from "react";

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
