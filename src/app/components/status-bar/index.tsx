'use client';

import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function StatusBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 w-full bg-white border-b border-gray-200">
      <div className="flex items-center h-10 px-2">
        <div className="flex items-center space-x-4">
          <span className="text-base font-medium">小智.AI</span>
          <button className="px-3 py-1.5 bg-blue-50 text-[13px] rounded-md hover:bg-blue-100 transition-colors text-ios-blue">
            设备管理
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <input
              type="search"
              placeholder="输入关键词搜索..."
              className="w-40 px-2 py-1 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ios-blue/20 text-[12px] placeholder:text-gray-400"
            />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2 hover:bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-[13px] text-gray-500">阙</span>
              </div>
              <span className="text-[13px] text-gray-600">138****8888</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 mt-1">
            <DropdownMenuItem className="text-[13px] cursor-pointer">
              账号设置
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[13px] text-red-500 cursor-pointer">
              退出登录
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
} 