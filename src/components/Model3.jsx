import { MapPin, Navigation } from "lucide-react";
import { Mic } from "lucide-react";
import { Flower } from "lucide-react";

function Modal3() {
  return (
    <div className=" w-[23rem] max-h-[26rem] shadow-md bg-white  rounded-2xl overflow-hidden text-sm">
      <div className=" flex justify-between p-2 bg-slate-200">
        <div className=" flex space-x-3">
          <MapPin className="" /> <span className=" font-semibold">Philz Coffee?</span>
          <span className=" text-slate-400">Location</span>
        </div>
        <Mic />
      </div>
      <img src="images/map.png" alt="map" />
        <div className=" space-y-1 p-2">
          <h1 className=" font-bold text-lg">Philz Coffee</h1>
          <p className="">Custom-blended java in a casual setting.</p>
          <div>
            <p className=" text-slate-400" >20686 Stevens Creek Bivd</p>
            <p className=" text-slate-400" >Cupertino, CA 95014</p>
          </div>
          <div className=" flex  space-x-2 border-t pt-3">
          <button className=" font-semibold text-slate-600 text-xs bg-slate-200 rounded-3xl py-2 px-3">
            <div className=" flex gap-2 items-center">
              <Navigation/>
              <div><p className=" font-semibold text-xs">Get directions</p>
            <p className=" text-xs">Requires your location</p></div>
            </div>

          </button>
          <button className=" font-semibold text-slate-600 bg-slate-200 rounded-3xl text-xs py-2 px-3">
            See details
          </button>
          <button className=" font-semibold text-slate-600 bg-slate-200 rounded-3xl py-2 text-xs px-3">
            Find more cafes nearby
          </button>
        </div>
        </div>

        
        <p className=" flex gap-3 p-6">
          <Flower className=" text-slate-400" />
          <span className=" text-slate-400">More action</span>
        </p>
      
    </div>
  );
}

export default Modal3;
