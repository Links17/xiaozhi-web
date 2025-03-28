import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-[12px] bg-ios-blue shadow-ios">
          <span className="text-3xl font-bold text-white">小</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to Xiaozhi
          </h1>
          <p className="text-ios-gray">
            Sign in to access your account
          </p>
        </div>
      </div>
      
      <div className="w-full max-w-sm mt-10">
        <LoginForm />
        
        <div className="mt-6 text-center text-sm">
          <p className="text-ios-gray">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-ios-blue hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 