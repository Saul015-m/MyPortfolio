import { RiReactjsLine } from "react-icons/ri";
import  FigmaIcon  from "../assets/projects/Figma-logo.svg";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import {  DiJavascript1 } from "react-icons/di";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl font-semibold" >Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-6">
                 <img src={FigmaIcon} alt="Figmalogo" className="w-14 h-14" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <RiTailwindCssLine className="text-7xl text-cyan-300" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <BiLogoPostgresql className="text-7xl text-cyan-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <DiJavascript1 className="text-7xl text-green-600" />
            </div>
        </div> 
    </div>
  )
}

export default Technologies