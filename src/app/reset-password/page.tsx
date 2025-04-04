import Link from "next/link";
import { ResetPasswordForm } from "@/components/login/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-[12px] bg-ios-blue shadow-ios">
          <span className="text-3xl font-bold text-white">小</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Reset Your Password
          </h1>
          <p className="text-ios-gray">
            Enter your email to receive a password reset link
          </p>
        </div>
      </div>
      
      <div className="w-full max-w-sm mt-10">
        <ResetPasswordForm />
        
        <div className="mt-6 text-center text-sm">
          <p className="text-ios-gray">
            Remember your password?{" "}
            <Link href="/login" className="font-medium text-ios-blue hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 