"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // In a real app, you would handle actual authentication here
    // For now, we'll just simulate a delay and redirect to dashboard
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1000);
  }

  return (
    <div className="w-full p-5 bg-white rounded-[20px] shadow-ios">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-ios-blue">Sign In</h2>
        <p className="mt-2 text-sm text-ios-gray">
          Enter your credentials to access your account
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
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
            autoFocus
            className="h-11 bg-ios-gray-light/30 border-transparent focus:border-ios-blue"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm font-medium text-ios-gray-dark">
              Password
            </Label>
            <Link
              href="/reset-password"
              className="text-xs font-medium text-ios-blue hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="h-11 bg-ios-gray-light/30 border-transparent focus:border-ios-blue"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full h-11 text-base font-medium rounded-full mt-2"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </div>
  );
} 