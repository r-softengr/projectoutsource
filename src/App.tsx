function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="flex h-[3rem] w-full items-center justify-center border border-x-0 indent-5">
        <span className="w-full text-3xl font-bold text-primary">
          PROJECT: VA
        </span>
      </div>
      {/* Main */}
      <div className="flex h-full w-full flex-col items-center justify-center gap-20 p-10">
        <span className="w-full text-balance text-center text-5xl font-bold text-secondary">
          We'll handle the tasks,{" "}
          <span className="text-primary">you focus on what matters.</span>
        </span>
      </div>
      {/* Cards */}
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex w-full items-center justify-center text-balance px-5">
          <span className="text-5xl font-bold text-secondary">
            Choose from a wide variety of{" "}
            <span className="text-primary">VA that suit your needs.</span>
          </span>
        </div>
        <div className="mb-10 flex h-auto w-full flex-col items-center justify-center gap-10 px-5 md:flex-row">
          <div className="text-customBlack group flex h-[20rem] w-full sm:w-[20rem] flex-col rounded-md border p-5 transition-all delay-150 border-primary shadow-lg">
            <div className="flex h-[20rem] w-full flex-col items-center justify-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-10 w-10 text-primary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>
            </div>
            <div className="flex h-full w-full flex-col gap-4 text-center">
              <span className="text-center text-xl font-bold text-primary">
                Property Management
              </span>
              <span className="font-semibold">
                Maximizing your property's potential, one detail at a time.
              </span>
            </div>
          </div>
          <div className="text-customBlack group flex h-[20rem] w-full sm:w-[20rem] flex-col rounded-md border p-5 transition-all delay-150 border-primary shadow-lg">
            <div className="flex h-[20rem] w-full flex-col items-center justify-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-10 w-10 text-primary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            </div>
            <div className="flex h-full w-full flex-col gap-4 text-center">
              <span className="text-center text-2xl font-bold text-primary">
                Bookkeeping
              </span>
              <span className="font-semibold">
                Unleash the power of your numbers.
              </span>
            </div>
          </div>
          <div className="text-customBlack group flex h-[20rem] w-full sm:w-[20rem] flex-col rounded-md border p-5 transition-all delay-150 border-primary shadow-lg">
            <div className="flex h-[20rem] w-full flex-col items-center justify-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-10 w-10 text-primary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                />
              </svg>
            </div>
            <div className="flex h-full w-full flex-col gap-4 text-center">
              <span className="text-center text-2xl font-bold text-primary">
                Graphic Design
              </span>
              <span className="font-semibold">
                We don't just design, we solve problems with creativity.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-24 w-full items-center justify-center">
        <div className="cursor-pointer h-14 w-40 flex items-center rounded-full justify-center bg-primary/80 hover:bg-primary text-lg font-bold text-white">
          Hire your VA
        </div>
      </div>
      {/* Feedback */}
      <div className="my-10 flex h-32 w-full items-center justify-center px-5 mt-20">
        <span className="text-5xl font-bold text-secondary">
          More Than Reviews:{" "}
          <span className="text-5xl font-bold text-primary">
            A Conversation That Powers Progress.
          </span>
        </span>
      </div>
      <div className="grid grid-flow-dense grid-cols-1 gap-10 p-10 leading-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            blanditiis consequuntur aperiam. Mollitia optio quae illum officiis?
            Necessitatibus cupiditate distinctio non nisi aspernatur nihil,
            animi, velit ullam voluptatibus error quidem?"
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet
            voluptate doloribus cum reprehenderit quibusdam distinctio sunt
            architecto nisi praesentium laboriosam qui voluptatem nam neque
            magni voluptas eaque, repellendus pariatur.
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor
            quasi ipsa odio voluptatem incidunt culpa distinctio officia
            quisquam obcaecati dolorum ullam nihil, porro reiciendis possimus
            iure recusandae, magnam quod."
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ducimus nesciunt rem voluptates vero quam voluptas doloremque
            provident obcaecati dolorum, commodi iste excepturi sunt assumenda
            quo. Aut nisi totam quidem?
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            blanditiis consequuntur aperiam. Mollitia optio quae illum officiis?
            Necessitatibus cupiditate distinctio non nisi aspernatur nihil,
            animi, velit ullam voluptatibus error quidem?"
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet
            voluptate doloribus cum reprehenderit quibusdam distinctio sunt
            architecto nisi praesentium laboriosam qui voluptatem nam neque
            magni voluptas eaque, repellendus pariatur.
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor
            quasi ipsa odio voluptatem incidunt culpa distinctio officia
            quisquam obcaecati dolorum ullam nihil, porro reiciendis possimus
            iure recusandae, magnam quod."
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ducimus nesciunt rem voluptates vero quam voluptas doloremque
            provident obcaecati dolorum, commodi iste excepturi sunt assumenda
            quo. Aut nisi totam quidem?
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            blanditiis consequuntur aperiam. Mollitia optio quae illum officiis?
            Necessitatibus cupiditate distinctio non nisi aspernatur nihil,
            animi, velit ullam voluptatibus error quidem?"
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet
            voluptate doloribus cum reprehenderit quibusdam distinctio sunt
            architecto nisi praesentium laboriosam qui voluptatem nam neque
            magni voluptas eaque, repellendus pariatur.
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor
            quasi ipsa odio voluptatem incidunt culpa distinctio officia
            quisquam obcaecati dolorum ullam nihil, porro reiciendis possimus
            iure recusandae, magnam quod."
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ducimus nesciunt rem voluptates vero quam voluptas doloremque
            provident obcaecati dolorum, commodi iste excepturi sunt assumenda
            quo. Aut nisi totam quidem?
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            blanditiis consequuntur aperiam. Mollitia optio quae illum officiis?
            Necessitatibus cupiditate distinctio non nisi aspernatur nihil,
            animi, velit ullam voluptatibus error quidem?"
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet
            voluptate doloribus cum reprehenderit quibusdam distinctio sunt
            architecto nisi praesentium laboriosam qui voluptatem nam neque
            magni voluptas eaque, repellendus pariatur.
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor
            quasi ipsa odio voluptatem incidunt culpa distinctio officia
            quisquam obcaecati dolorum ullam nihil, porro reiciendis possimus
            iure recusandae, magnam quod."
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-balance rounded-md border p-3 text-center font-semibold shadow-sm transition-all hover:shadow-xl">
          <span className="text-customBlack text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ducimus nesciunt rem voluptates vero quam voluptas doloremque
            provident obcaecati dolorum, commodi iste excepturi sunt assumenda
            quo. Aut nisi totam quidem?
          </span>
          <div className="w-full">
            <span className="text-customBlack/80 text-xs">- @randomUser</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
