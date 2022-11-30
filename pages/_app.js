import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Loader from "../components/ui/loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1800);
  }, []);

  return (
    <>
      {loading ? (
        <motion.main
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
          transition={{ duration: 0.5 }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.main>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
