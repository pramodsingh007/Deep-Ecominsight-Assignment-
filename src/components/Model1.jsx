import { Mail } from "lucide-react";
import { Mic } from "lucide-react";
import { Flower } from "lucide-react";

function Modal1() {
  return (
    <div className="w-[23rem] max-h-[26rem] shadow-md bg-white text-sm  rounded-2xl  overflow-hidden">
      <div className=" flex justify-between p-2 bg-slate-200">
        <div className=" flex space-x-1">
          <Mail className="" /> <span className=" font-semibold">Coffee?</span>{" "}
          <span>Mail from Marisa Lu</span>
        </div>
        <Mic />
      </div>
      <div className=" space-y-3 p-2">
        <div>
          <h1 className=" text-md">Marisa Lu</h1>
          <span className=" text-slate-400">Just Now</span>
        </div>
        <h1 className=" font-bold text-lg">Coffee?</h1>
        <p className=" text-slate-700">Hey Jason,</p>
        <p className=" font-medium text-slate-500">
          Was wondering if you{`'`}d be interested in meeting my team at Philz
          Coffee at 11 AM today. No pressure if you can{`'`}t make it, although
          i think you guys would really get along!
        </p>
        <p>Marisa</p>

        <div className=" flex  space-x-3 border-t pt-3">
          <button className=" font-semibold text-slate-600 bg-slate-200 rounded-3xl py-2 px-3">
            Reply
          </button>
          <button className=" font-semibold text-slate-600 bg-slate-200 rounded-3xl py-2 px-3">
            Forward
          </button>
          <button className=" font-semibold text-slate-600 bg-slate-200 rounded-3xl py-2 px-3">
            Delete
          </button>
        </div>
        <p className=" flex gap-3 ">
          <Flower className="text-slate-400"/>
          <span className=" text-slate-400">More action</span>
        </p>
      </div>
    </div>
  );
}

export default Modal1;
