function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto flex flex-col bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="h-fit md:h-1/2 my-10 flex md:flex-col flex-col justify-center items-center gap-0 w-full">
        <h1 className="font-sans font-semibold text-5xl md:text-8xl text-[#2b323f]">
          PROJECT: VA;
        </h1>
        <h2 className="font-sans font-semibold text-xs md:text-xl text-[#2b323f]">
          Simplifying Life, Maximizing Productivity.
        </h2>
      </div>
      <div className="text-gray-400 h-fit md:h-1/2 flex flex-col md:flex-row gap-4 font-sans px-5 justify-center mb-5">
        <div className="hover:scale-125 animate duration-500 h-[300px] w-full md:w-1/4 rounded-md shadow-xl bg-cover bg-[url('https://images.unsplash.com/photo-1606836559739-7b1d9fbf8a6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="rounded-md h-full flex justify-center flex-col items-center backdrop-blur-sm bg-[#2b323f]/80">
            <div className="text-center text-xl md:text-3xl w-full text-white font-sans font-semibold">
              PROJECT MANAGEMENT
            </div>
            <div className="indent-5 px-5 text-xs md:hidden font-sans">
              As a Property Management Assistant, you play a vital role in
              supporting the efficient functioning of property management
              operations. Your responsibilities include assisting in tenant
              communications, coordinating property maintenance tasks, and
              ensuring accurate and up-to-date documentation. You'll collaborate
              with Property Managers to facilitate lease agreements, track rent
              payments, and address tenant inquiries. Attention to detail,
              strong organizational skills, and effective communication are
              essential in this role. Additionally, you may be involved in
              financial tasks such as budgeting and expense tracking. Your
              contribution as a Property Management Assistant contributes to the
              overall success of property management by ensuring smooth
              day-to-day operations and tenant satisfaction.
            </div>
          </div>
        </div>
        <div className="md:hover:scale-125 animate duration-500 h-[300px] w-full md:w-1/4 rounded-md shadow-xl bg-cover bg-[url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="rounded-md h-full flex justify-center flex-col items-center backdrop-blur-sm bg-[#2b323f]/80">
            <div className="text-center text-xl md:text-3xl w-full text-white font-sans font-semibold ">
              BOOK KEEPING
            </div>
            <div className="indent-5 px-5 text-xs md:hidden font-sans">
              As a Bookkeeping Assistant, you play a key role in supporting the
              financial health of an organization by assisting in the
              maintenance of accurate and up-to-date financial records. Your
              responsibilities include data entry, reconciling accounts, and
              categorizing transactions. You collaborate closely with the
              accounting team to ensure compliance with financial regulations
              and timely reporting. Attention to detail, proficiency in
              accounting software, and a basic understanding of financial
              principles are crucial for success in this role. Your contribution
              as a Bookkeeping Assistant helps ensure the organization's
              financial transactions are recorded systematically, providing a
              foundation for informed financial decision-making.
            </div>
          </div>
        </div>
        <div className="md:hover:scale-125 animate duration-500 h-[300px] w-full md:w-1/4 rounded-md shadow-xl bg-cover bg-[url('https://images.unsplash.com/photo-1608699565448-9492aaf3c708?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="rounded-md h-full flex justify-center flex-col items-center backdrop-blur-sm bg-[#2b323f]/80">
            <div className="text-center text-xl md:text-3xl w-full text-white font-sans font-semibold ">
              GRAPHIC DESIGN
            </div>
            <div className="indent-5 px-5 text-xs md:hidden font-sans">
              As a Graphic Design Assistant, you contribute to the creative and
              visual aspects of projects by providing essential support to the
              graphic design team. Your responsibilities include assisting in
              the design process, creating and editing visual content, and
              ensuring brand consistency. You may collaborate on various design
              projects, ranging from digital and print materials to social media
              graphics. Proficiency in graphic design software, a keen eye for
              detail, and a basic understanding of design principles are
              essential for success in this role. Your role as a Graphic Design
              Assistant is integral to maintaining high-quality visual standards
              and contributing to the overall success of creative projects.
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-auto py-5 text-white text-center font-semibold font-sans text-lg backdrop-blur-sm bg-[#2b323f]/80">
        <div>
          <div>Wanna hire a VA?</div>
          <div>Send us an email at loremimpusm@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default App;
