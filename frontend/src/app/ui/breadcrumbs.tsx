import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BBreadcrumbs(): JSX.Element {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  const breadcrumbLinks = pathSegments.map((segment: any, index: number) => {
    const decodedSegment = decodeURIComponent(segment);
    const cleanSegment = decodedSegment.replace(/%/g, ' ');
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;

    return (
      <Link key={href} href={href} className={isLast ? "" : "opacity-60"}>
        {segment.charAt(0).toUpperCase() + cleanSegment.slice(1)}
      </Link>
    );
  });

  return (
    <Breadcrumbs fullWidth >
      <Link href="/" className="opacity-60">
        Home
      </Link>
      {breadcrumbLinks}
    </Breadcrumbs>
  );
}
