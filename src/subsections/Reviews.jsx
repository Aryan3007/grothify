const Reviews = () => {
  const hoverVideo = (e) => {
    e.currentTarget.querySelector("video").play();
  };

  const hideVideo = (e) => {
    e.currentTarget.querySelector("video").pause();
  };

  return (
    <div
      id="featuredwork"
      className="relative my-24 px-24 p-4 flex min-h-screen flex-col "
    >
      <div className="min-h-28">
        <div className="mx-auto py-4">
          <h1 className="text-center text-5xl font-semibold">
            Video Reviews From Clients
          </h1>
          <div className="gap-6 mt-8 mx-4 md:flex">
            <div className="md:w-1/2 z-10 relative">
              <div
                className="wrap-video"
                onMouseEnter={hoverVideo}
                onMouseLeave={hideVideo}
              >
                <video className="object-cover h-96 w-full bg-black" loop>
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span className="pt-4 grid grid-cols-6 gap-4">
                <span className="col-start-1 col-end-3 font-bold text-lg text-black uppercase font-mono">
                  bodega x new balance
                </span>
                <span className="col-end-7 col-span-2 text-sm text-slate-800 uppercase font-mono flex justify-end">
                  <span className="">fashion/retail</span>
                </span>
              </span>
              <span className="block text-slate-700 text-xs uppercase font-mono">
                the trail less taken
              </span>
            </div>
            <div className="md:w-1/2 z-10 relative">
              <div
                className="wrap-video"
                onMouseEnter={hoverVideo}
                onMouseLeave={hideVideo}
              >
                <video className="object-cover h-96 w-full bg-black" loop>
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span className="pt-4 grid grid-cols-6 gap-4">
                <span className="col-start-1 col-end-3 font-bold text-lg text-black uppercase font-mono">
                  bodega x new balance
                </span>
                <span className="col-end-7 col-span-2 text-sm text-slate-800 uppercase font-mono flex justify-end">
                  <span className="">fashion/retail</span>
                </span>
              </span>
              <span className="block text-slate-700 text-xs uppercase font-mono">
                the trail less taken
              </span>
            </div>
          </div>
          <div className="gap-6 mt-8 mx-4 md:flex">
            <div className="md:w-1/2 z-10 relative">
              <div
                className="wrap-video"
                onMouseEnter={hoverVideo}
                onMouseLeave={hideVideo}
              >
                <video className="object-cover h-96 w-full bg-black" loop>
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span className="pt-4 grid grid-cols-6 gap-4">
                <span className="col-start-1 col-end-3 font-bold text-lg text-black uppercase font-mono">
                  bodega x new balance
                </span>
                <span className="col-end-7 col-span-2 text-sm text-slate-800 uppercase font-mono flex justify-end">
                  <span className="">fashion/retail</span>
                </span>
              </span>
              <span className="block text-slate-700 text-xs uppercase font-mono">
                the trail less taken
              </span>
            </div>
            <div className="md:w-1/2 z-10 relative">
              <div
                className="wrap-video"
                onMouseEnter={hoverVideo}
                onMouseLeave={hideVideo}
              >
                <video className="object-cover h-96 w-full bg-black" loop>
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span className="pt-4 grid grid-cols-6 gap-4">
                <span className="col-start-1 col-end-3 font-bold text-lg text-black uppercase font-mono">
                  bodega x new balance
                </span>
                <span className="col-end-7 col-span-2 text-sm text-slate-800 uppercase font-mono flex justify-end">
                  <span className="">fashion/retail</span>
                </span>
              </span>
              <span className="block text-slate-700 text-xs uppercase font-mono">
                the trail less taken
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
