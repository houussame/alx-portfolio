import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, ArrowUp } from "lucide-react";
import { useTheme } from "@/theme";

const Tools = () => {
  const { theme, toggleTheme } = useTheme();

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-14 right-0 mb-6 mr-6 transition-colors duration-100">
      <div className="flex gap-2 flex flex-col">
        <Button
          className="rounded-full"
          variant="default"
          size="icon"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
        <Button
          className="rounded-full"
          variant="default"
          size="icon"
          onClick={ScrollToTop}
        >
          <ArrowUp />
        </Button>
      </div>
    </div>
  );
};

export default Tools;
