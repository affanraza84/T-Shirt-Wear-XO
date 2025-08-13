"use client";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

type SafeUser = {
  firstName: string | null;
  lastName: string | null;
  email: string;
  imageUrl: string;
};

export default function AccountClient({ user }: { user: SafeUser }) {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-sky-100 to-white p-6 flex items-center justify-center overflow-hidden">
      {/* Animated T-shirt SVGs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <svg
            key={i}
            className="absolute text-sky-200 animate-floatAndDrift"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 60}px`,
              height: `${60 + Math.random() * 60}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 3l5 3v4l-3 1v10H6V11L3 10V6l5-3h2v4h4V3h2z" />
          </svg>
        ))}
      </div>

      {/* Main Card */}
      <div className="relative z-10 bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <Image
            src={user.imageUrl}
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full ring-4 ring-sky-300 shadow-md"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-gray-500">{user.email}</p>

        <div className="space-y-4 pt-4">
          <a
            href="/manageAccount"
            className="inline-block w-full bg-sky-500 text-white py-2 rounded-xl font-medium hover:bg-sky-600 transition"
          >
            Manage Account
          </a>
        </div>
        <UserButton afterSignOutUrl="/" />
        <p className="text-sm text-gray-400 mt-6">
          Account page powered by Clerk
        </p>
      </div>
    </main>
  );
}
