import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import 'material-symbols';
import Link from "next/link";


export default function AdminMenu(): JSX.Element {

    return (
        <div className="flex flex-col h-[80vh] justify-start mr-auto my-10 w-auto gap-4">
            <div className="flex">
                <span className="material-symbols-outlined mr-4">home</span>
                <Link href="/admin">
                    <Typography
                        variant="paragraph"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                            Dashboard
                    </Typography>
                </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined mr-4">group</span>
            <Link href="/admin/team">
                    <Typography
                        variant="paragraph"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                            Team Management
                    </Typography>
            </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined mr-4">restaurant_menu</span>
            <Link href="/admin/menu">
                    <Typography
                        variant="paragraph"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                            Menu
                    </Typography>
            </Link>
            </div>
            <div className="flex">
            <span className="material-symbols-outlined mr-4">format_list_numbered</span>
            <Link href="/admin/reports">
                    <Typography
                        variant="paragraph"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                            Reports
                    </Typography>
            </Link>
            </div>
            <div className="flex">
                <span className="material-symbols-outlined mr-4">settings</span>
                <Link href="/admin/settings">
                    <Typography
                        variant="paragraph"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                            Settings
                    </Typography>
                </Link>
            </div>
            <div className="flex">
                <Link href="/admin/logout">
                    <Typography
                        variant="paragraph"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                            <Button
                                className="mt-1"
                                variant="outlined"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                                    Logout
                            </Button>
                    </Typography>
                </Link>
            </div>
        </div>
    );
  }