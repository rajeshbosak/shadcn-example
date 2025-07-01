import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Toaster } from "@/components/ui/sonner";
import { Skeleton } from "@/components/ui/skeleton";
import CommandDemo from "./components/my_components/command_demo";
import ContextMenuDemo from "./components/my_components/context_menu_demo";
import UsersComp from "./components/my_components/users_comp";

function Experiments() {
  const [count, setCount] = useState(0);

  // const [date, setDate] = (React.useState < Date) | (undefined > new Date());

  const [date, setDate] = useState(new Date());

  return (
    <>
      <UsersComp />

      <br />
      <CommandDemo />

      <ContextMenuDemo />

      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      {/* <div className="flex min-h-svh flex-col items-center justify-center"> */}
      <Button>Click me</Button>
      {/* </div> */}
      <Toaster />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    </>
  );
}

export default Experiments;
