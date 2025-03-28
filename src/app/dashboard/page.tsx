import * as React from "react";
import { 
  PlusIcon,
  BellIcon,
  CheckCircle2Icon,
  Clock3Icon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for dashboard
const stats = [
  {
    title: "Total Tasks",
    value: "12",
    change: "+2 from yesterday",
    icon: CheckCircle2Icon,
    color: "bg-ios-blue-light/20 text-ios-blue"
  },
  {
    title: "Upcoming",
    value: "4",
    change: "Due today",
    icon: Clock3Icon,
    color: "bg-ios-gray-light/30 text-ios-gray-dark"
  },
];

const recentTasks = [
  { 
    id: 1,
    title: "Review project proposal",
    priority: "High",
    due: "Today",
    priorityColor: "text-ios-red bg-ios-red/10"
  },
  { 
    id: 2,
    title: "Prepare presentation slides",
    priority: "Medium",
    due: "Tomorrow",
    priorityColor: "text-ios-blue bg-ios-blue/10"
  },
  { 
    id: 3, 
    title: "Team sync meeting",
    priority: "Low",
    due: "3 days",
    priorityColor: "text-ios-green bg-ios-green/10"
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-ios-gray">Welcome back, John Doe</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="rounded-full border border-ios-gray-light">
            <BellIcon className="h-5 w-5 text-ios-gray" />
          </Button>
          <Button size="sm" className="rounded-full">
            <PlusIcon className="h-4 w-4 mr-1" /> New Task
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {stats.map((stat, index) => (
          <Card key={index} className="border-ios-gray-light/30 shadow-ios">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-ios-gray-dark">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${stat.color}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-ios-gray mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Tasks</h3>
          <Button variant="link" className="text-ios-blue">View all</Button>
        </div>
        <div className="space-y-3">
          {recentTasks.map((task) => (
            <Card key={task.id} className="shadow-ios border-ios-gray-light/20">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium">{task.title}</h4>
                  <div className="flex items-center text-xs">
                    <Badge variant="outline" className={`rounded-full ${task.priorityColor}`}>
                      {task.priority} Priority
                    </Badge>
                    <span className="mx-2 text-ios-gray">•</span>
                    <span className="text-ios-gray">Due: {task.due}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="rounded-full border border-ios-gray-light">
                  <CheckCircle2Icon className="h-4 w-4 text-ios-gray" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 