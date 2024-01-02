interface EmailFormProps {
  toggleModal: (toggle: boolean) => void;
}
export const EmailForm = ({ toggleModal }: EmailFormProps) => {
  const handleMail = () => {
    window.open(
      `mailto:alinsangao.rickryan@gmail.com?subject=${"Requesting for VA"} &body=${"Hehe"}`
    );
  };
  return (
    <div
      className="fixed flex justify-center items-end sm:items-center inset-0 h-screen w-screen bg-black/70 backdrop-blur-sm"
      onClick={() => toggleModal(false)}
    >
      {/* Desktop */}
      <div className="w-full hidden sm:block sm:w-[60vw] md:w-[60vw] lg:w-[50vw] rounded-md bg-white">
        <div className="grid grid-cols-1 p-5 gap-2">
          <div className="relative">
            <input
              id="email"
              className="active:ring-0 outline-none peer h-10 w-full border px-2 font-light placeholder:text-transparent rounded-md shadow-sm"
              type="text"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute peer-placeholder-shown:font-light transition-all peer-placeholder-shown:left-1 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 left-2 -top-2 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent bg-white px-1 font-semibold"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              id="content"
              className="resize-y active:ring-0 outline-none rounded-md peer p-2 h-[40svh] w-full border font-light placeholder:text-transparent shadow-sm"
              placeholder="Subject"
            ></textarea>
            <label
              htmlFor="content"
              className="absolute peer-placeholder-shown:font-light transition-all peer-placeholder-shown:left-1 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 left-2 -top-2 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent bg-white px-1 font-semibold"
            >
              Message
            </label>
          </div>
          <button className="border rounded-md h-10 font-bold bg-secondary text-white">
            Submit
          </button>
        </div>
      </div>
      {/* Mobile */}
      <div className="w-full sm:hidden sm:w-[60vw] md:w-[60vw] lg:w-[30vw] rounded-md bg-white">
        <div className="grid grid-cols-1 p-5 gap-2">
          <div className="relative">
            <input
              id="email"
              className="active:ring-0 outline-none peer h-10 w-full border px-2 font-light placeholder:text-transparent rounded-md shadow-sm"
              type="text"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute peer-placeholder-shown:font-light transition-all peer-placeholder-shown:left-1 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 left-2 -top-2 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent bg-white px-1 font-semibold"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              id="content"
              className="resize-y active:ring-0 outline-none rounded-md peer p-2 h-[40svh] w-full border font-light placeholder:text-transparent shadow-sm"
              placeholder="Subject"
            ></textarea>
            <label
              htmlFor="content"
              className="absolute peer-placeholder-shown:font-light transition-all peer-placeholder-shown:left-1 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 left-2 -top-2 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent bg-white px-1 font-semibold"
            >
              Message
            </label>
          </div>
          <button
            className="border rounded-md h-10 font-bold bg-secondary text-white"
            onClick={handleMail}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
