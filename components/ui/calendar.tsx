/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-[color:var(--foreground)]",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-[color:var(--muted-foreground)] rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-[color:var(--accent)]/50 [&:has([aria-selected])]:bg-[color:var(--accent)] first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal text-[color:var(--foreground)] aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-[color:var(--primary)] text-[color:var(--primary-foreground)] hover:bg-[color:var(--primary)] hover:text-[color:var(--primary-foreground)] focus:bg-[color:var(--primary)] focus:text-[color:var(--primary-foreground)]",
        day_today:
          "bg-[color:var(--accent)] text-[color:var(--accent-foreground)] font-semibold",
        day_outside:
          "day-outside text-[color:var(--muted-foreground)] opacity-50 aria-selected:bg-[color:var(--accent)]/50 aria-selected:text-[color:var(--muted-foreground)] aria-selected:opacity-30",
        day_disabled:
          "text-[color:var(--muted-foreground)] opacity-50 line-through",
        day_range_middle:
          "aria-selected:bg-[color:var(--accent)] aria-selected:text-[color:var(--accent-foreground)]",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => (
          <ChevronLeft className="h-4 w-4 text-[color:var(--foreground)]" />
        ),
        IconRight: ({ ..._props }) => (
          <ChevronRight className="h-4 w-4 text-[color:var(--foreground)]" />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
