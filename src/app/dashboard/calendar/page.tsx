import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  PlusIcon
} from "lucide-react";

// Helper function to generate calendar dates
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

// Mock events data
const events = [
  {
    id: 1,
    date: "2023-08-12",
    title: "Team Meeting",
    time: "10:00 AM",
    category: "Work",
    color: "bg-ios-blue text-white"
  },
  {
    id: 2,
    date: "2023-08-12",
    title: "Lunch with Client",
    time: "12:30 PM",
    category: "Work",
    color: "bg-ios-blue text-white"
  },
  {
    id: 3,
    date: "2023-08-15",
    title: "Project Deadline",
    time: "5:00 PM",
    category: "Work",
    color: "bg-ios-red text-white"
  },
  {
    id: 4,
    date: "2023-08-18",
    title: "Birthday Party",
    time: "7:00 PM",
    category: "Personal",
    color: "bg-ios-green text-white"
  },
];

export default function CalendarPage() {
  // Use current month and year for demonstration
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Generate calendar days
  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }
  
  // Find events for the 12th day (for demonstration)
  const selectedDay = 12;
  const selectedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
  const todayEvents = events.filter(event => event.date === selectedDate);
  
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Calendar</h2>
        <Button size="sm" className="rounded-full">
          <PlusIcon className="h-4 w-4 mr-1" /> Add Event
        </Button>
      </div>
      
      <Card className="border-ios-gray-light/30 shadow-ios">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <CardTitle>
              {monthNames[currentMonth]} {currentYear}
            </CardTitle>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {dayNames.map(day => (
              <div key={day} className="text-xs font-medium text-ios-gray-dark py-1">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {calendarDays.map((day, index) => (
              <div 
                key={index} 
                className={`py-2 rounded-md text-sm ${
                  day === selectedDay 
                    ? "bg-ios-blue text-white font-medium" 
                    : day === today.getDate() && currentMonth === today.getMonth()
                      ? "bg-ios-gray-light/50 font-medium"
                      : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            Events for {monthNames[currentMonth]} {selectedDay}
          </h3>
          <Badge variant="outline" className="text-ios-blue">
            {todayEvents.length} events
          </Badge>
        </div>
        <div className="space-y-3">
          {todayEvents.map(event => (
            <Card key={event.id} className="shadow-ios border-ios-gray-light/30">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className={`w-1.5 self-stretch rounded-full ${event.color.split(' ')[0]}`} />
                <div className="flex-1">
                  <h4 className="font-medium">{event.title}</h4>
                  <div className="flex items-center text-xs text-ios-gray mt-1">
                    <span>{event.time}</span>
                    <span className="mx-2">•</span>
                    <span>{event.category}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 