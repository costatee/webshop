import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { AuthContext } from '../lib/AuthContext';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';

export function RegisterForm(): JSX.Element {
    const router = useRouter(); 
    const [contact, setContact] = useState<{ name: string; email: string; password: string; rePassword: string }>({
        name: '',
        email: '',
        password: '',
        rePassword: ''
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

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(contact.name, contact.email, contact.password);
    
        if (contact.password !== contact.rePassword) {
            setErrorMessage("Passwords do not match");
            console.log("passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: contact.name,
                    email: contact.email,
                    password: contact.password,
                    rePassword: contact.rePassword
                })
            });
    
            if (response.ok) {
                console.log("registration successfull");
                const data = await response.json();
                setToken(data.response.token); 
                router.push("/login");
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
            Welcome!
        </Typography>
        <Typography color="gray" className="mt-1 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Register to continue.
        </Typography>
        <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Name
            </Typography>
            <Input
                size="lg"
                placeholder="Your Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                value={contact.name}
                name="name"
                onChange={handleChange}
                labelProps={{
                    className: "before:content-none after:content-none",
                }} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined} 
                crossOrigin={undefined}            
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
            <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
            <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Confirm Password
            </Typography>
            <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                value={contact.rePassword}
                name="rePassword"
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
                placeholder={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined}
            >register</Button>
            <Typography 
                color="gray" 
                className="mt-4 text-center font-normal"
                placeholder={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined}
            >Already have an account?{" "}
            <Link href="/login" className="font-medium text-gray-900 opacity-80 hover:opacity-100">
                Login
            </Link>
            </Typography>
        </form>
        </Card>
    );
}
