"use client"

import AdminDash from "../../ui/admin-ui/admin-dash-search";
import MenuBar from "../../ui/menubar";
import AdminMenu from "../../ui/admin-ui/admin-menu";
import { Footer } from "../../ui/footer";
// import Dashboard from "../ui/admin-ui/dashboard";

export default function AdminSettings(): JSX.Element {

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-20 my-10">
      <MenuBar /> 

      <div className="flex flex-wrap w-full rounded-xl bg-[#FAFAFA] items-center justify-center py-8 px-10 mt-10 shadow-xl">
        <AdminDash /> 
        <AdminMenu />

      </div>

      <Footer />
    </main>
  );
}
