import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <img className="h-20 w-30 mr-2 " src={logo} alt="Logo" />
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        DAO empowering{" "}
        <span className="bg-gradient-to-r from-violet-400 to-violet-800 text-transparent bg-clip-text">
          Ethereum community with transparent decision-making
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Stake, rank, and decide proposals with our intuitive UI.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-violet-400 to-violet-800 py-3 px-4 mx-3 rounded-md"
        >
          User Agreement
        </a>
      </div>
      {/* <div className="flex mt-10 justify-center">
        <div className="relative w-1/2 mx-2 my-4 animate-[fromLeft_0.5s_ease-out]">
          <div className="rounded-lg border border-violet-700 shadow-sm shadow-violet-400 p-4">
            <p className="text-lg text-center text-neutral-500">
              This is the first text section.
            </p>
          </div>
        </div>
        <div className="relative w-1/2 mx-2 my-4 animate-[fromLeft_0.5s_ease-out_0.2s]">
          <div className="rounded-lg border border-violet-700 shadow-sm shadow-violet-400 p-4">
            <p className="text-lg text-center text-neutral-500">
              This is the second text section.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;