"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" px-2 border-none cursor-pointer hover:bg-transparent flex flex-col justify-center" onClick={() => { setTheme(theme === "light" ? "dark" : "light") }}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute top-0 bottom-0 my-auto h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  )
}
