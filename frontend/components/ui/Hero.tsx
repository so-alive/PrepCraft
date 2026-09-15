"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center text-center py-32 px-4 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30 transition-opacity"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.25), transparent 40%)`,
        }}
      />
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight relative z-10">
        Land Your Next Role with <span className="text-primary">NextStep</span>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl relative z-10">
        AI-powered resume analysis, personalized roadmaps, and interview prep — all in one place.
      </p>
      <div className="mt-8 flex gap-4 relative z-10">
        <Button size="lg" className="cursor-pointer">Get Started</Button>
        <Button size="lg" variant="outline" className="cursor-pointer">Learn More</Button>
      </div>
    </section>
  );
}