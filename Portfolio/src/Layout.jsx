import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
