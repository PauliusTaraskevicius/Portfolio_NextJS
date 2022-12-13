import { useState, useEffect } from "react";

import { useRouter } from "next/router";

import Transition from "../components/ui/transition";

import Modal from "../components/ui/modal";

function Contact() {
  const [showModal, setShowModal] = useState(false);

//   const router = useRouter();

//   function closeModal() {
//     setShowModal(false);
//     router.push("/");
//   }

//   useEffect(() => {
//     if (post) {
//       setShowModal(true);
//     }
//   }, []);

  return (
    <Transition>
    <Modal isVisible={showModal} onClose={closeModal}>
      <h1>Contact</h1>
    </Modal>
    </Transition>
  );
}

export default Contact;
