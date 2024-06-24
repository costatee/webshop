import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../lib/AuthContext';
import { Card, Input, Button, Typography } from '@material-tailwind/react';

interface Contact {
  email: string;
  password: string;
}

const LoginForm: React.FC = (): JSX.Element => {
  const router = useRouter(); 
  const [contact, setContact] = useState<Contact>({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 
  const { setToken } = useContext(AuthContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    console.log(contact.email, contact.password);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
        credentials: 'include', // Include cookies in the request
      });

      if (!response.ok) {
        if (response.status === 401) {
          setErrorMessage("Invalid credentials. Please try again.");
        } else {
          setErrorMessage("An unexpected error occurred. Please try again.");
        }
        throw new Error('HTTP error');
      }

      const data = await response.json();
      setToken(data.response.token); 

      if (data.role === 'admin') {
        router.push("/admin");
        console.log("Welcome admin");
      } else {
        router.push("/menu");
        console.log("Login success");
      }

    } catch (error) {
      console.error("Authentication failed:", error);
      setToken(null);
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Welcome back!
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Login to continue.
      </Typography>
      <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            value={contact.email}
            name="email"
            onChange={handleChange}
            labelProps={{ className: "before:content-none after:content-none" }}
            crossOrigin={undefined}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            value={contact.password}
            name="password"
            onChange={handleChange}
            labelProps={{ className: "before:content-none after:content-none" }}
            crossOrigin={undefined}
          />
        </div>
        {errorMessage && (
          <Typography color="red" className="mt-2 text-center font-normal">
            {errorMessage}
          </Typography>
        )}
        <Button className="mt-6" type="submit" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <Link href="/register" className="font-medium text-gray-900">
            Register
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default LoginForm;
