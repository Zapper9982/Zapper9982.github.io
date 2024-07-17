"use client";
import { stack } from "@/data";
import { ParallaxScroll } from "../components/ui/ParallaxScroll";

export function TechStack() {


  return (
  <div className="flex  flex-col justify-center items-center mt-16" id="tech">
  <h1 className="text-6xl font-bold">My <span className="text-orange-300 ">Ultimate</span> Tech Stack</h1>
  <p className="text-lime-100">scroll down on the images to see all of them</p>
  <ParallaxScroll images={stack} />
  </div>);
}

