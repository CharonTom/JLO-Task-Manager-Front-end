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
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-fit mx-auto mt-4"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Modale;
