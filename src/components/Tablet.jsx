import { Mail, Plus } from "lucide-react"
import Model1 from "./Model1"
import Model2 from "./Model2"
import Model3 from "./Model3"

function Tablet() {
  return (
    <div className=" rounded-[2.5rem] border relative bg-slate-200 w-[60rem] h-[40rem] p-8">
       <p className=" absolute right-12 top-12 text-slate-400">9:41</p>
       <h1 className=" text-7xl text-slate-300 ">Review Inbox</h1>
        <ul className=" space-y-1 mt-4 w-[20rem] relative z-50">
            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl hover:border hover:border-white cursor-pointer font-semibold">
                <Plus/>
                <p>New flow</p>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl hover:border hover:border-white cursor-pointer font-semibold">
                <Mail/>
                <p>Coffee?</p>
                <span className=" text-slate-400">Marisa Lu</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-65 hover:border hover:border-white cursor-pointer font-semibold">
                <Mail/>
                <p>Feedback</p>
                <span className=" text-slate-400">Lindsey Weiss</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-60 hover:border hover:border-white cursor-pointer font-semibold">
                <Mail/>
                <p>Post-grad plans</p>
                <span className=" text-slate-400">Enelyn Ma</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-55 hover:border hover:border-white cursor-pointer font-semibold">
                <Mail/>
                <p>Launch plan</p>
                <span className=" text-slate-400">Dennis jin</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-45 hover:border hover:border-white cursor-pointer font-semibold">
            <img width="24" height="24" src="https://img.icons8.com/color/24/facebook-messenger--v1.png" alt="facebook-messenger--v1"/>
            <p>Victoria Wang</p>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-40 hover:border hover:border-white cursor-pointer font-semibold">
            <img width="24" height="24" src="https://img.icons8.com/color/24/facebook-messenger--v1.png" alt="facebook-messenger--v1"/>
            <p>Advait Kalakkad</p>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-30 hover:border hover:border-white cursor-pointer font-semibold">
            <img width="24" height="24" src="https://img.icons8.com/color/24/twitter--v1.png" alt="twitter--v1"/>
            <p>Danny Trinh</p>
            </li>
           
            
        </ul>
        <div className=" w-full h-full border-[30px]  absolute top-0 left-0 z-10 rounded-[2.5rem] border-[#141419] m-0 p-2"> 

       </div>
       <div className="relative left-[-27px] top-[-50%] translate-y-[-50%] w-5 flex flex-col justify-center space-y-3 z-20">
      <div className=" flex justify-center"> <div className=" bg-black h-[18px] w-[18px] rounded-full "></div></div>
       <div className=" flex justify-center"><div className=" bg-[#222223] h-[15px] w-[15px] rounded-full "></div></div>
       <div className=" flex justify-center"><div className=" bg-black h-[5px] w-[5px] rounded-full "></div></div>
       <div className=" flex justify-center"><div className=" bg-black h-[18px] w-[18px] rounded-full "></div></div>
       <div className=" flex justify-center"><div className=" bg-black h-[15px] w-[15px] rounded-full "></div></div>
       </div>

       {/* models */}
       <div className=" absolute top-20 left-[35%] flex gap-6 z-[5]">
        <Model1/>
        <Model2/>
        <Model3/>
       </div>
    </div>
  )
}

export default Tablet