import { useRef, useState } from 'react'
import IskconLogo from "../assets/iskcon_logo.png"

import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';




const LandingPage = () => {
   const [activeTab, setActiveTab] = useState("home");
   return (
      <section className='bg-[#FAF0E3] h-screen font-sans'>

         <header className='bg-[#fbefe1] shadow-md h-20 px-4 md:px-8 py-4 flex gap-4 md:gap-3 items-center'>
            <div className='w-18 h-full'>
               <img src={IskconLogo} alt="" className=' h-full' />
            </div>
            <h1 className='text-[#8E1616] text-xl  font-semibold'>
               ISKCON BUREAU PORTAL
            </h1>
            <div className="ml-auto flex gap-6 text-sm font-medium">
               <button
                  onClick={() => setActiveTab("home")}
                  className={`pb-1 cursor-pointer ${activeTab === "home"
                        ? "text-[#8E1616] border-b-2 border-[#E7B55C]"
                        : "text-[#3A3A3A]"
                     }`}
               >
                  Home
               </button>

               <button
                  onClick={() => setActiveTab("privacy")}
                  className={`pb-1 cursor-pointer ${activeTab === "privacy"
                        ? "text-[#8E1616] border-b-2 border-[#E7B55C]"
                        : "text-[#3A3A3A]"
                     }`}
               >
                  Privacy Policy
               </button>
            </div>
         </header>
         {activeTab === 'home' && <Home /> }
         {activeTab === 'privacy' && <PrivacyPolicy /> }

      </section>
   )
}

export default LandingPage
