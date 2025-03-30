'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [loginType, setLoginType] = useState<'password' | 'code'>('password');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSendCode = () => {
    if (!phone || phone.length !== 11) {
      alert('请输入正确的手机号码');
      return;
    }
    // TODO: 调用发送验证码接口
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginType === 'password') {
      if (!username || !password) {
        alert('请输入用户名和密码');
        return;
      }
    } else {
      if (!phone || !code) {
        alert('请输入手机号和验证码');
        return;
      }
    }
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-[12px] bg-ios-blue shadow-ios">
          <span className="text-3xl font-bold text-white">小</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            登录账号
          </h1>
          <p className="text-ios-gray">
            欢迎使用小智.AI设备管理系统
          </p>
        </div>
      </div>
      
      <div className="w-full max-w-sm mt-10">
        <div className="bg-white px-6 py-8 rounded-2xl shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setLoginType('password')}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  loginType === 'password'
                    ? 'bg-white text-ios-blue shadow-sm'
                    : 'text-ios-gray hover:text-gray-900'
                }`}
              >
                密码登录
              </button>
              <button
                onClick={() => setLoginType('code')}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  loginType === 'code'
                    ? 'bg-white text-ios-blue shadow-sm'
                    : 'text-ios-gray hover:text-gray-900'
                }`}
              >
                验证码登录
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {loginType === 'password' ? (
              <>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-ios-gray mb-1">
                    用户名
                  </label>
                  <input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ios-blue/20 focus:border-ios-blue transition-colors text-sm text-gray-900"
                    placeholder="请输入用户名"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-ios-gray mb-1">
                    密码
                  </label>
                  <input
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ios-blue/20 focus:border-ios-blue transition-colors text-sm text-gray-900"
                    placeholder="请输入密码"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ios-gray mb-1">
                    手机号
                  </label>
                  <input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    maxLength={11}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ios-blue/20 focus:border-ios-blue transition-colors text-sm text-gray-900"
                    placeholder="请输入手机号"
                  />
                </div>

                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-ios-gray mb-1">
                    验证码
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      type="text"
                      maxLength={6}
                      className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ios-blue/20 focus:border-ios-blue transition-colors text-sm text-gray-900"
                      placeholder="请输入验证码"
                    />
                    <button
                      type="button"
                      onClick={handleSendCode}
                      disabled={countdown > 0}
                      className="px-3 py-2 bg-ios-blue text-white rounded-xl hover:bg-ios-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm font-medium"
                    >
                      {countdown > 0 ? `${countdown}秒` : '获取验证码'}
                    </button>
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-ios-blue text-white rounded-xl hover:bg-ios-blue/90 transition-colors font-medium mt-4 text-sm"
            >
              登录
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-ios-gray">
              还没有账号？{" "}
              <Link href="/register" className="font-medium text-ios-blue hover:underline">
                立即注册
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 