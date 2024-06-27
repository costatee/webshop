"use client";

import { Typography } from "@material-tailwind/react";
import 'material-symbols';
import Link from "next/link";
import { useState } from "react";
import Search from "../../ui/search";
import { Suspense } from "react";


export function AdminMenu(): JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
    }

    return (
        <div className="relative flex flex-col w-70 items-start m-10 gap-6 text-black">
            <div className="w-60">
                <Suspense fallback={<div>Loading...</div>}>
                    <Search placeholder="Search" />
                </Suspense>
            </div>
            <div className="flex">
                <span className="material-symbols-outlined mr-4">home</span>
                <Link href="/admin">
                    <Typography
                        variant="paragraph">
                            Dashboard
                    </Typography>
                </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined mr-2">list_alt</span>
                <Link href="/admin/orders">
                    <Typography
                        variant="paragraph">
                            Orders
                    </Typography>
                </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined mr-2">group</span>
            <Link href="/admin/team">
                    <Typography
                        variant="paragraph">
                            Team Management
                    </Typography>
            </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined mr-2">restaurant_menu</span>
            <Link href="/admin/menu">
                    <Typography
                        variant="paragraph">
                            Menu
                    </Typography>
            </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined mr-2">format_list_numbered</span>
            <Link href="/admin/reports">
                    <Typography
                        variant="paragraph">
                            Reports
                    </Typography>
            </Link>
            </div>
            <div className="flex">
                <span className="material-symbols-outlined mr-2">settings</span>
                <Link href="/admin/settings">
                    <Typography
                        variant="paragraph">
                            Settings
                    </Typography>
                </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined mr-2">logout</span>
                <button onSubmit={handleLogout}>
                    <Typography
                        variant="paragraph"
                        className="hover:text-black">
                            Logout
                    </Typography>
                </button>
            </div>
        </div>
    );
  }


export function AdminMenuMobile(): JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
    }

    return (
        <div className="flex flex-wrap items-start mt-10 mb-5 mx-8 gap-3 text-black">
            <div className="w-full px-2 pb-2">
                <Suspense fallback={<div>Loading...</div>}>
                    <Search placeholder="Search" />
                </Suspense>
            </div>
            <div className="flex">
                <span className="material-symbols-outlined ml-2 mr-0.5">home</span>
                <Link href="/admin">
                    <Typography
                        variant="paragraph">
                            Dashboard
                    </Typography>
                </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined ml-2 mr-0.5">list_alt</span>
                <Link href="/admin/orders">
                    <Typography
                        variant="paragraph">
                            Orders
                    </Typography>
                </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined ml-2 mr-0.5">group</span>
            <Link href="/admin/team">
                    <Typography
                        variant="paragraph">
                            Team Management
                    </Typography>
            </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined ml-2 mr-0.5">restaurant_menu</span>
            <Link href="/admin/menu">
                    <Typography
                        variant="paragraph">
                            Menu
                    </Typography>
            </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined ml-2 mr-0.5">format_list_numbered</span>
            <Link href="/admin/reports">
                    <Typography
                        variant="paragraph">
                            Reports
                    </Typography>
            </Link>
            </div>
            <div className="flex">
                <span className="material-symbols-outlined ml-2 mr-0.5">settings</span>
                <Link href="/admin/settings">
                    <Typography
                        variant="paragraph">
                            Settings
                    </Typography>
                </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined ml-2 mr-0.5">logout</span>
                <button onSubmit={handleLogout}>
                    <Typography
                        variant="paragraph"
                        className="hover:text-black">
                            Logout
                    </Typography>
                </button>
            </div>
        </div>
    );
  }