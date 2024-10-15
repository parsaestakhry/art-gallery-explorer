import image from '@/public/images/marishka-tsiklauri-xIkqIhBPlV4-unsplash.jpg'

export const HomePageHero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-slate-200 ">
            Welcome to the show!
          </h1>
          <p className="mb-5 text-xl font-semibold text-slate-300 ">
            Visit the unique collection of our artworks powered by the institue
            of chicago's api.
            <p className="mt-2 text-lg">Click on the button to learn more !</p>
          </p>
          <button className="btn bg-[#caccd5] border-none text-slate-700 ">Learn more</button>
        </div>
      </div>
    </div>
  );
};
