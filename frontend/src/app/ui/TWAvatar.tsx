import { Avatar } from "@material-tailwind/react";
 
export function AvatarDefault() {
  return <Avatar 
    src="https://docs.material-tailwind.com/img/face-2.jpg" 
    alt="avatar" 
    placeholder={undefined} 
    onPointerEnterCapture={undefined} 
    onPointerLeaveCapture={undefined}
/>;
}

export function AvatarWithBorder() {
    return (
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    );
  }