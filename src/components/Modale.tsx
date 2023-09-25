interface ModaleProps {
  message: string;
  onClose: () => void;
}

function Modale({ message, onClose }: ModaleProps) {
  return (
    <div>
      <div className="p-5 fixed p-2 rounded-md border bg-white border-black text-secondary border w-fit left-1/2 top-1/2 z-20 flex flex-col transform -translate-x-1/2">
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
