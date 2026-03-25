"use client";
import { useState } from "react";
import { Play } from "lucide-react";

import video1 from '../../public/images/poster1.jpg'
import video2 from '../../public/images/poster2.jpg'
import video3 from '../../public/images/poster3.jpg'
import video4 from '../../public/images/poster1.jpg'
import video5 from '../../public/images/poster5.jpg'
import Image from "next/image";

const projects = [
  { id: 1, no: "01", title: "Rosie Marlin — Louis XIII", director: "Guillaume Kam", type: "Commercial", video: video1 },
  { id: 2, no: "02", title: "Calvin Klein — Retro. Adam White", director: "MakeOff", type: "Film", video: video2 },
  { id: 3, no: "03", title: "Spotify — Betty's Top Hits", director: "Warren Fu", type: "Commercial", video: video3 },
  { id: 4, no: "04", title: "Nespresso — Mahdi", director: "Lorris Russier", type: "Commercial", video: video4 },
  { id: 5, no: "05", title: "Peugeot — Castle", director: "Atlantis", type: "Commercial", video: video5 },
  { id: 6, no: "06", title: "Miami Heat Stadium - Don Shti", director: "Andre Ferrari", type: "Commercial", video: video1  },
  { id: 7, no: "07", title: "A$AP Rocky — Big Boi", director: "Atlantis", type: "Music video", video: video2  },
  { id: 8, no: "08", title: "Proust x Kitsune", director: "Philippa Price", type: "Commercial", video: video3  },
  { id: 9, no: "09", title: "Peugeot 3624 — Take On The World", director: "Ryan Takemiya", type: "Commercial", video: video4  },
  { id: 10, no: "10", title: "Peugeot — Viices", director: "Atlantis", type: "Commercial", video: video5 },
  { id: 11, no: "11", title: "Evian — PG Sep", director: "Warren Denonzier", type: "Commercial", video: video1 },
  { id: 12, no: "12", title: "O.S — Green Room", director: "Paul Portaud", type: "Commercial", video: video2 },
  { id: 13, no: "13", title: "Kit Kitts — Spark Something", director: "Walta", type: "Commercial", video: video3 },
  { id: 14, no: "14", title: "The Strokes", director: "Tomas Jonsgarden", type: "Music video", video: video4 },
  { id: 15, no: "15", title: "Post Maton x Hot Seats — Waters", director: "Kid Studio", type: "Music video", video: video5 },
  { id: 16, no: "16", title: "L'i… — Trouble Evans", director: "Walta", type: "Commercial", video: video1 },
  { id: 17, no: "17", title: "Project Yellow Light — Love Story", director: "Quentin Deronzier", type: "Film", video: video2 },
  { id: 18, no: "18", title: "The Storm", director: "Daniel Sanford", type: "Film", video: video3 },
  { id: 19, no: "19", title: "Coat On — The Rainman Pleasure", director: "Daniel Sanford", type: "Commercial", video: video4 },
  { id: 20, no: "20", title: "Captain Tribe — Alexa Laurent", director: "Jon Krizch", type: "Music video", video: video5 },
  { id: 21, no: "21", title: "Chanel N°3 — La Face", director: "Quentin Deronzier", type: "Commercial", video: video1 },
  { id: 22, no: "22", title: "Goell B — Piece", director: "Jona Franklen", type: "Music video", video: video2 },
  { id: 23, no: "23", title: "Horse — Black Makes A War", director: "Julien Horner", type: "Music video", video: video3 },
  { id: 24, no: "24", title: "The Girl Next Door — Novita Les Citzen", director: "Daniel Sanford", type: "Film", video: video4 },
  { id: 25, no: "25", title: "Chaunel — The Four Red The Should", director: "Luda Partor Olson", type: "Commercial", video: video5 },
  { id: 26, no: "26", title: "Arctic Monkeys — Best of sip", director: "Kid Studio", type: "Commercial", video: video1 },
  { id: 27, no: "27", title: "Swatch — La Radio", director: "Walta", type: "Film", video: video2 },
  { id: 28, no: "28", title: "Enlightment!", director: "Nana Buxbaum/Angel Cereal", type: "Film", video: video3 }
];

export default function Portfolio() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <button className="px-4 py-1 bg-black text-white rounded-full text-sm font-sm">
            WORK
          </button>
          <button className="text-sm text-black bg-gray-200 px-4 py-1 rounded-full">
            ABOUT
          </button>
        </div>
        
        <h1 className="absolute left-1/2 -translate-x-1/2 text-black text-2xl">
          Emilie Aubry · <span className="italic">Emi</span>
        </h1>
        
        <button className="text-sm  bg-gray-200 px-4 py-1 rounded-full text-black ">
          CONTACT
        </button>
      </header>

      {/* View Toggle */}
      <div className="flex items-center justify-center gap-4 py-20">
        <button 
          onClick={() => setViewMode('list')}
          className={`text-sm font-medium ${viewMode === 'list' ? 'text-black' : 'text-gray-400'}`}
        >
          LIST
        </button>
        <div className="relative w-15 h-6 bg-gray-300 rounded-full cursor-pointer" onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}>
          <div 
            className={`absolute w-6 h-6 bg-black rounded-full transition-all duration-300 ${viewMode === 'grid' ? 'left-7' : 'left-1'}`}
          />
        </div>
        <button 
          onClick={() => setViewMode('grid')}
          className={`text-sm font-medium ${viewMode === 'grid' ? 'text-black' : 'text-gray-400'}`}
        >
          GRID
        </button>
      </div>

      {/* Projects List */}
      <div className="px-8 py-25">
        {/* Header Row */}
        <div className="grid grid-cols-20 gap-4 pb-4 text-xs font-medium text-black mb-4">
          <div className="col-span-1">NO</div>
          <div className="col-span-4">PROJECT</div>
          <div className="col-span-11"/>
          <div className="col-span-2">DIRECTED BY</div>
          <div className="col-span-2 text-right">TYPE</div>
        </div>

        {/* Projects */}
        <div className="space-y-0">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={hoveredId === project.id ? "grid grid-cols-20 gap-4 py-2 transition-colors text-black cursor-pointer relative group" : "grid grid-cols-20 gap-4 py-2 transition-colors text-gray-400 cursor-pointer relative group"}
            >
              <div className="col-span-1 text-sm ">{project.no}</div>
              <div className="col-span-4 text-sm font-medium">{project.title}</div>
              <div className="col-span-11"/>
              <div className="col-span-2 text-sm">{project.director}</div>
              <div className="col-span-2 text-sm text-right">{project.type}</div>
              
              {/* Featured Project Image */}
              {hoveredId === project.id && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <div className="relative w-96 h-64 rounded-lg overflow-hidden shadow-2xl">
                    <Image 
                      src={project.video} 
                        alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-black ml-1" fill="black" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}