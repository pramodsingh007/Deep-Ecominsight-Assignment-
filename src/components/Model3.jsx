import { MapPin, Navigation } from "lucide-react";
import { Mic } from "lucide-react";
import { Flower } from "lucide-react";

function Modal3() {
  return (
    <div className=" w-[30rem]  h-[28rem] shadow-md bg-white  rounded-2xl overflow-hidden text-sm">
      <div className=" flex justify-between p-2 bg-slate-200">
        <div className=" flex space-x-3">
          <MapPin className="" />{" "}
          <span className=" font-semibold">Philz Coffee?</span>
          <input
            className=" text-slate-400  outline-none bg-transparent"
            placeholder="Location"
          />
        </div>
        <Mic className=" cursor-pointer" />
      </div>
      <img className=" h-[8rem]" src="images/map.png" alt="map" />
      <div className=" space-y-4 p-4">
        <h1 className=" font-bold text-2xl">Philz Coffee</h1>
        <p className="">Custom-blended java in a casual setting.</p>
        <div>
          <p className=" text-slate-400">20686 Stevens Creek Bivd</p>
          <p className=" text-slate-400">Cupertino, CA 95014</p>
        </div>
        <div className=" flex gap-2 border-t pt-3">
          <button className=" font-semibold text-slate-600  text-xs bg-slate-200 hover:bg-slate-300 py-2 w-40 px-2 rounded-3xl">
            <div className=" flex gap-2 items-center justify-center">
              <Navigation width={20} height={20} />
              <div>
                <p className=" font-semibold ">Get directions</p>
                <p className=" text-[8px]">Requires your location</p>
              </div>
            </div>
          </button>
          <button className=" font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 py-2 w-40 px-2  rounded-3xl">
            See details
          </button>
          <button className=" font-semibold text-xs text-slate-600 bg-slate-200 hover:bg-slate-300 py-2 w-40 px-2 rounded-3xl">
            Find more cafes nearby
          </button>
        </div>
        <p className=" flex items-center gap-3 ">
          <Flower className=" text-slate-400" />
          <span className=" text-slate-400">More action</span>
        </p>
      </div>
    </div>
  );
}

export default Modal3;
