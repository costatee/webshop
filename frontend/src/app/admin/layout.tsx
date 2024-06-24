import React from 'react';
import AdminLayout from './admin-ui/admin-layout';

export default function AdminSectionLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
