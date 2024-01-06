import { Mail } from "lucide-react";
import { Mic } from "lucide-react";
import { Flower } from "lucide-react";

function Modal1() {
  return (
    <div className="w-[36rem] max-h-[35rem] shadow-md bg-white text-sm  rounded-2xl  overflow-hidden">
      <div className=" flex justify-between p-4 bg-slate-200">
        <div className=" flex space-x-1">
          <Mail className="" /> <span className=" font-semibold">Coffee?</span>{" "}
          <span>Mail from Marisa Lu</span>
        </div>
        <Mic className=" cursor-pointer" />
      </div>
      <div className=" space-y-4 p-4">
        <div className=" flex justify-between">
          <h1 className=" text-3xl">Marisa Lu</h1>
          <span className=" text-slate-400">Just Now</span>
        </div>
        <h1 className=" font-bold text-3xl">Coffee?</h1>
        <p className=" text-slate-700">Hey Jason,</p>
        <p className=" font-medium text-slate-500">
          Was wondering if you{`'`}d be interested in meeting my team at Philz
          Coffee at 11 AM today. No pressure if you can{`'`}t make it, although
          i think you guys would really get along!
        </p>
        <p>Marisa</p>

        <div className=" flex  space-x-3 border-t pt-3">
          <button className=" font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 rounded-3xl py-3 px-6">
            Reply
          </button>
          <button className=" font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 rounded-3xl py-3 px-6">
            Forward
          </button>
          <button className=" font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 rounded-3xl py-3 px-6">
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
