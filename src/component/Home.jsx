import React, { useRef } from 'react'
import bgLogo from "../assets/bgImg.jpg"
import { FiDownload } from "react-icons/fi";
import { FaWindows, FaAndroid, FaApple } from "react-icons/fa";
const ANDROID_LINK = 'https://litmustek-my.sharepoint.com/:u:/g/personal/admin_iskconbureau_in/IQDh3uQZC0V7R6zgfd2TpYNDARXqO0KPgpOax6wz4o-dzSs?download=1';
const WINDOWS_LINK = 'https://litmustek-my.sharepoint.com/:u:/g/personal/admin_iskconbureau_in/IQCVi7bZCe2KQJuo5XK4v9dBAQP4Sdv3Tc_ekgfIMTBDMQA?download=1';
const MAC_LINK = 'https://litmustek-my.sharepoint.com/:u:/g/personal/admin_iskconbureau_in/IQAA824uIsNRQoGsBOE5sprNAXWOFw-UKSRgbwjSvdgA8iE?download=1';
const Home = () => {
    const downloadSectionRef = useRef(null);
    const scrollToDownloads = () => {
        downloadSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    const downloadFile = (path, filename) => {
        const link = document.createElement("a");
        link.href = path;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <article className="px-6 md:px-12 py-12 pb-6 bg-[#FBF5EE]">
                <div className="max-w-304 mx-auto flex flex-col md:flex-row  gap-16">
                    <div className="space-y-6">
                        <h1 className="text-[#8E1616] text-3xl md:text-5xl font-semibold relative inline-block">
                            About
                            <span className="block w-12 sm:w-22 h-1 bg-[#E7B55C] mt-3 rounded-full"></span>
                        </h1>
                        <p className='test-sm sm:text-[1.1rem] leading-relaxed text-[#3A3A3A]'>
                            The <strong>ISKCON Bureau Portal (IBP)</strong> has been developed as a dedicated platform to support the collective service of ISKCON Bureau Members. It aims to strengthen communication, coordination, and shared responsibility in the ongoing service of ISKCON.
                        </p>
                        <p className='test-sm sm:text-[1.1rem] leading-relaxed text-[#3A3A3A]'>
                            Inspired by <strong>Śrīla Prabhupāda’s</strong> emphasis on clarity, cooperation, and proper management, the IBP provides a secure and unified space for discussions, decisions, and follow-ups to remain connected and well documented. By reducing fragmentation, the Portal supports a more organized, transparent, and harmonious approach to Bureau service.
                        </p>
                        <button onClick={scrollToDownloads} className='inline-flex items-center gap-3 mt-4 bg-[#741212] text-white  px-7 py-3 rounded-full text-sm sm:text-base font-medium shadow-md hover:bg-[#8E1616] hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 animate-pulseSlow cursor-pointer'>
                            <FiDownload className="text-sm sm:text-lg" />
                            Download Links
                        </button>
                    </div>

                    <div className="relative w-[90%]  md:w-[94%] mx-auto">
                        <div className="absolute -top-6 -left-6 w-full  h-[95%] sm:h-[70%] bg-[#8E1616]/10 rounded-2xl"></div>
                        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                            <img
                                src={bgLogo}
                                alt="ISKCON Inspiration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </article>

            <article className="px-6 md:px-12 py-16 bg-[#FAF0E3]" ref={downloadSectionRef}>
                <div className="max-w-304 mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl md:text-4xl font-semibold text-[#8E1616]">
                            Download & System Requirements
                        </h2>
                        <p className="text-[#3A3A3A] text-sm sm:text-lg">
                            Choose your platform to view requirements and download the application
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Windows */}
                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <FaWindows className="text-2xl text-[#8E1616]" />
                                <h3 className="text-xl font-semibold text-[#8E1616]">Windows</h3>
                            </div>
                            <ul className="space-y-2 text-[#3A3A3A] text-sm leading-relaxed mb-1">
                                <li><strong>OS:</strong> Windows 10 (64-bit) or later</li>
                                <li><strong>RAM:</strong> 8 GB minimum</li>
                                <li><strong>Storage:</strong> 500 MB free</li>
                                <li><strong>CPU:</strong> Dual-core i5 / Ryzen 3</li>
                                <li><strong>GPU:</strong> Integrated graphics OK</li>
                                <li><strong>Internet:</strong> Required</li>
                            </ul>
                            <button
                                onClick={() => downloadFile(WINDOWS_LINK, "IBP-Window-setup.exe")}
                                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#8E1616] text-white px-5 py-2.5 rounded-full hover:bg-[#741212] transition cursor-pointer">
                                <FiDownload />
                                Download
                            </button>
                        </div>
                        {/* macOS */}
                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <FaApple className="text-2xl text-[#8E1616]" />
                                <h3 className="text-xl font-semibold text-[#8E1616]">macOS</h3>
                            </div>
                            <ul className="space-y-2 text-[#3A3A3A] text-sm mb-1">
                                <li><strong>OS:</strong> macOS 11 Big Sur or later</li>
                                <li><strong>RAM:</strong> 8 GB minimum</li>
                                <li><strong>Storage:</strong> 1 GB free</li>
                                <li><strong>CPU:</strong> Intel i5 or Apple M1/M2</li>
                                <li><strong>GPU:</strong> Integrated graphics OK</li>
                                <li><strong>Internet:</strong> Required</li>
                            </ul>
                            <button
                                onClick={() => downloadFile(MAC_LINK, "IBP-MacOs-setup.exe")}
                                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#8E1616] text-white px-5 py-2.5 rounded-full hover:bg-[#741212] transition cursor-pointer">
                                <FiDownload />
                                Download
                            </button>
                        </div>
                        {/* Android */}
                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <FaAndroid className="text-2xl text-[#8E1616]" />
                                <h3 className="text-xl font-semibold text-[#8E1616]">Android</h3>
                            </div>
                            <ul className="space-y-2 text-[#3A3A3A] text-sm mb-1">
                                <li><strong>OS:</strong> Android 10 or higher</li>
                                <li><strong>RAM:</strong> 4 GB or more</li>
                                <li><strong>Storage:</strong> 500 MB free</li>
                                <li><strong>CPU:</strong> Mid-range Snapdragon</li>
                                <li><strong>GPU:</strong> Full HD (1080p)</li>
                                <li><strong>Internet:</strong> 4G/5G or Wi-Fi</li>
                            </ul>
                            <button
                                onClick={() => downloadFile(ANDROID_LINK, "IBP-Android-setup.exe")}
                                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#8E1616] text-white px-5 py-2.5 rounded-full hover:bg-[#741212] transition cursor-pointer">
                                <FiDownload />
                                Download
                            </button>
                        </div>
                        {/* iOS */}
                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <FaApple className="text-2xl text-[#8E1616]" />
                                <h3 className="text-xl font-semibold text-[#8E1616]">iOS</h3>
                            </div>
                            <ul className="space-y-2 text-[#3A3A3A] text-sm mb-1">
                                <li><strong>OS:</strong> iOS / iPadOS 14+</li>
                                <li><strong>RAM:</strong> 3 GB or more</li>
                                <li><strong>Storage:</strong> 500 MB free</li>
                                <li><strong>Device:</strong> iPhone 8 or newer</li>
                                <li><strong>Internet:</strong> 4G/5G or Wi-Fi</li>
                            </ul>
                            <button className="mt-auto inline-flex items-center justify-center gap-2 bg-gray-500 text-white px-5 py-2.5 rounded-full hover:bg-[#741212] transition cursor-pointer">
                                <FiDownload />
                                Coming Soon
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Home