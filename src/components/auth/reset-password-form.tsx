"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ResetPasswordForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // In a real app, you would handle actual password reset here
    // For now, we'll just simulate a delay and show a success message
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  }

  return (
    <div className="w-full p-5 bg-white rounded-[20px] shadow-ios">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-ios-blue">Reset Password</h2>
        <p className="mt-2 text-sm text-ios-gray">
          We'll send you a link to reset your password
        </p>
      </div>
      
      {!isSubmitted ? (
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
          <Button 
            type="submit" 
            className="w-full h-11 text-base font-medium rounded-full mt-2"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="rounded-lg bg-ios-green-light/20 p-4 border border-ios-green/30">
            <div className="flex items-center space-x-2 text-ios-green">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="font-medium">Check your email</p>
            </div>
            <p className="mt-2 text-sm text-ios-green-dark">
              We've sent a password reset link to your email address. Please check your inbox.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="w-full h-11 text-base font-medium rounded-full"
            onClick={() => router.push("/login")}
          >
            Back to Sign In
          </Button>
        </div>
      )}
    </div>
  );
} 