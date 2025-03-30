'use client';

import StatusBar from '../components/status-bar';
import DeviceCard from '../components/device-card';

export default function DashboardPage() {
  // 模拟设备数据
  const devices = [
    {
      macAddress: 'CC:ba:97:11:a6:ac',
      deviceModel: 'esp32-s3-touch-amoled-1.8',
      lastActive: '6天前',
      appVersion: '1.1.0',
      otaEnabled: true,
    },
    // 可以添加更多设备
  ];

  const handleOtaChange = (enabled: boolean) => {
    console.log('OTA status changed:', enabled);
  };

  const handleDelete = () => {
    console.log('Delete clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StatusBar />
      <div className="container px-2 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {devices.map((device, index) => (
            <DeviceCard
              key={device.macAddress + index}
              {...device}
              onOtaChange={handleOtaChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 