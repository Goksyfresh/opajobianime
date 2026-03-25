'use client';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import photo1 from '../../public/images/poster1.jpg'
import photo2 from '../../public/images/poster2.jpg'
import photo3 from '../../public/images/poster3.jpg'
import photo4 from '../../public/images/poster1.jpg'
import photo5 from '../../public/images/poster5.jpg'
import photo6 from '../../public/images/poster6.jpg'
import photo7 from '../../public/images/poster7.jpg'
import photo8 from '../../public/images/poster8.jpg'
import photo9 from '../../public/images/poster9.jpg'
import photo10 from '../../public/images/poster10.jpg'
import photo11 from '../../public/images/poster11.jpg'
import photo12 from '../../public/images/poster12.jpg'
import photo13 from '../../public/images/poster13.jpg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Link from 'next/link';


export const archives = [
  { 
    id: 1, 
    img: photo1, 
    color: '#e74c3c', 
    alt: 'Fashion Archive 1',
    name: 'FASHION ARCHIVE 2024',
    expertise: 'Photography',
    description: 'A curated collection of editorial fashion photography exploring minimalist aesthetics',
    year: '2024',
    link: '/archive/fashion-2024'
  },
  { 
    id: 2, 
    img: photo2, 
    color: '#e67e22', 
    alt: 'Fashion Archive 2',
    name: 'URBAN NARRATIVES',
    expertise: 'Art Direction',
    description: 'Visual storytelling project documenting contemporary urban culture and design',
    year: '2024',
    link: '/archive/urban-narratives'
  },
  { 
    id: 3, 
    img: photo3, 
    color: '#3498db', 
    alt: 'Fashion Archive 3',
    name: 'TEXTILE FUTURES',
    expertise: 'Design Research',
    description: 'Experimental study on sustainable textile innovations and material culture',
    year: '2023',
    link: '/archive/textile-futures'
  },
  { 
    id: 4, 
    img: photo10, 
    color: '#e74c3c', 
    alt: 'Fashion Archive 4',
    name: 'PORTRAIT SERIES',
    expertise: 'Photography',
    description: 'Intimate portrait collection exploring identity and self-expression',
    year: '2023',
    link: '/archive/portrait-series'
  },
  { 
    id: 5, 
    img: photo5, 
    color: '#2c3e50', 
    alt: 'Fashion Archive 5',
    name: 'BRAND IDENTITY SYSTEM',
    expertise: 'Graphic Design',
    description: 'Comprehensive visual identity development for emerging fashion brands',
    year: '2023',
    link: '/archive/brand-identity'
  },
  { 
    id: 6, 
    img: photo6, 
    color: '#e74c3c', 
    alt: 'Fashion Archive 6',
    name: 'EDITORIAL LAYOUTS',
    expertise: 'Typography',
    description: 'Magazine layout designs emphasizing experimental typography and grid systems',
    year: '2022',
    link: '/archive/editorial-layouts'
  },
  { 
    id: 7, 
    img: photo7, 
    color: '#00bcd4', 
    alt: 'Fashion Archive 7',
    name: 'COLOR THEORY STUDY',
    expertise: 'Research',
    description: 'Visual research exploring color psychology in contemporary fashion contexts',
    year: '2022',
    link: '/archive/color-theory'
  },
  { 
    id: 8, 
    img: photo8, 
    color: '#ff9800', 
    alt: 'Fashion Archive 8',
    name: 'DIGITAL LOOKBOOK',
    expertise: 'Web Design',
    description: 'Interactive digital platform showcasing seasonal fashion collections',
    year: '2022',
    link: '/archive/digital-lookbook'
  },
  { 
    id: 9, 
    img: photo9, 
    color: '#4caf50', 
    alt: 'Fashion Archive 9',
    name: 'MOTION GRAPHICS',
    expertise: 'Animation',
    description: 'Dynamic visual content for fashion brand campaigns and social media',
    year: '2022',
    link: '/archive/motion-graphics'
  },
  { 
    id: 10, 
    img: photo10, 
    color: '#ffd700', 
    alt: 'Fashion Archive 10',
    name: 'STYLING PORTFOLIO',
    expertise: 'Fashion Styling',
    description: 'Collection of editorial and commercial styling work across various publications',
    year: '2021',
    link: '/archive/styling-portfolio'
  },
  { 
    id: 11, 
    img: photo11, 
    color: '#8b4513', 
    alt: 'Fashion Archive 11',
    name: 'PACKAGING DESIGN',
    expertise: 'Product Design',
    description: 'Sustainable packaging solutions for luxury fashion and beauty brands',
    year: '2021',
    link: '/archive/packaging-design'
  },
  { 
    id: 12, 
    img: photo12, 
    color: '#1a1a2e', 
    alt: 'Fashion Archive 12',
    name: 'TREND FORECASTING',
    expertise: 'Research',
    description: 'Seasonal trend analysis and forecasting reports for fashion industry clients',
    year: '2021',
    link: '/archive/trend-forecasting'
  },
  { 
    id: 13, 
    img: photo13, 
    color: '#0f3460', 
    alt: 'Fashion Archive 13',
    name: 'EXHIBITION DESIGN',
    expertise: 'Spatial Design',
    description: 'Immersive exhibition spaces for fashion shows and gallery installations',
    year: '2020',
    link: '/archive/exhibition-design'
  },
  { 
    id: 14, 
    img: photo10, 
    color: '#16213e', 
    alt: 'Fashion Archive 14',
    name: 'BRAND CAMPAIGNS',
    expertise: 'Creative Direction',
    description: 'Multi-channel marketing campaigns for established and emerging fashion labels',
    year: '2020',
    link: '/archive/brand-campaigns'
  },
  { 
    id: 15, 
    img: photo5, 
    color: '#c0392b', 
    alt: 'Fashion Archive 15',
    name: 'PRINT PUBLICATION',
    expertise: 'Editorial Design',
    description: 'Independent fashion magazine featuring avant-garde designers and artists',
    year: '2020',
    link: '/archive/print-publication'
  },
];
export default function ImageHover() {
  const [time, setTime] = useState(new Date());


  const [active, setActive] = useState<number | null>(null)
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
  

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
const onHover = (id:any)=>{
  setActive(id)
}

const onHoverOut = ()=>{
  setActive(null)
}
  const formatTime = (date:any) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Africa/Lagos'
    }).toUpperCase();
  };


  
const activeImage = archives.find(item => item.id === active)?.img

useGSAP(()=>{
  gsap.fromTo('.activate',{
    scale:0.93,
    opacity:0.5
  },{
    opacity:1,
    scale:1,
    duration:0.2,
    ease:'power2.inOut'
  })
},[activeImage])

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isTabletOrDesktop) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Switch to a Larger Device</h2>
          <p className="text-black/70">This animation is best viewed on tablet or desktop for the full interactive experience.</p>
        </div>
      </div>
    );
  }

  return (
     <div className="min-h-screen font-mono text-sm"  style={{
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)'
      }}>
      {/* Header */}
      <header className="border-b border-black px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg text-black opacity-0 font-bold">OPAJOBI©</h1>
            <p className="text-xs">{formatTime(time)} GMT+1</p>
          </div>
          
          <nav className="flex gap-8 text-xs">
            <Link href="/work" className="hover:opacity-50">WORK(10)</Link>
            <Link href="/about" className="hover:opacity-50 opacity-0">ABOUT</Link>
            <Link href="/archive" className="hover:opacity-50 opacity-0">ARCHIVE</Link>
            <Link href="/vibe-check" className="hover:opacity-50 opacity-0">VIBE-CHECK</Link>
            <div className='opacity-0'>
              <div>CONTACT</div>
              <Link href="mailto:opajobioyegokeoyebola@gmail.com" className="hover:opacity-50">OPAJOBI.COM</Link>
            </div>
            <div>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 opacity-0">LINKEDIN</Link>
              <Link href="https://are.na" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 opacity-0">ARE.NA</Link>
            </div>
            <div className="flex items-center gap-2">
              <div>SOUND [OFF]</div>
              {/* <div onClick={toggleTheme} className='cursor-pointer hover:opacity-50'>COLOR: {theme === 'light' ? '#F5F5F5' : '#121212'}</div> */}
            </div>
          </nav>

          {/* Barcode */}
          <div className="flex flex-col opacity-0 items-center">
            <svg width="50" height="60" viewBox="0 0 50 60">
              {[2, 6, 9, 11, 15, 18, 22, 25, 28, 32, 35, 38, 42, 46].map((x, i) => (
                <rect key={i} x={x} y="0" width={i % 3 === 0 ? "3" : "2"} height="50" fill="black" />
              ))}
            </svg>
            <span className="text-xs mt-1 rotate-90 origin-center">CREDIT</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 mt-50 py-16">
        {/* Archive Section */}
        <div className="mt-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-base"> ARCHIVE [14]</h2>
 <div className="flex gap-1 overflow-x-hidden pb-4">
            {archives.map((item) => (
              <div
                key={item.id}
               
                className="flex-shrink-0 w-20 h-24 rounded overflow-hidden cursor-pointer hover:scale-105 transition-transform relative"
       
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  onMouseOver={()=>onHover(item.id)}
                  onMouseLeave={onHoverOut}
                  fill
                  sizes="64px"
                  className="object-cover mix-blend-multiply"
                />
                 {active !== null && active !== item.id && (
                  <div className="absolute inset-0 bg-[var(--background-color)]/70 transition-opacity duration-300" />
                )}
              </div>
            ))}
          </div>
            <Link href="/archives" className="flex items-center ml-2 gap-1 hover:opacity-50">
              VIEW ALL <ArrowRight size={14} />
            </Link>
          </div>
          
         
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="fixed bottom-0 left-0 right-0 border-t border-black bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">OPAJOBI©</h2>
          
          <nav className="flex gap-8 opacity-0 text-xs">
            <Link href="mailto:opajobioyegokeoyebola@gmail.com" className="hover:opacity-50">HELLO@OPAJOBI.COM</Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">LINKEDIN</Link>
            <Link href="https://are.na" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">ARE.NA</Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">TWITTER</Link>
            <Link href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">SPOTIFY</Link>
          </nav>

          <button onClick={scrollToTop} className="flex items-center gap-2 text-xs hover:opacity-50">
            BACK TO TOP
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
              ↑
            </div>
          </button>
        </div>
      </footer> */}
      {active && activeImage &&(
          <div className='activate absolute top-1/2 left-1/2 -translate-x-1/2 pointer-events-none -translate-y-1/2 '>
      <Image
        src={activeImage}
                  alt='photo1'
                  className="object-cover w-90 h-110 mix-blend-multiply"
                  style={{zIndex:9999}}
      />

      </div>
      )}
    
    </div>
  );
}
