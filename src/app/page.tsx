import { redirect } from "next/navigation";

export default function Home() {
  // In a real app, we'd check authentication state here
  // For now, we'll just redirect to the login page
  redirect("/login");
  
  return null;
} 