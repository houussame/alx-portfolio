"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FullPageLandingComponent() {
  return (
    <main className="flex-1 flex items-center justify-center px-4">
      <div className="text-center space-y-6 transition-colors duration-200">
        <h2 className="text-sm uppercase tracking-wide">
          Hi, I'm Houssame
        </h2>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl uppercase">
          Web DESIGNER
        </h1>
        <p className="max-w-3xl mx-auto text-xl">
          Software Engineer specialization in Front-End Development from
          Marrakech, Morocco. I create professional websites for businesses if
          you want to do better online.
        </p>
        <Link to="/contact" className="inline-block">
          <Button size="lg">
            Hire Me
          </Button>
        </Link>
      </div>
    </main>
  );
}
