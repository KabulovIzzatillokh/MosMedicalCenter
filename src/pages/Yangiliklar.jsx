import React, { useEffect, useState } from 'react';
import Location from '../Location';
import { newsData } from '../data';

const Yangiliklar = () => {
    const [sortOrder, setSortOrder] = useState('oldest'); // Saralash tartibi
    const [sortedNews, setSortedNews] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Saralash tartibini o'zgartirish
    useEffect(() => {
        const sorted = [...newsData].sort((a, b) => {
            if (sortOrder === 'oldest') {
                return new Date(a.date) - new Date(b.date);
            } else {
                return new Date(b.date) - new Date(a.date);
            }
        });
        setSortedNews(sorted);
    }, [sortOrder]);

    return (
        <div className='py-5 lg:py-[60px]'>
            <div className="w-full max-w-base mx-auto px-5">
                <Location />

                    <div className='mb-8 navHiddenResp:mb-10 lg:mb-[50px] flex flex-col space-y-4 moreHiddenResp:flex-row moreHiddenResp:justify-between moreHiddenResp:items-center'>
                        <h2 className='text-3xl md:text-[37px] lg:text-[45px] xl:text-[50px] font-semibold'>Yangiliklar</h2>

                        {/* Saralash tanlovi */}
                        <div className="mr-0 lg:mr-10">
                            <select
                                id="sortOrder"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="px-4 py-2 border rounded-lg shadow-md shadow-Mos-Purple outline-none font-semibold"
                            >
                                <option value="oldest">Oldingi yangiliklar</option>
                                <option value="newest">Oxirgi yangiliklar</option>
                            </select>
                        </div>
                    </div>

                <div className='space-y-12'>
                    {sortedNews.map((news) => (
                        <div
                            key={news.id}
                            className={`${news.id % 2 === 0 ? 'flex flex-col navHiddenResp:flex-row navHiddenResp:items-center navHiddenResp:justify-center bg-Mos-Purple/30' : 'flex flex-col navHiddenResp:flex-row-reverse navHiddenResp:items-center navHiddenResp:justify-center bg-Mos-purple-light'} shadow-lg p-5 lg:px-10 lg:py-10 rounded-xl group`}
                        >
                            <div className={news.id % 2 === 0 ? 'ml-0 mb-5 navHiddenResp:mb-0 navHiddenResp:mr-10' : 'mr-0 mb-5 navHiddenResp:mb-0 navHiddenResp:ml-10'}>
                                <img
                                    className='w-full object-cover h-[290px] rounded-lg shadow-md shadow-Mos-Purple group-hover:-rotate-6 transition-transform duration-300'
                                    src={news.image}
                                    alt={news.title}
                                />
                            </div>

                            <div className='w-full navHiddenResp:max-w-[820px]'>
                                <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-7 navHiddenResp:mb-5 space-y-1 navHiddenResp:space-y-0'>
                                    <p className='font-semibold text-lg'>{news.author}</p>
                                    <p>{news.date}</p>
                                </div>

                                <h3 className='text-lg navHiddenResp:text-xl xl:text-3xl leading-5 navHiddenResp:leading-none font-bold mb-2 navHiddenResp:mb-3 line-clamp-3'>{news.title}</h3>

                                <p className='text-sm navHiddenResp:text-base font-medium leading-5 navHiddenResp:leading-6 text-black/80 line-clamp-4 lg:line-clamp-none'>
                                    {news.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Yangiliklar;
