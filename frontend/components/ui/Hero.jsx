import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Land Your Next Role with <span className="text-primary">NextStep</span>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl">
        AI-powered resume analysis, personalized roadmaps, and interview prep — all in one place.
      </p>
      <div className="mt-8 flex gap-4">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </section>
  );
}