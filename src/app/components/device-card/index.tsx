'use client';

import { FC, useState } from 'react';

interface DeviceCardProps {
  macAddress: string;
  deviceModel: string;
  lastActive: string;
  appVersion: string;
  otaEnabled: boolean;
  onOtaChange?: (enabled: boolean) => void;
  onDelete?: () => void;
}

const DeviceCard: FC<DeviceCardProps> = ({
  macAddress,
  deviceModel,
  lastActive,
  appVersion,
  otaEnabled: initialOtaEnabled,
  onOtaChange,
  onDelete,
}) => {
  const [otaEnabled, setOtaEnabled] = useState(initialOtaEnabled);

  const handleOtaToggle = () => {
    const newValue = !otaEnabled;
    setOtaEnabled(newValue);
    onOtaChange?.(newValue);
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gray-200 transition-colors">
      {/* 第一行：MAC地址和操作按钮 */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[15px] font-medium text-gray-800">{macAddress}</span>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleOtaToggle}
            className={`relative w-[34px] h-[20px] rounded-full transition-all duration-200 ${
              otaEnabled ? 'bg-ios-blue' : 'bg-gray-200'
            }`}
          >
            <span 
              className={`absolute w-[16px] h-[16px] bg-white rounded-full top-[2px] transition-transform duration-200 ease-in-out ${
                otaEnabled ? 'left-[16px]' : 'left-[2px]'
              } shadow-sm`}
            />
          </button>
          <button 
            onClick={onDelete}
            className="p-2 rounded-full hover:bg-red-50 transition-colors group"
          >
            <svg 
              className="w-[18px] h-[18px] text-gray-400 group-hover:text-red-500 transition-colors" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-blue-50 transition-colors">
            <svg className="w-[18px] h-[18px] text-ios-blue" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>

      {/* 第二行：设备型号 */}
      <div className="mb-4">
        <div className="text-[13px] text-gray-500">
          设备型号：<span className="text-gray-600">{deviceModel}</span>
        </div>
      </div>

      {/* 第三行：功能按钮组 */}
      <div className="flex items-center gap-2 mb-4">
        <button className="px-3 py-1.5 bg-blue-50 text-[13px] rounded-md hover:bg-blue-100 transition-colors text-ios-blue">
          配置角色
        </button>
        <button className="px-3 py-1.5 bg-blue-50 text-[13px] rounded-md hover:bg-blue-100 transition-colors text-ios-blue">
          声纹识别
        </button>
        <button className="px-3 py-1.5 bg-blue-50 text-[13px] rounded-md hover:bg-blue-100 transition-colors text-ios-blue">
          历史对话
        </button>
      </div>

      {/* 底部信息 */}
      <div className="flex justify-between items-center">
        <span className="text-[13px] text-gray-500">最近对话：<span className="text-gray-600">{lastActive}</span></span>
        <span className="text-[13px] text-gray-500">APP版本：<span className="text-gray-600">{appVersion}</span></span>
      </div>
    </div>
  );
};

export default DeviceCard; 