import React from 'react'
import { FaWindows, FaAndroid, FaApple } from "react-icons/fa";
import { MdLaptopMac } from "react-icons/md";
import IskconLogo from "../assets/iskcon_logo.png"
const DownloadPage = () => {
    return (
        <div className='bg-[#FAF0E3] h-screen flex items-center justify-center'>
            <div className='w-[50vw] h-auto bg-white rounded-[0.94vw] px-[2vw] py-[2vw]'>
                <div className='flex items-center gap-[1vw]  flex-col'>
                    <div className="h-[10vw]">
                        <img src={IskconLogo} alt="ISKCON" className='h-full object-contain' />
                    </div>
                    <h1 className='text-[#8E1616] text-[3vw] font-semibold'>
                        ISKCON Bureau Portal
                    </h1>
                </div>
                <div className="mt-[3vw] ">
                    <h2 className="text-[1.6vw] font-semibold text-gray-800 mb-[1.5vw]">
                        Download
                    </h2>
                    <div className="flex gap-[1.2vw] flex-wrap">
                        <DownloadButton icon={<FaWindows />} text="For Windows" />
                        <DownloadButton icon={<FaAndroid />} text="For Android" />
                        <DownloadButton icon={<FaApple />} text="For iOS" />
                        <DownloadButton icon={<MdLaptopMac />} text="For Mac" />
                    </div>
                </div>

            </div>
        </div>
    )
}
const DownloadButton = ({ icon, text }) => {
    return (
        <button
            className="
        flex items-center gap-[0.6vw]
        px-[1.4vw] py-[0.8vw]
        bg-[#8E1616] text-white
        rounded-[0.5vw]
        text-[0.95vw]
        hover:bg-[#721212]
        transition-all
      "
        >
            <span className="text-[1.2vw]">{icon}</span>
            {text}
        </button>
    )
}

export default DownloadPage