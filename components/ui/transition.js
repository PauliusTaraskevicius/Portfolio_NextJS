import { motion } from "framer-motion";

function Transition(props) {
  const { children } = props;

  return (
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
      transition={{ duration: 1 }}
    >
      {children}
    </motion.main>
  );
}

export default Transition;
