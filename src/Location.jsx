import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Location = () => {
    const location = useLocation();
    const pathnames = location.pathname;
    const pathArr = pathnames.split('/').filter((path) => path !== '');

    // Uy uchun
    const home = location.pathname === '/';

    // Xizmatlar uchun
    const xizmatlarPages = ['ginekologiya', 'nevrologiya', 'nefrologiya', 'kardiologiya', 'gastroenterologiya', 'otorinolaringologiya', 'dermatologiya', 'travmatologiya', 'jarrohlik', 'flebologiya', 'urologiya', 'endokrinologiya'];

    const isXizmatlarPage = pathArr.some((path) =>
        xizmatlarPages.includes(path.toLowerCase())
    );

    // Diagnostikalar uchun 
    const diagnostikalarPages = ['rentgennurlari', 'mri', 'labaratoriya', 'ultratovush', 'funktsional', 'asalkomissiya'];

    const isdiagnostikalarPage = pathArr.some((path) =>
        diagnostikalarPages.includes(path.toLowerCase())
    );

    // KompaniyaHaqida uchun 
    const kompaniyaHaqidaPages = ['sertifikatlar', 'hamkorlar', 'fotogalareya', 'mutaxassislar'];

    const iskompaniyaHaqidaPage = pathArr.some((path) =>
        kompaniyaHaqidaPages.includes(path.toLowerCase())
    );

    return (
        <div className="pb-4 navHiddenResp:pb-7 lg:pb-10">
            {!home && (
                <ul
                    className={`text-Mos-Purple text-base lg:text-lg font-medium flex flex-wrap items-center gap-2 pl-4 xl:pl-7 ${pathnames === '/Hamkorlar' ? 'pl-0 justify-center' : 'justify-start'
                        } ${pathnames === '/Birja/BirjaDetail' ? 'pl-0 justify-center navHiddenResp:justify-start' : 'justify-start'}`}
                >
                    {/* Uy havolasi */}
                    <li>
                        <Link
                            className="hover:underline whitespace-nowrap"
                            to="/"
                        >
                            Uy
                        </Link>
                    </li>

                    {/* Xizmatlar uchun */}
                    {isXizmatlarPage && (
                        <li>
                            <span>/</span>
                            <Link
                                className="hover:underline whitespace-nowrap"
                                to="/xizmatlar"
                            >
                                Xizmatlar
                            </Link>
                        </li>
                    )}

                    {/* Diagnostikalar uchun */}
                    {isdiagnostikalarPage && (
                        <li>
                            <span>/</span>
                            <Link
                                className="hover:underline whitespace-nowrap"
                                to="/Diagnostikalar"
                            >
                                Diagnostikalar
                            </Link>
                        </li>
                    )}

                    {/* Kompaniya haqida uchun */}
                    {iskompaniyaHaqidaPage && kompaniyaHaqidaPages[3] === 'mutaxassislar' ? (
                        <li>
                            <span>/</span>
                            <Link
                                className="hover:underline whitespace-nowrap"
                                to="/KompaniyaHaqida"
                            >
                                Kompaniya Haqida
                            </Link>
                        </li>
                    ) : null}

                    {/* Breadcrumbning bo'laklarini yaratish */}
                    {pathArr.map((path, index) => {
                        const isLast = index === pathArr.length - 1;

                        return (
                            <li key={index}>
                                <span className="text-black/60">/</span>
                                {!isLast ? (
                                    <Link
                                        className="hover:underline whitespace-nowrap"
                                        to={`/${pathArr.slice(0, index + 1).join('/')}`}
                                    >
                                        {decodeURIComponent(path)}
                                    </Link>
                                ) : (
                                    <span className="text-lg font-medium text-black/60 whitespace-nowrap">
                                        {decodeURIComponent(path)}
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Location;
