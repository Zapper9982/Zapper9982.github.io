"use client";
import { stack } from "@/data";
import { ParallaxScroll } from "../components/ui/ParallaxScroll";

export function TechStack() {


  return (
  <div className="flex flex-col justify-center items-center py-20" id="tech">
    <h1 className="heading text-center mb-10">
      My <span className="text-purple">Tech Stack</span>
    </h1>
    <p className="text-white-200 text-center mb-10 max-w-2xl px-4">
      A curated list of technologies and tools I use to build scalable and efficient applications.
    </p>
    <ParallaxScroll images={stack} />
  </div>);
}

