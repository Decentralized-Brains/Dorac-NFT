import React from "react";
import mainDog from "../assets/dashboard/Polygon12.png";
import ploy from "../assets/dashboard/Polygon11.png";

const Dashboard = () => {
  return (
    <section id="about-me">
      <div className="h-[150px]"></div>
      <div className="flex flex-col lg:flex-row mx-2 md:mx-0">
        <div className="basis-1/2">
          <div className="flex items-center justify-center">
            <img
              src={ploy}
              className="h-96 w-96 relative blur-3xl"
              alt=""
            ></img>
            <img
              src={ploy}
              className="h-96 w-96 absolute blur-3xl"
              alt=""
            ></img>
            <img src={ploy} className="h-96 w-96 absolute" alt=""></img>
            <img src={ploy} className="h-96 w-96 absolute" alt=""></img>
            <img
              src={mainDog}
              className="h-96 w-96 absolute p-3"
              alt="dorac-dog"
            ></img>
          </div>
          <div className="flex items-center justify-center pt-14">
            <div className="border-2 border-purple px-16 md:px-28">
              <h1 className="text-base sm:text-2xl text-cyan-500 font-medium">
                #1060951 Alf Murazik{" "}
              </h1>
              <p className="text-center text-gray-100">Bloodline• Female</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 pt-5 pl-0 lg:pl-8 md:pt-0">
          <div className="flex items-center justify-center lg:items-start lg:justify-start pt-6 lg:pt-0 ">
            <div className="grid grid-cols-4 gap-4 lg:gap-y-4 lg:gap-x-4">
              <div className="w-full">
                <button className="special">
                  <div className="button-content min-w-[50px] md:min-w-full ">
                    <span className="text-white text-sm font-bold">Luck</span>
                    <span className="text-yellow text-sm font-bold leading-3">
                      8
                    </span>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button className="special">
                  <div className="button-content min-w-[50px] md:min-w-full">
                    <span className="text-white text-sm font-bold">
                      Agility
                    </span>
                    <span className="text-yellow text-sm font-bold leading-3">
                      8
                    </span>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button className="special">
                  <div className="button-content min-w-[50px] md:min-w-full">
                    <span className="text-white text-sm font-bold">
                      Strength
                    </span>
                    <span className="text-yellow text-sm font-bold leading-3">
                      8
                    </span>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button className="special">
                  <div className="button-content  min-w-[50px] md:min-w-full">
                    <span className="text-white text-sm font-bold">Power</span>
                    <span className="text-yellow text-sm font-bold leading-3">
                      8
                    </span>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button className="special">
                  <div className="button-content  min-w-[50px] md:min-w-full">
                    <span className="text-white text-sm font-bold">Health</span>
                    <span className="text-yellow text-sm font-bold leading-3">
                      8
                    </span>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button className="special">
                  <div className="button-content  min-w-[50px] md:min-w-full">
                    <span className="text-white text-sm font-bold">
                      Stamina
                    </span>
                    <span className="text-yellow text-sm font-bold leading-3">
                      8
                    </span>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button className="special">
                  <div className="button-content  min-w-[50px] md:min-w-full">
                    <span className="text-white text-sm font-bold">
                      Endurance
                    </span>
                    <span className="text-yellow text-sm font-bold leading-3">
                      8
                    </span>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button className="special">
                  <div className="button-content  min-w-[50px] md:min-w-full">
                    <span className="text-white text-sm font-bold">Weight</span>
                    <span className="text-yellow text-sm font-bold leading-3">
                      8
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:items-start lg:justify-start gap-4 pt-6 lg:pt-6 ">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2  lg:gap-x-4 lg:gap-y-2">
              <div className="center-div">
                <button className="special">
                  <div className="button-content min-w-[50px] md:min-w-full">
                    <div className="flex flex-rows gap-14 sm:gap-24 lg:gap-[6.3rem]">
                      <div className="text-start text-white text-sm font-bold">
                        Toughness
                      </div>
                      <div className="text-end text-yellow text-sm font-bold">
                        8
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="center-div">
                <button className="special ">
                  <div className="button-content min-w-[50px] md:min-w-full">
                    <div className="flex flex-rows gap-14 sm:gap-24 lg:gap-[6.3rem]">
                      <div className="text-start text-white text-sm font-bold">
                        Swiftness
                      </div>
                      <div className="text-end text-yellow text-sm font-bold">
                        8
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:items-start lg:justify-start gap-4 pt-6 lg:pt-6">
            <div>
              <h1 className="text-xl text-cyan-500 font-bold">BREED COUNT</h1>
              <p className="leading-3 text-sm text-white font-light">NA/7</p>
            </div>
            <div>
              <h1 className="text-xl text-cyan-500 font-bold">WIN</h1>
              <p className="leading-3 text-sm text-white font-light">52.8%</p>
            </div>
            <div>
              <h1 className="text-xl text-cyan-500 font-bold">CAREER</h1>
              <p className="leading-3 text-sm text-white font-light">
                322/150/472
              </p>
            </div>
            <div>
              <h1 className="text-xl text-cyan-500 font-bold">Tier</h1>
              <p className="leading-3 text-xs text-white font-light border border-cyan-500 text-center rounded">
                1/2/3
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:items-start lg:justify-start gap-4 pt-6 lg:pt-8">
            <button className="rounded-full bg-btncyan px-8 py-1 text-black text-sm sm:text-base font-normal">
              Renting History
            </button>
            <button className="rounded-full bg-btncyan px-8 py-1 text-white text-sm sm:text-base bg-opacity-25 font-normal">
              Racing History
            </button>
          </div>

          <div className="hidden sm:flex flex-auto items-center justify-center lg:items-start lg:justify-start pt-6 lg:pt-3">
            <table className="table min-w-[550px]">
              <thead className="border-b text-center border-cyan">
                <tr>
                  <th className=" text-white font-normal text-base">OWNER</th>
                  <th className=" text-white font-normal text-base">Renter</th>
                  <th className=" text-white font-normal text-base">
                    Rent Mode
                  </th>
                  <th className=" text-white font-normal text-base">Date</th>
                  <th className=" text-white font-normal text-base">
                    Fee/Reward
                  </th>
                  <th className=" text-white font-normal text-base">
                    Rent Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-ofwhite text-center text-xs border-b border-purple">
                  <td className="py-2 text-gray-200">0xfbB0e...48E1c </td>
                  <td className="py-2 text-gray-200">0xfbB0e...48E1c</td>
                  <td className="py-2 text-gray-200">profit split</td>
                  <td className="py-2 text-gray-200">26/09/2022</td>
                  <td className="py-2 text-gray-200">1/1</td>
                  <td className="py-2 text-gray-200">--</td>
                </tr>
                <tr className="text-ofwhite text-center text-xs border-b border-purple">
                  <td className="py-2 text-gray-200">0xfbB0e...48E1c</td>
                  <td className="py-2 text-gray-200">0xfbB0e...48E1c</td>
                  <td className="py-2 text-gray-200">profit split</td>
                  <td className="py-2 text-gray-200">26/09/2022</td>
                  <td className="py-2 text-gray-200">1/1</td>
                  <td className="py-2 text-gray-200">--</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="sm:hidden flex flex-auto items-center justify-center lg:items-start lg:justify-start pt-6 lg:pt-3">
            <table className="table-auto w-96">
              <thead className="border-b border-cyan">
                <tr>
                  <th className="text-center text-white font-normal text-base">
                    OWNER
                  </th>
                  <th className="text-center text-white font-normal text-base">
                    Renter
                  </th>
                  <th className="text-center text-white font-normal text-base">
                    Rent Mode
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-ofwhite text-xs border-b text-center border-purple flex-auto">
                  <td className="pr-5 py-2 ">0xfbB0e...48E1c </td>
                  <td className="pr-5 py-2">0xfbB0e...48E1c</td>
                  <td className="pr-5 py-2">profit split</td>
                </tr>
                <tr className="text-ofwhite text-xs text-center border-b border-purple">
                  <td className="pr-5 py-2">0xfbB0e...48E1c</td>
                  <td className="pr-5 py-2">0xfbB0e...48E1c</td>
                  <td className="pr-5 py-2">profit split</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="sm:hidden flex flex-auto items-center justify-center lg:items-start lg:justify-start pt-6 lg:pt-3">
            <table className="table-auto w-96">
              <thead className="border-b border-cyan ">
                <tr>
                  <th className="text-center text-white font-normal text-base ">
                    Date
                  </th>
                  <th className="text-center text-white font-normal text-base">
                    Fee/Reward
                  </th>
                  <th className="text-center text-white font-normal text-base">
                    Rent Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-ofwhite text-center text-xs border-b border-purple flex-auto">
                  <td className="pr-5 py-2">26/09/2022</td>
                  <td className="pr-5 py-2">1/1</td>
                  <td className="pr-5 py-2">--</td>
                </tr>
                <tr className="text-ofwhite text-xs text-center border-b border-purple">
                  <td className="pr-5 py-2">26/09/2022</td>
                  <td className="pr-5 py-2">1/1</td>
                  <td className="pr-5 py-2">--</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-center lg:items-start lg:justify-start pt-6 lg:pt-10 ">
            <div className="border-2 border-purple  rounded-lg flex gap-4 lg:gap-32 px-4">
              <div className="flex flex-col justify-center text-center ">
                <span className="text-sm text-white">Price</span>
                <span className="text-base text-cyan-500 font-bold leading-3">
                  56 BUSD
                </span>
              </div>
              <div className="flex flex-col justify-center text-center">
                <span className="text-sm text-white">Rent Time</span>
                <span className="text-base text-cyan-500 font-bold leading-3">
                  1 day(s)
                </span>
              </div>
              <button className="rounded-full bg-purple mx-3 px-5 py-1 my-3 text-white text-xs sm:text-sm ">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
