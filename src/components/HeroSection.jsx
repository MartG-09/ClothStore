import heroImg from "../assets/b26fea69ccfd8aa5825862cdb9604a4fb4930464.jpg";

function HeroSection() {
  return (
    <section className="bg-[#F2F0F1]">
      <div className="mx-auto grid max-w-7xl items-center px-6 py-8 md:py-12 lg:grid-cols-2">
        <div className="z-10 flex flex-col items-start justify-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="mt-6 text-sm text-gray-600 sm:text-base max-w-md">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>

          <button 
            onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}
            className="mt-8 w-full sm:w-auto rounded-full bg-black px-16 py-4 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Shop Now
          </button>

          <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-12">
            <div>
              <p className="text-2xl sm:text-4xl font-bold">200+</p>
              <p className="text-xs sm:text-sm text-gray-600">International Brands</p>
            </div>
            <div className="h-10 w-[1px] bg-gray-300"></div>
            <div>
              <p className="text-2xl sm:text-4xl font-bold">2,000+</p>
              <p className="text-xs sm:text-sm text-gray-600">High-Quality Products</p>
            </div>
            <div className="h-10 w-[1px] bg-gray-300 hidden sm:block"></div>
            <div className="w-full sm:w-auto">
              <p className="text-2xl sm:text-4xl font-bold">30,000+</p>
              <p className="text-xs sm:text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0 flex justify-center items-center">
          <img
            src={heroImg}
            alt="Fashion collection black and white couple"
            className="w-full object-contain max-h-[550px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;