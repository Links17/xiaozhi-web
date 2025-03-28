import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  return (
    <div className="space-y-6 pb-20">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-ios-gray">Manage your account settings and preferences</p>
      </div>
      
      <Card className="border-ios-gray-light/30 shadow-ios">
        <CardHeader>
          <CardTitle className="text-lg">Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-ios-gray-light mr-4">
              <span className="text-lg font-semibold text-ios-gray-dark">JD</span>
            </div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-ios-gray">john.doe@example.com</p>
            </div>
          </div>
          <Button variant="outline" className="w-full rounded-full">Edit Profile</Button>
        </CardContent>
      </Card>
      
      <Card className="border-ios-gray-light/30 shadow-ios">
        <CardHeader>
          <CardTitle className="text-lg">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Push Notifications</Label>
              <p className="text-sm text-ios-gray">Receive notifications on your device</p>
            </div>
            <Switch id="push-notifications" />
          </div>
          <Separator className="my-2" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Email Notifications</Label>
              <p className="text-sm text-ios-gray">Receive email updates about your tasks</p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-ios-gray-light/30 shadow-ios">
        <CardHeader>
          <CardTitle className="text-lg">Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Dark Mode</Label>
              <p className="text-sm text-ios-gray">Switch between light and dark theme</p>
            </div>
            <Switch id="dark-mode" />
          </div>
        </CardContent>
      </Card>
      
      <Button 
        variant="outline" 
        className="w-full text-ios-red border-ios-red/20 hover:bg-ios-red/10 rounded-full"
      >
        Log Out
      </Button>
    </div>
  );
} 