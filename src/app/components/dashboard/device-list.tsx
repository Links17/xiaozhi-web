'use client';

import DeviceCard from '../device-card';

interface DeviceListProps {
  devices: Array<{
    macAddress: string;
    deviceModel: string;
    lastActive: string;
    appVersion: string;
    otaEnabled: boolean;
  }>;
}

export default function DeviceList({ devices }: DeviceListProps) {
  const handleOtaChange = (enabled: boolean) => {
    console.log('OTA status changed:', enabled);
    // 这里可以处理 OTA 状态变化
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {devices.map((device, index) => (
        <DeviceCard
          key={device.macAddress + index}
          {...device}
          onOtaChange={handleOtaChange}
        />
      ))}
    </div>
  );
} 