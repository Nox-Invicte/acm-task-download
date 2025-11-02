"use client";

import { useState, useEffect } from "react";
import { Calendar, Users, Trophy, Clock, MapPin, Info, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Animated background components
const TechBackground = () => {
  const codeSnippets = [
    "function escape() {", "if (puzzle.solved) {", "return victory;", "} else {", "tryAgain();", "}",
    "const mystery = {", "clue: 'hidden',", "solution: 'code'", "};", "for(let i=0; i<10; i++){", "decode(cipher[i]);",
    "while(locked) {", "findKey();", "}", "class EscapeRoom {", "solve() {", "this.unlock();", "}",
    "let binary = '101010';", "decrypt(message);", "if(door.isOpen) {", "player.escape();", "}"
  ];

  const techSymbols = ["⚡", "🔐", "🗝️", "⚙️", "🔍", "💻", "🔓", "⌨️", "🖥️", "📊"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Code Snippets */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-xs md:text-sm font-mono text-red-400/30 whitespace-nowrap"
          initial={{
            x: -100,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
          }}
          animate={{
            x: typeof window !== 'undefined' ? window.innerWidth + 100 : 1200,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </motion.div>
      ))}

      {/* Floating Tech Symbols */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`symbol-${i}`}
          className="absolute text-2xl"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== 'undefined' ? window.innerHeight + 50 : 850,
            opacity: 0.3,
          }}
          animate={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: -50,
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut",
          }}
        >
          {techSymbols[Math.floor(Math.random() * techSymbols.length)]}
        </motion.div>
      ))}

      {/* Circuit Pattern Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`circuit-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            width: "100%",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 0.5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glitch Effect Elements */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`glitch-${i}`}
          className="absolute w-20 h-20 border border-red-500/20 rotate-45"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Binary Rain Effect */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-red-400/20 font-mono text-xs"
          style={{
            left: `${(i * 10) + Math.random() * 10}%`,
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: typeof window !== 'undefined' ? window.innerHeight + 50 : 850, opacity: [0, 0.8, 0] }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        >
          {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const targetDate = new Date("2025-10-14T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Add smooth scrolling for navigation
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <main className="min-h-screen bg-gray-800 text-white font-sans relative">
      {/* Consistent background image for all sections */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/section.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>


      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video0.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Animated Tech Background */}
        <TechBackground />
        
        <div className="absolute inset-0 bg-black/10" />
  <div className="relative z-10">
          {/* Powered by Unstop - moved to top */}
          <div className="flex items-center justify-center mb-6 -my-9 py-9">
            <span className="text-white text-lg mr-3 drop-shadow-[0_0_15px_#FFFFFF]">Powered by</span>
            <Image
              src="/unstop.jpg"
              alt="Unstop Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl py-5 font-extrabold tracking-wide">
            <span className="block text-red-600 drop-shadow-[0_0_15px_#FFFFFF]">ESCAPE ROOM</span>
            <span className="block text-white drop-shadow-[0_0_25px_#FFFFFF]">SRM ACM SIGAPP</span>
          </h1>
          {/* Download button placed directly below the title */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={async () => {
                try {
                  const response = await fetch("/level1.pdf");
                  if (!response.ok) throw new Error("File not found");
                  const blob = await response.blob();
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "level1.pdf";
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                  URL.revokeObjectURL(url);
                } catch (error) {
                  console.error("Download failed:", error);
                  alert("Failed to download the file. Please try again.");
                }
              }}
              aria-label="Download Level 1 PDF"
              className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Download Task
            </button>
          </div>

          {/* Answer validation section */}
          <div className="mt-8 flex justify-center">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-6 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  className="px-4 py-2 bg-white/10 border border-white/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      if (answer.trim().toUpperCase() === "ALGORITHM") {
                        setValidationMessage("Correct Answer");
                      } else {
                        setValidationMessage("Incorrect Answer");
                      }
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (answer.trim().toUpperCase() === "ALGORITHM") {
                      setValidationMessage("Correct Answer");
                    } else {
                      setValidationMessage("Incorrect Answer");
                    }
                  }}
                  className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Submit
                </button>
              </div>
              {validationMessage && (
                <div className={`text-lg font-semibold ${validationMessage === "Correct Answer" ? "text-green-400" : "text-red-400"}`}>
                  {validationMessage}
                </div>
              )}
            </div>
          </div>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Where code meets mystery. Solve puzzles, build solutions, win prizes.
          </p>
        </div>
      </section>
    </main>
  );
}