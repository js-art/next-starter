import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
const Layout = ({
  Component,
  pageProps,
  router,
  title = "Book best hotels for your holiday",
}) => {
  const [layoutStatus, setLayoutStatus] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (Component.getLayout) {
      setLayoutStatus(true);
    } else {
      setLayoutStatus(false);
    }
  }, []);
  const hasLayout = () => {
    return Component.getLayout(<Component {...pageProps} />);
  };
  const defaultLayout = () => {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <AnimatePresence>
          <motion.div
            key={router.route}
            exit="pageExit"
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                position: "relative",
                opacity: 0,
                scale: 0.9,
                marginBottom: "20px",
              },
              pageAnimate: {
                opacity: 1,
                scale: 1,
                rotate: [0, 3, 0],
                top: 0,
                filter: [
                  "hue-routate(0) contrast(100%)",
                  "hue-routate(80) contrast(150%)",
                  "hue-routate(0) contrast(100%)",
                ],
                transition: {
                  duration: 1,
                },
              },
              pageExit: {
                position: "fixed",
                left: 0,
                right: 0,
                scale: 0,
                opacity: 0,
                transition: {
                  duration: 0.4,
                },
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </>
    );
  };

  if (mounted && layoutStatus) {
    return hasLayout();
  } else if (mounted) {
    return defaultLayout();
  }

  return defaultLayout();
};

export default Layout;
