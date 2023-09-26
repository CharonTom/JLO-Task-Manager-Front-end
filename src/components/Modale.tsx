interface ModaleProps {
  message: string;
  onClose: () => void;
}

function Modale({ message, onClose }: ModaleProps) {
  return (
    <div className="bg-skin-variant fixed top-0 left-0 w-screen h-screen flex items-center justify-center ">
      <div className="p-5 p-2 rounded-md bg-skin-fill flex flex-col shadow-lg">
        <p className="">{message}</p>
        <button
          className="btn-blue w-fit mx-auto mt-4 py-2 px-4 "
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Modale;
