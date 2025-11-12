"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const BrilliantMove: React.FC = () => {
  return (
    <section className="bg-[#002b49] text-white min-h-screen flex flex-col md:flex-row justify-between px-8 md:px-16 pb-12 gap-8">
      {/* LEFT SECTION */}
      <div className="flex flex-col justify-between md:w-1/2 space-y-8">
        {/* <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            What’s your next <br /> brilliant move?
          </h1>
          <p className="text-gray-200 mt-4 max-w-md text-lg">
            Game-changing work. People-powered growth. At McKinsey, we help you
            think bigger, build stronger, and expand opportunity for all.
          </p>
          <div className="mt-8">
            <button className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-3xl">→</span>
            </button>
          </div>
        </div> */}

          <div>
            <h1 className="text-6xl font-serif leading-tight mb-8">
              What's your next<br />
              <span className="block mt-2">brilliant move?</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Game-changing work. People-powered growth. At V10X, we help you
              think bigger, build stronger, and expand opportunity for all.
            </p>
          </div>
          <button className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors flex items-center justify-center">
            <ArrowRight size={32} />
          </button>

        {/* Lower grid (two cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {/* BLOG POST CARD */}
          <div className="bg-[#003b63] rounded-xl overflow-hidden">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80"
                alt="Blog Post"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="uppercase text-xs tracking-wider text-gray-300 mb-1">
                Blog Post
              </p>
              <h3 className="text-lg font-semibold leading-snug">
                Beyond the buzz: Making tech work for everyone
              </h3>
            </div>
          </div>

          {/* SURVEY CARD */}
          <div className="bg-[#003b63] rounded-xl overflow-hidden relative">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1504265673573-0c0b6c7b9f7b?auto=format&fit=crop&w=1600&q=80"
                alt="Survey AI 2025"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="uppercase text-xs tracking-wider text-gray-300 mb-1">
                Survey
              </p>
              <h3 className="text-lg font-semibold leading-snug">
                The state of AI in 2025: Agents, innovation, and transformation
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION (CASE STUDY CARD) */}
      <div className="md:w-1/2 bg-gradient-to-b from-[#0b4a7d] to-[#1a63a8] rounded-xl flex flex-col justify-end p-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
            alt="AI Dinner Case Study"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative z-10">
          <p className="uppercase text-xs tracking-wider text-gray-300 mb-2">
            Case Study
          </p>
          <h2 className="text-3xl font-semibold leading-snug">
            A family-owned kitchen and homeware company brings the power of AI
            to the dinner table
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BrilliantMove;
