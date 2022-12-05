function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  function handleClose(e) {
    if (e.target.id === "wrapper") onClose();
  }

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bottom-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={handleClose}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
