"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    // <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    // </div>
  );
}

const testimonials = [
  {
    quote:
      "Quiztos has transformed my Web3 learning journey. The AI-powered quizzes adapt to my knowledge level, making complex concepts digestible and engaging. It's like having a personal tutor!",
    name: "Swastik",
    title: "Open Source Developer",
  },
  {
    quote:
      "The integration of blockchain with quiz validation is brilliant. As someone deeply involved in Web3, I appreciate how Quiztos maintains integrity while making learning fun and rewarding.",
    name: "Satyam",
    title: "Blockchain Engineer",
  },
  {
    quote:
      "What sets Quiztos apart is its innovative approach to ed-tech. The platform combines AI's adaptability with blockchain's transparency to create an unparalleled learning ecosystem.",
    name: "Yash",
    title: "FullStack Developer",
  },
  {
    quote:
      "I've tried many learning platforms, but Quiztos stands out with its real-time feedback and personalized question generation. The decentralized rewards system adds extra motivation!",
    name: "Priya",
    title: "DeFi Developer",
  },
  {
    quote:
      "As an educator in the Web3 space, I'm impressed by how Quiztos balances technical depth with accessibility. The AI ensures questions remain challenging yet achievable for all skill levels.",
    name: "Rakesh",
    title: "Blockchain Educator",
  },
  {
    quote:
      "The gamification elements in Quiztos make learning addictive! I love how each quiz feels unique thanks to the AI, and the blockchain integration ensures my achievements are verifiable.",
    name: "Rachit",
    title: "Smart Contract Developer",
  },
];
