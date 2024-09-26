import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <div className="text-center space-y-6 p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
