import React from 'react';

const Header = ({ search, setSearch }) => {
  return (
    <header className="bg-[#17171A] h-[283px] w-full flex items-center justify-center flex-col ">
      <h1 className=" text-white font-spaceGrotesk text-4xl py-[48px]">
        <span className=" text-span">Code</span>Lab
      </h1>
      <input
        className="bg-[#202024] border-2 border-[#252529] rounded-lg placeholder-[#AFABB6] w-[70%] h-[56px] px-[24px] focus:outline-none text-white cursor-pointer text-[20px]"
        type="search"
        placeholder="Pesquisar no blog"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
