"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("HomePage");
      // router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* CSS Grid layout */}
      <div className="grid grid-cols-3 gap-0 h-full w-full">
        {/* Left column for V.png */}
        <div className="col-span-1 h-full relative">
          {/* Tinted overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* Original V.png with blur effect */}
          <img src="/V.png" className="h-full w-full object-cover blur-md" alt="V" />
          {/* Login form */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="z-10 bg-white p-8 rounded-lg max-w-md">
              <h1 className="text-xl font-bold my-4">Login</h1>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold cursor-pointer px-6 py-2 rounded-md">
                  Login
                </button>
                {error && (
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}

                <Link className="text-sm mt-3 text-right" href={"/register"}>
                  Don't have an account?{" "}
                  <span className="underline">Register</span>
                </Link>
              </form>
            </div>
          </div>
        </div>

        {/* Right column for R.png and login form */}
        <div className="col-span-2 h-full">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url("/R.png")', backdropFilter: 'blur(0.5px)' }}></div>
        </div>
      </div>
    </div>
  );
}
