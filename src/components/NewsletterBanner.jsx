function NewsletterBanner() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to the SHOP.CO newsletter!");
  };

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 mb-16">
      <form 
        onSubmit={handleSubscribe}
        className="rounded-2xl bg-black px-8 py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase max-w-xl leading-tight">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col w-full md:w-auto gap-3">
          <div className="flex items-center rounded-full bg-white px-4 py-3 w-full md:w-80">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full text-sm text-black outline-none bg-transparent"
            />
          </div>
          <button 
            type="submit"
            className="w-full rounded-full bg-white py-3 text-sm font-medium text-black hover:bg-gray-100 transition"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterBanner;