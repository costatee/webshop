"use client";

import { useState, useContext } from 'react';
import { Avatar, Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { useAuth } from '../lib/AuthContext';
import 'material-symbols';
import { MaterialIconProps, NavLinkProps, UserSectionProps } from '../lib/definitions';

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '' }) => (
  <li className={`px-2 py-2 ${className}`}>
    <Link href={href}>
      <Typography variant="lead" className='md:text-[1.2rem] lg:text-[1.35rem] antialiased'>{children}</Typography>
    </Link>
  </li>
);

const MaterialIcon: React.FC<MaterialIconProps> = ({ iconClass, iconTitle }) => (
  <span className={`mx-1 ${iconClass}`}>{iconTitle}</span>
);

const UserSection: React.FC<UserSectionProps> = ({ token }) => (
  <div className="flex items-center justify-center px-4 py-2 rounded-full bg-[#03081F]">
    <Avatar
      className="mr-2"
      src="/male_user_icon.png"
      alt="avatar"
      size="sm"
    />
    <li className="text-white">
      {token ? (
        <Link href="/basket">Basket</Link>
      ) : (
        <Link href="/login">Login/Signup</Link>
      )}
    </li>
  </div>
);

const AccountMenu: React.FC = () => (
  <div className="flex items-center justify-center px-5 py-2 rounded-full bg-[#03081F]">
      <Avatar
        className="mr-2"
        src="/male_user_icon.png"
        alt="avatar"
        size="sm"
      />
    <Link href="/basket" className="text-white"><p className=" text-[1.2rem]">Basket</p></Link>
  </div>
);

const MenuBar: React.FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token } = useAuth();

  return (
    <header className="w-full max-w-[1440px] bg-gray-50/40 mb-5 mt-1 md:mt-2 sm:mb-10 mb:mb-15 border-b border-grey-200/50 border-solid">
      {/* Mobile Header */}
      <div className="flex items-center justify-start w-full md:hidden px-1 mt-1">
        <button
          className="flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MaterialIcon iconClass='material-symbols-outlined' iconTitle='menu' />
        </button>
        <Link href="/">
          <Typography variant="h1" className="text-2xl font-bold text-black mr-auto ml-2 px-2">水</Typography>
        </Link>
        <div className='ml-auto mt-1.5'>
          <Link href="/favourites">
            <MaterialIcon iconClass='material-symbols-outlined' iconTitle='favorite' />
          </Link>
          <Link href="/user">
            <MaterialIcon iconClass='material-symbols-outlined' iconTitle='person' />
          </Link>
          <Link href="/basket">
            <MaterialIcon iconClass='material-symbols-outlined' iconTitle='shopping_cart' />
          </Link>
          <MaterialIcon iconClass='material-symbols-outlined' iconTitle='search' />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center w-full md:hidden rounded-md bg-gray-100 mt-2">
          <ul className="flex flex-col items-center gap-1 py-5 text-black text-lg">
            <NavLink href="/menu">Menu</NavLink>
            <NavLink href="/offers">Offers</NavLink>
            <NavLink href="/favourites">Favourites</NavLink>
            <NavLink href="/info">Contact Us</NavLink>
            <UserSection token={token} />
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center px-4 py-2">
        <Link href="/">
          <Typography variant="h1" className="hidden md:block font-bold text-black px-10">水</Typography>
        </Link>
        <ul className="ml-auto flex gap-4 lg:gap-10 md:gap-3 lg:text-lg items-center text-black">
          <NavLink href="/menu">Menu</NavLink>
          <NavLink href="/offers">Offers</NavLink>
          {/* <NavLink href="/reservations">Reservations</NavLink> */}
          <NavLink href="/info">Contact Us</NavLink>
          {token ? <AccountMenu /> : <UserSection token={token} />}
        </ul>
      </nav>
    </header>
  );
};

export default MenuBar;
