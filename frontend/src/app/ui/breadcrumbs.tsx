import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
 
export function BBreadcrumbs(): JSX.Element {
  return (
    <Breadcrumbs fullWidth placeholder="blur" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <Link href="/" className="opacity-60">
        Home
      </Link>
      <Link href="/menu" className="opacity-60">
        Menu
      </Link>
      <Link href="/menu/ramen">
        Ramen
    </Link>
    </Breadcrumbs>
  );
}
