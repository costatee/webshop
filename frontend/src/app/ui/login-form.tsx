import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { AuthContext } from '../lib/AuthContext';
import { Card, Input, Button, Typography, Checkbox } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';

export function LoginForm(): JSX.Element {
    const router = useRouter(); 
    const [contact, setContact] = useState<{ email: string; password: string }>({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState<string | null>(null); 
    const { setToken } = useContext(AuthContext);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setContact(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        console.log("handleLogin");
        event.preventDefault();
        console.log(contact.email, contact.password);
    
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: contact.email,
                    password: contact.password
                })
            });
    
            if (response.ok) {
                console.log("login success");
                const data = await response.json();
                setToken(data.response.token); 
                router.push("/menu");
            } else {
                router.push("/login");
                throw new Error('HTTP error');
            }
        } catch (error) {
            console.error("Authentication failed:", error);
            setToken(null);
            localStorage.removeItem("token");
            if (error instanceof Error) {
                setErrorMessage(error.message); 
            } else {
                setErrorMessage("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
      <Card
        color="transparent"
        shadow={false}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h4"
          color="blue-gray"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Welcome back!
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Login to continue.
        </Typography>
        <form
          onSubmit={handleLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={contact.email}
              name="email"
              onChange={handleChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={contact.password}
              name="password"
              onChange={handleChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
          <Button
            className="mt-6"
            type="submit"
            fullWidth
            onPointerLeaveCapture={undefined}
          >
            login
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal"
            onPointerLeaveCapture={undefined}
          >
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-gray-900">
              Register
            </Link>
          </Typography>
        </form>
      </Card>
    );
}
