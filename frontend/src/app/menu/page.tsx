"use client";

import React, { useState } from 'react';
import { AllRamen, CardData } from "../ui/menu/ramen-menu";
import Search from "../ui/search";
import { Suspense } from "react";
import { ramenMenuData } from "../ui/menu/ramen-menu";

export default function Menu(): JSX.Element {
  const [filteredRamenMenu, setFilteredRamenMenu] = useState<CardData[] | undefined>(undefined);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === '') {
      setFilteredRamenMenu(undefined); 
    } else {
      const filteredData = ramenMenuData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRamenMenu(filteredData);
    }
  };

  return (
    <main className="relative w-full lg:max-w-[1440px]">
      <div className="w-full flex flex-col rounded-lg md:rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 px-4">
        <p className="relative w-full text-center text-[2rem] mt-8">Our menu</p>
        <p className="relative w-full text-center font-light text-sm mb-4 md:mb-8 opacity-80">
          crafted with love
        </p>
        <div className="w-[90%] md:w-2/3 mb-3 flex items-center justify-center">
          <Suspense fallback={<div>Loading...</div>}>
            <Search placeholder="Search for anything" onSearch={handleSearch} />
          </Suspense>
        </div>
        <div className="w-full flex-col md:flex-row bg-[#FAFAFA] items-center justify-center pb-6 text-black">
          <AllRamen filteredData={filteredRamenMenu} />
        </div>
      </div>
    </main>
  );
}
