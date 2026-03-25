"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { use, useRef, useState } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInSection, setIsInSection] = useState(false);
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  const [relativeMousePosition, setRelativeMousePosition] = useState({
    x: 0,
    y: 0,
  });

 
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const inSection =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    setIsInSection(inSection);
    console.log(isInSection);
    if (inSection) {
      setRelativeMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseOut = () => {
    setIsInSection(false);
  };

 
  useGSAP(() => {
     const split = new SplitText(".split",{type:"chars",charsClass:"char"});
    if (isInSection) {
      gsap.fromTo(
        ".image-wrapper",
        {
          opacity: 0,
          width: 0,
        },
        {
          opacity: 1,
          width: "200px",
          duration: 0.8,
          ease: "expo.out",
        },
      );
    } else {
      gsap.fromTo(
        ".image-wrapper",
        {
          opacity: 1,
          width: "200px",
        },
        {
          opacity: 0,
          width: 0,
          duration: 0.8,
          ease: "expo.out",
        },
      );
    }
     // Set initial state for all chars
    gsap.set(split.chars, { opacity: 0.2 });
    
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 30%",
      end: "top 5%",
      scrub: 0.5,
      onUpdate: self => {
        const progress = self.progress;
        const totalChars = split.chars.length;
        
        split.chars.forEach((char, index) => {
          // Calculate smooth progress for each character
          const charStart = index / totalChars;
          const charEnd = (index + 1) / totalChars;
          
          // Create smooth transition zone
          const charProgress = (progress - charStart) / (charEnd - charStart);
          const clampedProgress = Math.max(0, Math.min(1, charProgress));
          
          // Smooth opacity transition from 0.2 to 1
          const opacity = 0.2 + (0.8 * clampedProgress);
          
          gsap.to(char, {
            opacity: opacity,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true
          });
        });
      }
    });

    
        
  
  }, [isInSection]);
  useGSAP(() => {
 gsap.to(cursorRef.current, {
    left: mousePosition.x + 70,
    top: mousePosition.y + 70,
    duration: 0.6,
    ease: "expo.out",
    overwrite: 'auto'
  });
  gsap.set(cursorRef.current, {
    transform: "translate(-50%, -50%)",
  });
  }, [mousePosition]);

  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  if (!isTabletOrDesktop) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Switch to a Larger Device</h2>
          <p className="text-black/70">This animation is best viewed on tablet or desktop for the full interactive experience.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] relative pt-14">
      {/* Decorative Elements */}
      <div
        style={{
          top: `${Math.max(200, Math.min(mousePosition.y, windowHeight - 200))}px`,

          transform: "translateY(-50%)",
        }}
        className="absolute"
      >
        <div className="flex left-8 items-center gap-2">
          <span className="text-2xl">✦</span>
          <div className="px-4 py-1 bg-black text-white text-xs font-medium rounded">
            PROZESS
          </div>
        </div>
      </div>

      <div
        style={{
          top: `${Math.max(200, Math.min(mousePosition.y, windowHeight - 200))}px`,
          transform: "translateY(-50%)",
        }}
        className="absolute right-8"
      >
        <div className="flex items-center gap-2">
          <div className="px-4 py-1 bg-black text-white text-xs font-medium rounded">
            PROZESS
          </div>
          <span className="text-2xl">✦</span>
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseOut}
        className="flex flex-col items-center justify-center cursor-none min-h-screen py-10 px-8"
      >
        {/* Hero Title */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center">
            <h1 className="text-[120px] leading-none font-black text-black text-center">
              MEIN
            </h1>

            {/* {isInSection && ( */}
              <div
                className="image-wrapper overflow-hidden"
                style={{ width: "0px", opacity: 0 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
                  alt=""
                  className="image w-50 h-28 rounded-lg object-cover"
                />
              </div>
            {/* )} */}
          </div>

          <div className="relative">
            <h1 className="text-[120px] leading-none font-black text-black text-center">
              PROZESS
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <p className="text-lg font-medium text-black">
            Vier Schritte zum neuen
          </p>
          <p className="text-lg font-medium text-black">Look deiner Website.</p>
        </div>

        {/* Process Steps */}
        <div className="flex text-black items-center gap-6 text-sm font-mono">
          <div className="flex items-center gap-2">
            <span className="font-bold">01</span>
            <span>DEFINE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">02</span>
            <span>DESIGN</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">03</span>
            <span>BUILD</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">04</span>
            <span>RUN</span>
          </div>
        </div>
      </div>
      {isInSection && (
        <div
        ref={cursorRef}
          className="absolute bg-yellow-400 flex items-center justify-center w-40 border-2 border-black rounded-full p-2 pointer-events-none will-change-transform"
      
        >
          <p className="text-sm text-black font-medium">ZUM PROZESS</p>
        </div>
      )}

      {isInSection && (
        <div
          className="absolute flex items-center justify-center pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="38"
              fill="#FDE047"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M35 30L45 40L35 50"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

   <div ref={sectionRef} className="h-[100svh] w-full flex items-center justify-center px-4">
        <div className="relative z-10 text-center max-w-3xl">
          <p className="split text-4xl font-medium text-black leading-relaxed">
            Jedes Projekt beginnt mit Verständnis. Wir tauchen tief in Ihre 
            Vision ein, verstehen Ihre Ziele und entwickeln eine Strategie, 
            die nicht nur funktioniert, sondern begeistert. Von der ersten 
            Idee bis zum finalen Launch begleiten wir Sie durch jeden Schritt 
            des kreativen Prozesses mit Präzision und Leidenschaft.
          </p>
        </div>
      </div>
        

      {/* Bottom navigation indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-1 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
}
