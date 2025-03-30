'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">页面未找到</h2>
        <p className="text-gray-600 mb-6">抱歉，您访问的页面不存在。</p>
        <button
          onClick={() => router.push('/login')}
          className="px-4 py-2 bg-ios-blue text-white rounded-lg hover:bg-ios-blue/90 transition-colors"
        >
          返回登录页面
        </button>
      </div>
    </div>
  );
} 