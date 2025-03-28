import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PlusIcon,
  FilterIcon,
  CheckCircle2Icon,
} from "lucide-react";

// Mock data for tasks
const tasks = [
  { 
    id: 1,
    title: "Review project proposal",
    description: "Go through the latest project proposal and provide feedback",
    priority: "High",
    due: "Today, 5:00 PM",
    priorityColor: "text-ios-red bg-ios-red/10 border-ios-red/30",
    completed: false
  },
  { 
    id: 2,
    title: "Prepare presentation slides",
    description: "Create slides for the quarterly review meeting",
    priority: "Medium",
    due: "Tomorrow, 10:00 AM",
    priorityColor: "text-ios-blue bg-ios-blue/10 border-ios-blue/30",
    completed: false
  },
  { 
    id: 3, 
    title: "Team sync meeting",
    description: "Weekly team sync to discuss progress and blockers",
    priority: "Low",
    due: "Wed, 2:00 PM",
    priorityColor: "text-ios-green bg-ios-green/10 border-ios-green/30",
    completed: false
  },
  { 
    id: 4,
    title: "Review design mockups",
    description: "Provide feedback on the new design mockups",
    priority: "Medium",
    due: "Thu, 11:00 AM",
    priorityColor: "text-ios-blue bg-ios-blue/10 border-ios-blue/30",
    completed: true
  },
  { 
    id: 5,
    title: "Update documentation",
    description: "Update the project documentation with recent changes",
    priority: "Low",
    due: "Fri, 4:00 PM",
    priorityColor: "text-ios-green bg-ios-green/10 border-ios-green/30",
    completed: true
  },
];

export default function TasksPage() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Tasks</h2>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="rounded-full border border-ios-gray-light">
            <FilterIcon className="h-4 w-4 mr-1 text-ios-gray" /> Filter
          </Button>
          <Button size="sm" className="rounded-full">
            <PlusIcon className="h-4 w-4 mr-1" /> New Task
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-ios-gray uppercase tracking-wider">To Do</h3>
          {tasks.filter(task => !task.completed).map((task) => (
            <Card 
              key={task.id} 
              className="shadow-ios border-ios-gray-light/30"
            >
              <CardContent className="p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">{task.title}</h4>
                    <p className="text-sm text-ios-gray">{task.description}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="rounded-full mt-1">
                    <CheckCircle2Icon className="h-5 w-5 text-ios-gray" />
                  </Button>
                </div>
                <div className="flex items-center pt-2 border-t border-ios-gray-light/20">
                  <Badge variant="outline" className={`rounded-full ${task.priorityColor}`}>
                    {task.priority}
                  </Badge>
                  <span className="mx-2 text-ios-gray text-xs">•</span>
                  <span className="text-xs text-ios-gray">Due: {task.due}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-ios-gray uppercase tracking-wider">Completed</h3>
          {tasks.filter(task => task.completed).map((task) => (
            <Card 
              key={task.id} 
              className="shadow-ios border-ios-gray-light/30 opacity-70"
            >
              <CardContent className="p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium line-through">{task.title}</h4>
                    <p className="text-sm text-ios-gray">{task.description}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="rounded-full mt-1">
                    <CheckCircle2Icon className="h-5 w-5 text-ios-green" />
                  </Button>
                </div>
                <div className="flex items-center pt-2 border-t border-ios-gray-light/20">
                  <Badge variant="outline" className={`rounded-full ${task.priorityColor}`}>
                    {task.priority}
                  </Badge>
                  <span className="mx-2 text-ios-gray text-xs">•</span>
                  <span className="text-xs text-ios-gray">Completed</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 