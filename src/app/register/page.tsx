import Link from "next/link";
import { RegisterForm } from "@/components/login/register-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-[12px] bg-ios-blue shadow-ios">
          <span className="text-3xl font-bold text-white">小</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            创建账号
          </h1>
          <p className="text-ios-gray">
            欢迎加入小智.AI设备管理系统
          </p>
        </div>
      </div>
      
      <div className="w-full max-w-sm mt-10">
        <RegisterForm />
        
        <div className="mt-6 text-center text-sm">
          <p className="text-ios-gray">
            已有账号？{" "}
            <Link href="/login" className="font-medium text-ios-blue hover:underline">
              立即登录
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 