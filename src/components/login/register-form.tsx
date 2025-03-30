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
        <h2 className="text-xl font-semibold text-ios-blue">注册</h2>
        <p className="mt-2 text-sm text-ios-gray">
          创建新账号开始使用
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="block text-sm font-medium text-ios-gray mb-1">
            姓名
          </Label>
          <Input
            id="name"
            placeholder="请输入您的姓名"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            autoFocus
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ios-blue/20 focus:border-ios-blue transition-colors text-sm text-gray-900"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="block text-sm font-medium text-ios-gray mb-1">
            邮箱
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="请输入您的邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ios-blue/20 focus:border-ios-blue transition-colors text-sm text-gray-900"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="block text-sm font-medium text-ios-gray mb-1">
            密码
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="请设置密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ios-blue/20 focus:border-ios-blue transition-colors text-sm text-gray-900"
          />
          <p className="text-xs text-ios-gray">
            密码长度至少为8个字符
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="block text-sm font-medium text-ios-gray mb-1">
            确认密码
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="请再次输入密码"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ios-blue/20 focus:border-ios-blue transition-colors text-sm text-gray-900"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full py-2 bg-ios-blue text-white rounded-xl hover:bg-ios-blue/90 transition-colors font-medium mt-4 text-sm"
          disabled={isLoading}
        >
          {isLoading ? "正在创建账号..." : "创建账号"}
        </Button>
      </form>
    </div>
  );
} 