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
  const [phone, setPhone] = React.useState<string>("");
  const [verificationCode, setVerificationCode] = React.useState<string>("");
  const [loginType, setLoginType] = React.useState<"email" | "phone">("email");
  const [countdown, setCountdown] = React.useState<number>(0);
  const router = useRouter();

  const startCountdown = () => {
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendCode = async () => {
    if (!phone || phone.length !== 11) {
      alert("请输入正确的手机号");
      return;
    }

    try {
      const response = await fetch("https://xiaozhi.me/api/auth/send-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: `+86${phone}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        startCountdown();
      } else {
        alert("发送验证码失败，请稍后重试");
      }
    } catch (error) {
      console.error("发送验证码出错:", error);
      alert("发送验证码失败，请稍后重试");
    }
  };

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
        <h2 className="text-xl font-semibold text-ios-blue">登录</h2>
        <p className="mt-2 text-sm text-ios-gray">
          选择登录方式访问您的账号
        </p>
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-full bg-ios-gray-light/30 p-1">
          <button
            type="button"
            onClick={() => setLoginType("email")}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
              loginType === "email"
                ? "bg-white text-ios-blue shadow-sm"
                : "text-ios-gray hover:text-ios-gray-dark"
            }`}
          >
            邮箱登录
          </button>
          <button
            type="button"
            onClick={() => setLoginType("phone")}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
              loginType === "phone"
                ? "bg-white text-ios-blue shadow-sm"
                : "text-ios-gray hover:text-ios-gray-dark"
            }`}
          >
            手机号登录
          </button>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {loginType === "email" ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-ios-gray-dark">
                邮箱
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
                  密码
                </Label>
                <Link
                  href="/reset-password"
                  className="text-xs font-medium text-ios-blue hover:underline"
                >
                  忘记密码？
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
          </>
        ) : (
          <>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-ios-gray-dark">
                手机号
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="请输入手机号"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                pattern="[0-9]{11}"
                autoComplete="tel"
                autoFocus
                className="h-11 bg-ios-gray-light/30 border-transparent focus:border-ios-blue"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="verificationCode" className="text-sm font-medium text-ios-gray-dark">
                验证码
              </Label>
              <div className="flex gap-2">
                <Input
                  id="verificationCode"
                  type="text"
                  placeholder="请输入验证码"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                  pattern="[0-9]{6}"
                  className="h-11 bg-ios-gray-light/30 border-transparent focus:border-ios-blue"
                />
                <Button
                  type="button"
                  onClick={handleSendCode}
                  disabled={countdown > 0}
                  className="h-11 px-4 text-sm font-medium rounded-full whitespace-nowrap"
                >
                  {countdown > 0 ? `${countdown}秒后重试` : "获取验证码"}
                </Button>
              </div>
            </div>
          </>
        )}
        
        <Button 
          type="submit" 
          className="w-full h-11 text-base font-medium rounded-full mt-2"
          disabled={isLoading}
        >
          {isLoading ? "登录中..." : "登录"}
        </Button>
      </form>
    </div>
  );
} 