"use client";

import { CardDashboardSingle } from "./admin-ui/dashboard-card";

export default function AdminPage() {
  return (
    <div>
      <CardDashboardSingle title="Orders" subtitle="Today" icon="shopping_cart" color="green" amount={100} difference={10} currency="€" />
      <CardDashboardSingle title="Orders" subtitle="Today" icon="shopping_cart" color="green" amount={100} difference={10} currency="€" />
    </div>
  );
}