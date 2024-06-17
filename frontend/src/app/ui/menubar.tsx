import { useState, useContext } from 'react';
import { Avatar, Typography, Button } from '@material-tailwind/react';
import Link from 'next/link';
import { AuthContext } from '../lib/AuthContext';
import 'material-symbols';

export default function MenuBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, logout } = useContext(AuthContext);

  return (
    <header className="w-full w-max-[1440px]">
      <div className="flex items-center justify-between w-full p-4 md:hidden">
        <Typography variant="h1" className="text-2xl font-bold text-black">Restaurant</Typography>
        <button
          className="flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-black text-3xl">menu</span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col items-center w-full md:hidden bg-gray-100">
          <ul className="flex flex-col items-center gap-6 py-4 text-black text-lg">
            <li className="bg-[#FC8A06] text-white px-4 py-2 rounded-full">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/offers">Offers</Link>
            </li>
            <li>
              <Link href="/reservations">Reservations</Link>
            </li>
            <div className="bg-[#03081F] flex items-center justify-center px-7 py-3 rounded-full">
              <Avatar
                className="mr-4"
                src="https://docs.material-tailwind.com/img/face-4.jpg"
                alt="avatar"
                size="md"
              />
              <li className="text-white">
                {token ? (
                  <Button onClick={logout} className="text-white">Logout</Button>
                ) : (
                  <Link href="/login">Login/Signup</Link>
                )}
              </li>
            </div>
          </ul>
        </nav>
      )}

      <nav className="hidden md:flex items-center w-full px-4 py-2">
        <Typography variant="h1" className="text-3xl font-bold text-black">Restaurant</Typography>
        <ul className="ml-auto flex gap-10 text-lg items-center text-black">
          <li className="bg-[#FC8A06] text-white px-7 py-2.5 rounded-full">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/offers">Offers</Link>
          </li>
          <li>
            <Link href="/reservations">Reservations</Link>
          </li>
          <li>
            <Link href="/info">Contact Us</Link>
          </li>
          <div className="bg-[#03081F] flex items-center justify-center px-6 py-3 rounded-full">
            <Avatar
              className="mr-4"
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
        </ul>
      </nav>
    </header>
  );
}
