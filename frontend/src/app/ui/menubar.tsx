"use client";

import { useState, useContext } from 'react';
import { Avatar, Typography, Button } from '@material-tailwind/react';
import Link from 'next/link';
import { AuthContext } from '../lib/AuthContext';
import 'material-symbols';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '' }) => (
  <li className={`px-2 py-2 ${className}`}>
    <Link href={href}>{children}</Link>
  </li>
);

interface UserSectionProps {
  token: string | null;
  logout: () => void;
}

const UserSection: React.FC<UserSectionProps> = ({ token, logout }) => (
  <div className="flex items-center justify-center px-4 py-2 rounded-full bg-[#03081F]">
    <Avatar
      className="mr-2"
      src="/male_user_icon.png"
      alt="avatar"
      size="sm"
    />
    <li className="text-white">
      {token ? (
        <Button onClick={logout} className="text-white">Logout</Button>
      ) : (
        <Link href="/login">Login/Signup</Link>
      )}
    </li>
  </div>
);

const AccountMenu: React.FC = () => (
  <div className="flex items-center justify-center px-4 py-2 rounded-full bg-[#03081F]">
    <Avatar
      className="mr-2"
      src="/male_user_icon.png"
      alt="avatar"
      size="sm"
    />
    <Link href="/account" className="text-white">Account</Link>
  </div>
);

const MenuBar: React.FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, logout } = useContext(AuthContext);

  return (
    <header className="w-full max-w-[1440px] mb-1 md:mb-20">
      {/* Mobile Header */}
      <div className="flex items-center justify-between w-full md:hidden px-4 py-2">
        <Typography variant="h1" className="text-2xl font-bold text-black">Logo</Typography>
        <button
          className="flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-black text-3xl">menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center w-full md:hidden bg-gray-100 mt-2">
          <ul className="flex flex-col items-center gap-1 py-4 text-black text-lg">
            <NavLink href="/" className="bg-[#FC8A06] text-white rounded-full">Home</NavLink>
            <NavLink href="/menu">Menu</NavLink>
            <NavLink href="/offers">Offers</NavLink>
            <NavLink href="/reservations">Reservations</NavLink>
            <NavLink href="/info">Contact Us</NavLink>
            <UserSection token={token} logout={logout} />
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center px-4 py-2">
        <Typography variant="lead" className="hidden lg:blocktext-3xl font-bold text-black">Logo</Typography>
        <ul className="ml-auto flex gap-4 lg:gap-10 md:gap-2 text-lg items-center text-black">
          <NavLink href="/" className="bg-[#FC8A06] text-white rounded-full">Home</NavLink>
          <NavLink href="/menu">Menu</NavLink>
          <NavLink href="/offers">Offers</NavLink>
          <NavLink href="/reservations">Reservations</NavLink>
          <NavLink href="/info">Contact Us</NavLink>
          {token ? <AccountMenu /> : <UserSection token={token} logout={logout} />}
        </ul>
      </nav>
    </header>
  );
}

export default MenuBar;
