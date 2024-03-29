import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home2 = () => {
  const scrolltoabout = () => {
    const about = document.getElementById("service");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="glassback flex justify-center items-center h-full lg:h-screen :bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex  lg:flex-row-reverse lg:px-12 lg:items-center">
          <img
            className="bg-gradient-to-r from-purple-400  to-purple-600 object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-xl lg:h-[36rem]"
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <h1 className="text-2xl font-semibold text-gray-800    :text-white lg:text-6xl">
              Create Your{" "}
              <span className="text-purple-500">Digital Presence</span> With Us.
            </h1>

            <p className="max-w-lg mt-6 text-gray-500    :text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.
            </p>

            <div className="flex gap-4">
              <button
                onClick={scrolltoabout}
                className="px-4 py-2 lg:text-md text-sm text-white bg-purple-500 my-5 rounded-full"
              >
                Explore Services
              </button>
              <Link to="/message">
                <button className="px-4 py-2 lg:text-md text-sm bg-black text-white my-5 rounded-full">
                  Book a Strategy Call
                </button>
              </Link>
            </div>
            <div className="flex my-2 gap-4 items-center">
              <h1 className=" text-2xl">Previous Work</h1>
              <FaArrowRight className="text-2xl text-white bg-black p-1 rounded-full" />
            </div>
            <div className="h-52 rounded-xl w-full bg-gradient-to-r from-purple-400  to-purple-600">
              <img
                className="object-cover object-center  w-full h-full rounded-xl"
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;
