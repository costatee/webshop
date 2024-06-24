"use client";

import React, { useState } from "react";
import { AdminMenu, AdminMenuMobile } from "./admin-menu";
import Image from "next/image";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="flex flex-col md:flex-row min-h-screen w-full">

        {/* Small screen toggle */}
        <button className="md:hidden p-3 fixed top-0 left-0 z-50 mb-10" onClick={toggleMenu}>
          <Image src="/menu.png" alt="Menu icon" width={24} height={24} />
        </button>

        {/* Small screen menu */}
        <div className={`md:hidden fixed top-0 left-0 bg-gray-100 text-white ${isOpen ? 'block' : 'hidden'}`}>
          <AdminMenuMobile />
        </div>


        {/* Large screen menu */}
        <div className={`hidden md:block bg-gray-100 text-white`}>
          <AdminMenu />
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
  );
};

export default AdminLayout;