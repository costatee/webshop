// components/CardDefault.tsx
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

interface CardDefaultProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

export const CardDefault: React.FC<CardDefaultProps> = ({ imageUrl, title, description, buttonText }) => {
  return (
    <Card className="my-2 mx-1 w-96" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader color="blue-gray" className="mt-4 relative h-56" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Image
          src={imageUrl}
          alt="card-image"
          layout="fill"
          className="object-cover"
        />
      </CardHeader>
      <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography variant="h5" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {title}
        </Typography>
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Button placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};
