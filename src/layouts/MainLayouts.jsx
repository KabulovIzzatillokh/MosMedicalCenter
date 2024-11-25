import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../otherComponents/Header'
import Footer from '../otherComponents/Footer'

const MainLayout = () => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/PNF';

  return (
    <div className="min-h-screen flex flex-col">

      {!isNotFoundPage && <Header />}

      <main className="grow">
        <Outlet />
      </main>

      {!isNotFoundPage && <Footer />}

    </div>
  );
};

export default MainLayout;
