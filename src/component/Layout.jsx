import IskconLogo from "../assets/iskcon_logo.png";
import { Link, useLocation, Outlet } from "react-router";

const Layout = () => {
    const location = useLocation();

    return (
        <section className="bg-[#FAF0E3] min-h-screen font-sans">
            <header className="bg-[#fbefe1] shadow-md h-20 px-4 md:px-8 py-4 flex gap-4 items-center">
                <div className="w-18 h-full">
                    <img src={IskconLogo} alt="ISKCON Logo" className="h-full" />
                </div>

                <h1 className="text-[#8E1616] text-xl font-semibold">
                    ISKCON BUREAU PORTAL
                </h1>

                <nav className="ml-auto flex gap-6 text-sm font-medium">
                    <Link
                        to="/"
                        className={`pb-1 ${location.pathname === "/"
                                ? "text-[#8E1616] border-b-2 border-[#E7B55C]"
                                : "text-[#3A3A3A]"
                            }`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/privacy-policy"
                        className={`pb-1 ${location.pathname === "/privacy-policy"
                                ? "text-[#8E1616] border-b-2 border-[#E7B55C]"
                                : "text-[#3A3A3A]"
                            }`}
                    >
                        Privacy Policy
                    </Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </section>
    );
};

export default Layout;
