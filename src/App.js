import "./App.css";
import blackI from "./rectangle.png";
import exo from "./assetes/exo.png";
import petals from "./assetes/petals.png";
import Signin from "./Signin";

function App() {
  return (
    <div className=" bg-[#FFFFFF] h-[100vh] flex">
      <div className="container m-auto h-[80vh] items-center bg-[#FFFFFF] rounded-md shadow-md">
        <div className="lg: grid grid-cols-2 gap-5 items-center">
          <div className="h-[80vh p-4]">
            <div className="relative ml-4 h-full ">
              <div className="absolute top-[25%] left-[10%] flex flex-col">
                <div>
                  <img src={exo} className=" h-[30px] w-[50px]  " />
                </div>
                <h1
                  className="text-4xl text-white font-bold my-4
                "
                >
                  100% Uptime 😎
                </h1>
                <p className="taxt-base text-white font-poppins">
                  Zero Infrastructure <p>Management</p>
                </p>
              </div>
              
              <img src={blackI} alt="show info" className="" />
              
            </div>

          </div>
          <div className="text-center">
            <img className=" w-14 m-auto" src={petals} alt="patels" />

            <h1 className="  text-black text-[32px] font-bold ">
              Welcome <span className="text-[#08A593]">Back!</span>
            </h1>
            <p className="text-[#667085]">Glad to see you again</p>
            <div className="px-[200px]">
              <form>
                <div class="mb-6">
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    require
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5"></div>
                </div>
                <button
                  type="submit"
                  class="bg-black border  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  Log In
                </button>
                <p className="text-[#667085]">
                  Don't Have Any Account?{" "}
                  <span className="text-[#08A593]">
                    <a href={<Signin />}> Sign In</a>
                  </span>{" "}
                </p>
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
