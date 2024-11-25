// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const SubDropdownItem = ({ links }) => {
//     return (
//         <div className="absolute top-full mt-2 left-0 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
//             {links.map((link, index) => (
//                 <Link
//                     key={index}
//                     to={link.to}
//                     className="block py-2 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-100"
//                 >
//                     {link.text}
//                 </Link>
//             ))}
//         </div>
//     );
// };

// const InnerDropdownItem = ({ title, titleLink, subLinks }) => {
//     const [isSubOpen, setIsSubOpen] = useState(false);

//     const handleToggle = () => {
//         setIsSubOpen((prev) => !prev);
//     };

//     return (
//         <div className="p-2 hover:bg-gray-100 rounded-md relative">
//             <div className="flex items-center justify-between">
//                 <Link
//                     to={titleLink}
//                     className="font-semibold text-gray-600 hover:text-red-500"
//                 >
//                     {title}
//                 </Link>
//                 <button
//                     onClick={handleToggle}
//                     className="ml-2 text-gray-700 hover:text-red-500"
//                 >
//                     {isSubOpen ? "▲" : "▼"}
//                 </button>
//             </div>
//             {isSubOpen && subLinks && <SubDropdownItem links={subLinks} />}
//         </div>
//     );
// };

// const DropdownItem = ({ link, children, isToggleable, screenWidth }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleToggle = () => {
//         if (screenWidth < 1024 && isToggleable) {
//             setIsOpen((prev) => !prev);
//         }
//     };

//     return (
//         <div className="relative">
//             <div className="flex items-center">
//                 <Link
//                     to={link.to}
//                     className="text-gray-700 hover:text-red-500 font-semibold px-4 py-2"
//                 >
//                     {link.text}
//                 </Link>
//                 {screenWidth < 1024 && isToggleable && (
//                     <button
//                         onClick={handleToggle}
//                         className="ml-2 text-gray-700 hover:text-red-500"
//                     >
//                         {isOpen ? "▲" : "▼"}
//                     </button>
//                 )}
//             </div>
//             {isOpen && (
//                 <div className="absolute top-full mt-2 left-0 w-52 bg-white rounded-lg shadow-lg z-10">
//                     {children}
//                 </div>
//             )}
//         </div>
//     );
// };

// const Accardion = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => setScreenWidth(window.innerWidth);
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return (
//         <header className="py-5 border-b fixed bg-white pr-11 right-0 left-0 z-20">
//             <div className="container flex items-center justify-between px-4 md:px-8">
//                 <div className="flex items-center gap-2 text-[#ff5050] text-xl font-medium cursor-pointer hover:text-black lg:order-3">
//                     <p>Biz bilan bog'lanish</p>
//                     <svg
//                         className="fill-current w-5 h-5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 122.88 88.86"
//                     >
//                         <title>email</title>
//                         <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" />
//                     </svg>
//                 </div>

//                 {/* Desktop Menu */}
//                 <div className="hidden lg:flex lg:order-2 xl:flex xl:space-x-6">
//                     <DropdownItem link={{ to: "/", text: "Uy" }} />
//                     <DropdownItem
//                         link={{ to: "/Kompaniyahaqida", text: "Kompaniya haqida" }}
//                     />
//                     <DropdownItem
//                         link={{ to: "/Xizmatlar", text: "Xizmatlar" }}
//                         isToggleable
//                         screenWidth={screenWidth}
//                     >
//                         <InnerDropdownItem
//                             title="Jismoniy shaxslar uchun"
//                             titleLink="/Jismoniyshaxslaruchun"
//                             ks={[
//                                 { to: "/Mamuriyishlar", text: "Ma'muriy ishlar" },
//                                 { to: "/Fuqarolikishlar", text: "Fuqarolik ishlar" },
//                                 { to: "/Jinoiyishlar", text: "Jinoiy ishlar" },
//                                 { to: "/Soliqholatlari", text: "Soliq holatlari" },
//                                 { to: "/Merosholatlari", text: "Meros holatlari" },
//                                 {
//                                     to: "/KochmasMulkBoyichaAdvokat",
//                                     text: "Ko'chmas mulk bo'yicha advokat",
//                                 },
//                             ]}
//                         />
//                         <InnerDropdownItem
//                             title="Yuridik shaxslar uchun"
//                             titleLink="/Yuridikshaxslar"
//                             subLinks={[
//                                 { to: "/Arbitrajishlari", text: "Arbitraj ishlar" },
//                                 { to: "/YuridikSoliqholatlari", text: "Soliq holatlari" },
//                                 { to: "/Korporativishlar", text: "Korporativ ishlar" },
//                                 { to: "/Biznesvositachiligi", text: "Biznes vositachiligi" },
//                                 { to: "/Qarzniundurish", text: "Qarzni undirish" },
//                                 {
//                                     to: "/Bankrotlikboyichaadvokat",
//                                     text: "Bankrotlik bo'yicha advokat",
//                                 },
//                             ]}
//                         />
//                     </DropdownItem>
//                     <DropdownItem link={{ to: "/Sharhlar", text: "Sharhlar" }} />
//                     <DropdownItem
//                         link={{ to: "/SavolJavoblar", text: "Savollar va javoblar" }}
//                     />
//                     <DropdownItem link={{ to: "/Yangiliklar", text: "Yangiliklar" }} />
//                     <DropdownItem link={{ to: "/Kontaktlar", text: "Kontaktlar" }} />
//                 </div>

//                 {/* Mobile Menu */}
//                 <div className="lg:hidden flex items-center">
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="text-gray-700 hover:text-red-500 font-semibold px-4 py-2"
//                     >
//                         {isMenuOpen ? (
//                             <span className="text-2xl font-bold">X</span>
//                         ) : (
//                             <svg
//                                 className="w-6 h-6"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h16M4 18h16"
//                                 ></path>
//                             </svg>
//                         )}
//                     </button>
//                     {isMenuOpen && (
//                         <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-30 p-4 transition-transform duration-300">
//                             <button
//                                 onClick={() => setIsMenuOpen(false)}
//                                 className="text-red-500 text-2xl font-bold float-right"
//                             >
//                                 X
//                             </button>
//                             {/* Mobile Links */}
//                             <nav className="mt-8">
//                                 <DropdownItem link={{ to: "/", text: "Uy" }} />
//                                 <DropdownItem
//                                     link={{ to: "/Kompaniyahaqida", text: "Kompaniya haqida" }}
//                                 />
                                // <DropdownItem
                                //     link={{ to: "/Xizmatlar", text: "Xizmatlar" }}
                                //     isToggleable
                                //     screenWidth={screenWidth}
                                // >
                                //     <InnerDropdownItem
                                //         title="Jismoniy shaxslar uchun"
                                //         titleLink="/Jismoniyshaxslaruchun"
                                //         subLinks={[
                                //             { to: "/Mamuriyishlar", text: "Ma'muriy ishlar" },
                                //             { to: "/Fuqarolikishlar", text: "Fuqarolik ishlar" },
                                //             { to: "/Jinoiyishlar", text: "Jinoiy ishlar" },
                                //             { to: "/Soliqholatlari", text: "Soliq holatlari" },
                                //             { to: "/Merosholatlari", text: "Meros holatlari" },
                                //             {
                                //                 to: "/KochmasMulkBoyichaAdvokat",
                                //                 text: "Ko'chmas mulk bo'yicha advokat",
                                //             },
                                //         ]}
                                //     />
                                //     <InnerDropdownItem
                                //         title="Yuridik shaxslar uchun"
                                //         titleLink="/Yuridikshaxslar"
                                //         subLinks={[
                                //             { to: "/Arbitrajishlari", text: "Arbitraj ishlar" },
                                //             { to: "/YuridikSoliqholatlari", text: "Soliq holatlari" },
                                //             { to: "/Korporativishlar", text: "Korporativ ishlar" },
                                //             {
                                //                 to: "/Biznesvositachiligi",
                                //                 text: "Biznes vositachiligi",
                                //             },
                                //             { to: "/Qarzniundurish", text: "Qarzni undirish" },
                                //             {
                                //                 to: "/Bankrotlikboyichaadvokat",
                                //                 text: "Bankrotlik bo'yicha advokat",
                                //             },
                                //         ]}
                                //     />
                                // </DropdownItem>
//                                 <DropdownItem link={{ to: "/Sharhlar", text: "Sharhlar" }} />
//                                 <DropdownItem
//                                     link={{ to: "/SavolJavoblar", text: "Savollar va javoblar" }}
//                                 />
//                                 <DropdownItem link={{ to: "/Yangiliklar", text: "Yangiliklar" }} />
//                                 <DropdownItem link={{ to: "/Kontaktlar", text: "Kontaktlar" }} />
//                             </nav>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Accardion;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accardion = () => {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleMouseEnter = (submenu) => {
        setActiveSubmenu(submenu);
    };

    const handleMouseLeave = () => {
        setActiveSubmenu(null);
    };

    return (
        <div className="py-2-">
            <nav className="bg-gray-800 text-white py-10 px-10">
                <ul className="relative">
                    <li
                        className="group inline-block relative"
                        onMouseEnter={() => setShowSubmenu(true)}
                        onMouseLeave={() => setShowSubmenu(false)}
                    >
                        <span className="cursor-pointer hover:text-gray-300">Xizmatlar</span>
                        {showSubmenu && (
                            <ul className="absolute left-0 bg-gray-700 rounded-md shadow-lg">
                                {/* Birinchi Submenu */}
                                <li
                                    className="relative w-[500px]"
                                    onMouseEnter={() => handleMouseEnter("submenu1")}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <span className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
                                        Jismoniy shaxslar uchun
                                    </span>
                                    {activeSubmenu === "submenu1" && (
                                        <ul className="absolute left-full top-0 bg-gray-600 rounded-md shadow-lg">
                                            <Link to='/' className="block w-[300px] px-4 py-2 hover:bg-gray-500 cursor-pointer">
                                                Ma'muriy ishlar
                                            </Link>
                                            <Link to='/' className="block w-[300px] px-4 py-2 hover:bg-gray-500 cursor-pointer">
                                                Fuqorolik ishlari
                                            </Link>
                                            <Link to='/' className="block w-[300px] px-4 py-2 hover:bg-gray-500 cursor-pointer">
                                                Jinoiy ishlar
                                            </Link>
                                        </ul>
                                    )}
                                </li>

                                {/* Ikkinchi Submenu */}
                                <li
                                    className="relative w-[500px] "
                                    onMouseEnter={() => handleMouseEnter("submenu2")}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <span className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
                                        Yuridik shaxslar
                                    </span>
                                    {activeSubmenu === "submenu2" && (
                                        <ul className="absolute left-full top-0 bg-gray-600 rounded-md shadow-lg">
                                            <Link to='/' className="block w-[300px] px-4 py-2 hover:bg-gray-500 cursor-pointer">
                                                Arbitraj ishlari
                                            </Link>
                                            <Link to='/' className="block w-[300px] px-4 py-2 hover:bg-gray-500 cursor-pointer">
                                                Soliq holatlari
                                            </Link>
                                            <Link to='/' className="block w-[300px] px-4 py-2 hover:bg-gray-500 cursor-pointer">
                                                Korporativ ishlar
                                            </Link>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Accardion;
