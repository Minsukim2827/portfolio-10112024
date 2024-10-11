
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;


  const handleOverlayClick = () => {
    onClose();
  };
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
      onClick={handleOverlayClick} 
    >
      <div
        className="bg-black rounded-lg overflow-hidden shadow-lg max-w-3xl w-full sm:w-11/12 md:w-3/4 lg:w-1/2 relative"
        onClick={handleContentClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-white hover:text-red-500"
          aria-label="Close Modal"
        >
          &#10005;
        </button>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
