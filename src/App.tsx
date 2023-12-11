function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto flex gap-4 flex-col bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="h-1/2 flex flex-col justify-center items-center gap-0 w-full">
        <h1 className="font-sans font-semibold text-8xl text-[#2b323f]">
          PROJECT: VA
        </h1>
        <h2 className="font-sans font-semibold text-xl text-[#2b323f]">
          Simplifying Life, Maximizing Productivity.
        </h2>
      </div>
      <div className="h-1/2 flex gap-4 font-sans px-5 justify-center">
        <div className="hover:scale-125 animate duration-500 h-[300px] w-1/4 rounded-md shadow-xl bg-cover bg-[url('https://images.unsplash.com/photo-1606836559739-7b1d9fbf8a6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="rounded-md h-full flex justify-center flex-col items-center backdrop-blur-sm bg-[#2b323f]/80">
            <div className="text-center text-5xl w-full text-white font-sans font-semibold ">
              PROJECT MANAGEMENT
            </div>
          </div>
        </div>
        <div className="hover:scale-125 animate duration-500 h-[300px] w-1/4 rounded-md shadow-xl bg-cover bg-[url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="rounded-md h-full flex justify-center flex-col items-center backdrop-blur-sm bg-[#2b323f]/80">
            <div className="text-center text-5xl w-full text-white font-sans font-semibold ">
              BOOK KEEPING
            </div>
          </div>
        </div>
        <div className="hover:scale-125 animate duration-500 h-[300px] w-1/4 rounded-md shadow-xl bg-cover bg-[url('https://images.unsplash.com/photo-1608699565448-9492aaf3c708?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="rounded-md h-full flex justify-center flex-col items-center backdrop-blur-sm bg-[#2b323f]/80">
            <div className="text-center text-5xl w-full text-white font-sans font-semibold ">
              GRAPHIC DESIGN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
