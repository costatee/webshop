import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BBreadcrumbs(): JSX.Element {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  const breadcrumbLinks = pathSegments.map((segment: any, index: number) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;

    return (
      <Link key={href} href={href} className={isLast ? "" : "opacity-60"}>
        {segment.charAt(0).toUpperCase() + segment.slice(1)}
      </Link>
    );
  });

  return (
    <Breadcrumbs fullWidth placeholder="blur" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <Link href="/" className="opacity-60">
        Home
      </Link>
      {breadcrumbLinks}
    </Breadcrumbs>
  );
}
