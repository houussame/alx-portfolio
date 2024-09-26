import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-lg p-8 rounded-lg shadow-lg transition-colors duration-200">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact Me
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
            >
              Name
            </label>
            <Input id="name" placeholder="Your Name" />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Message
            </label>
            <Textarea id="message" placeholder="Your message here..." />
          </div>
          <Button className="w-full">Send Message</Button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
