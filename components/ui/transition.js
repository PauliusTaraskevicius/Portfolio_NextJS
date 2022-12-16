import { motion } from "framer-motion";

function Transition(props) {
  const { children } = props;

  return (
    <motion.main
    className="demo"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 1, type: "spring" }}
    >
      {children}
    </motion.main>
  );
}

export default Transition;
