import { Mail, Plus } from "lucide-react";
import "./App.css";
import CardsMenu from "./components/CardsMenu/CardsMenu";

function App() {
  return (
    <div className=" h-screen bg-[#d8d4de]">
      {/* <div className=" flex justify-between p-4">
        <h1 className=" text-7xl text-slate-400 ">Review Inbox</h1>
        <p className="  text-slate-500">9:41</p>
      </div> */}
      <div className=" relative grid grid-cols-4 place-content-center h-full">
        <div className=" col-span-1 mt-12">
          <ul className=" space-y-1 mt-4 w-[20rem] ">
            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl hover:border hover:border-white cursor-pointer font-semibold">
              <Plus />
              <p>New flow</p>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl hover:border hover:border-white cursor-pointer font-semibold">
              <Mail />
              <p>Coffee?</p>
              <span className=" text-slate-400">Marisa Lu</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl  hover:border hover:border-white cursor-pointer font-semibold">
              <Mail />
              <p>Feedback</p>
              <span className=" text-slate-400">Lindsey Weiss</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl  hover:border hover:border-white cursor-pointer font-semibold">
              <Mail />
              <p>Post-grad plans</p>
              <span className=" text-slate-400">Enelyn Ma</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl hover:border hover:border-white cursor-pointer font-semibold">
              <Mail />
              <p>Launch plan</p>
              <span className=" text-slate-400">Dennis jin</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl  hover:border hover:border-white cursor-pointer font-semibold">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/24/facebook-messenger--v1.png"
                alt="facebook-messenger--v1"
              />
              <p>Victoria Wang</p>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl hover:border hover:border-white cursor-pointer font-semibold">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/24/facebook-messenger--v1.png"
                alt="facebook-messenger--v1"
              />
              <p>Advait Kalakkad</p>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl hover:border hover:border-white cursor-pointer font-semibold">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/24/twitter--v1.png"
                alt="twitter--v1"
              />
              <p>Danny Trinh</p>
            </li>
          </ul>
        </div>

        {/* models */}
        <div className=" col-span-3 ">
          <CardsMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
