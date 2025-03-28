"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // In a real app, you would handle actual registration here
    // For now, we'll just simulate a delay and redirect to login
    setTimeout(() => {
      setIsLoading(false);
      router.push("/login");
    }, 1000);
  }

  return (
    <div className="w-full p-5 bg-white rounded-[20px] shadow-ios">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-ios-blue">Sign Up</h2>
        <p className="mt-2 text-sm text-ios-gray">
          Create a new account to get started
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-ios-gray-dark">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            autoFocus
            className="h-11 bg-ios-gray-light/30 border-transparent focus:border-ios-blue"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-ios-gray-dark">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="h-11 bg-ios-gray-light/30 border-transparent focus:border-ios-blue"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-ios-gray-dark">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            className="h-11 bg-ios-gray-light/30 border-transparent focus:border-ios-blue"
          />
          <p className="text-xs text-ios-gray">
            Password must be at least 8 characters long
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-ios-gray-dark">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
            className="h-11 bg-ios-gray-light/30 border-transparent focus:border-ios-blue"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full h-11 text-base font-medium rounded-full mt-2"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>
      </form>
    </div>
  );
} 